import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Loader2, CreditCard, CheckCircle } from "lucide-react";

if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  throw new Error('Missing required Stripe key: VITE_STRIPE_PUBLIC_KEY');
}
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = ({ course, paymentDetails }: { course: any, paymentDetails: any }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/course/${course.id}?enrolled=true`,
      },
    });

    setIsProcessing(false);

    if (error) {
      toast({
        title: "Payment Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Payment Successful",
        description: "Thank you for your purchase! You now have access to the course.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
        <h3 className="font-semibold text-[hsl(var(--dark-gray))] mb-2">Order Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Course Price:</span>
            <span>${paymentDetails.amount}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>You Save (Platform Fee Only 10%):</span>
            <span>-${((paymentDetails.amount * 0.20) - paymentDetails.platformFee).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Total:</span>
            <span>${paymentDetails.amount}</span>
          </div>
        </div>
      </div>

      <PaymentElement />
      
      <Button 
        type="submit" 
        disabled={!stripe || isProcessing}
        className="w-full bg-primary text-white hover:bg-primary/90"
      >
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing Payment...
          </>
        ) : (
          <>
            <CreditCard className="mr-2 h-4 w-4" />
            Complete Purchase - ${paymentDetails.amount}
          </>
        )}
      </Button>
    </form>
  );
};

export default function Checkout() {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  
  // Get course ID from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('courseId');

  const { data: course, isLoading: courseLoading } = useQuery({
    queryKey: ["/api/courses", courseId],
    enabled: !!courseId,
  });

  useEffect(() => {
    if (!isAuthenticated || !courseId || authLoading) return;

    // Create PaymentIntent as soon as the page loads
    apiRequest("POST", "/api/create-payment-intent", { courseId: parseInt(courseId) })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setPaymentDetails(data);
      })
      .catch((error) => {
        console.error("Error creating payment intent:", error);
      });
  }, [courseId, isAuthenticated, authLoading]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      window.location.href = "/api/login";
    }
  }, [isAuthenticated, authLoading]);

  if (authLoading || courseLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">Course Not Found</h1>
          <p className="text-gray-600">The course you're trying to purchase doesn't exist.</p>
        </Card>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary mb-4" />
          <p className="text-gray-600">Preparing your purchase...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--light-gray))] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[hsl(var(--dark-gray))] mb-2">Complete Your Purchase</h1>
          <p className="text-gray-600">You're about to unlock your soul-led potential</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 text-primary" size={20} />
                Course Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <img 
                  src={course.imageUrl || "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"}
                  alt={course.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))]">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {course.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-lg font-semibold text-[hsl(var(--dark-gray))]">Price:</span>
                  <span className="text-2xl font-bold text-secondary">${course.price}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 text-primary" size={20} />
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Beta Pricing Notice */}
              <div className="mb-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">🎉 Beta Pricing Active!</h4>
                <p className="text-sm text-gray-600">
                  You're getting our special beta rate with only 10% platform fees. 
                  Regular pricing will be 20% after beta period.
                </p>
              </div>

              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm course={course} paymentDetails={paymentDetails} />
              </Elements>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
