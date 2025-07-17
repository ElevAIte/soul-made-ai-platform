import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  TrendingUp, 
  BookOpen, 
  DollarSign, 
  Users, 
  Star, 
  Plus,
  Bolt,
  Eye,
  Clock
} from "lucide-react";
import { isUnauthorizedError } from "@/lib/authUtils";

export default function CreatorDashboard() {
  const { toast } = useToast();
  const { isAuthenticated, isLoading, user } = useAuth();

  // Redirect to home if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [isAuthenticated, isLoading, toast]);

  const { data: courses = [], isLoading: coursesLoading, error: coursesError } = useQuery({
    queryKey: ["/api/creator/courses"],
    retry: false,
  });

  const { data: earnings, isLoading: earningsLoading, error: earningsError } = useQuery({
    queryKey: ["/api/creator/earnings"],
    retry: false,
  });

  // Handle unauthorized errors
  useEffect(() => {
    if (coursesError && isUnauthorizedError(coursesError)) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
    if (earningsError && isUnauthorizedError(earningsError)) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [coursesError, earningsError, toast]);

  if (isLoading || coursesLoading || earningsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--light-gray))]">
      {/* Dashboard Header */}
      <section className="gradient-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user?.firstName || "Creator"}!</h1>
              <p className="text-white/80">Your creator journey continues</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">
                ${earnings?.monthlyEarnings?.toFixed(2) || "0.00"}
              </div>
              <div className="text-white/80">This month's earnings</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Courses</p>
                  <p className="text-2xl font-bold text-primary">{courses.length}</p>
                </div>
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                  <p className="text-2xl font-bold text-secondary">
                    ${earnings?.totalEarnings?.toFixed(2) || "0.00"}
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Rating</p>
                  <p className="text-2xl font-bold text-accent">4.9</p>
                </div>
                <Star className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">You Keep</p>
                  <p className="text-2xl font-bold text-green-600">90%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Structure */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-secondary">
              <Bolt className="mr-2" />
              Beta Pricing Structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-[hsl(var(--dark-gray))] mb-2">Your Earnings</h5>
                  <div className="text-2xl font-bold text-green-600">90%</div>
                  <p className="text-sm text-gray-600">of each sale goes to you</p>
                </div>
                <div>
                  <h5 className="font-medium text-[hsl(var(--dark-gray))] mb-2">Platform Fee</h5>
                  <div className="text-2xl font-bold text-secondary">10%</div>
                  <p className="text-sm text-gray-600">covers payment processing & hosting</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Courses Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Your Courses */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))]">Your Products</h2>
              <Link href="/create-course">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  <Plus className="mr-2 h-4 w-4" />
                  List Product
                </Button>
              </Link>
            </div>

            {courses.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">
                    No products yet
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Start sharing your soul-led gifts by listing your first product.
                  </p>
                  <Link href="/create-course">
                    <Button className="bg-primary text-white hover:bg-primary/90">
                      <Plus className="mr-2 h-4 w-4" />
                      List Your First Product
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {courses.map((course: any) => (
                  <Card key={course.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">
                            {course.title}
                          </h3>
                          <p className="text-gray-600 mb-3 line-clamp-2">
                            {course.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <DollarSign className="mr-1 h-4 w-4" />
                              ${course.price}
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-1 h-4 w-4" />
                              {course.enrollmentCount || 0} enrolled
                            </div>
                            <div className="flex items-center">
                              <Star className="mr-1 h-4 w-4" />
                              {course.rating || "No ratings"}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="mr-1 h-4 w-4" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[hsl(var(--dark-gray))]">New purchase</p>
                      <p className="text-sm text-gray-600">Gen AI Fundamentals - $297</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-green-600">+$267.30</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Star className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[hsl(var(--dark-gray))]">New review</p>
                      <p className="text-sm text-gray-600">5 stars - "Life-changing course!"</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[hsl(var(--dark-gray))]">New enrollment</p>
                      <p className="text-sm text-gray-600">3 new students today</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
