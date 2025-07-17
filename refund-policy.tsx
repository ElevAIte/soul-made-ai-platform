import { Card, CardContent } from "@/components/ui/card";
import { BionicText } from "@/components/ui/bionic-text";
import { Footer } from "@/components/ui/footer";
import { AlertCircle, Clock, Shield, Users } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--dark-gray))] mb-4">
              Marketplace Refund Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              <BionicText>Last updated: 7/17/2025</BionicText>
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">Important</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <BionicText>Each creator on Soul Made AI sets their own refund policy, clearly displayed on every product page before purchase. You're purchasing directly from the creator, with Soul Made AI facilitating the transaction.</BionicText>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* How Refunds Work */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">How Refunds Work</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>Soul Made AI operates as a marketplace where independent creators sell their spiritual wellness and business productivity tools. When you make a purchase, you're buying directly from the creator, with our platform facilitating the secure transaction and ensuring fair refund policies are maintained.</BionicText>
                  </p>
                  <p>
                    <BionicText>Every product page clearly displays the creator's specific refund policy before purchase, ensuring complete transparency about your rights and the creator's terms.</BionicText>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Platform Minimums */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Shield className="text-primary mr-3" size={24} />
                  <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))]">Platform Minimums (All Creators Must Offer)</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>To ensure customer protection, all creators on Soul Made AI must provide these minimum guarantees:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>14-day refund period</strong> if digital product has NOT been accessed or downloaded</li>
                    <li><strong>Clear refund terms</strong> displayed prominently before purchase</li>
                    <li><strong>Technical issues</strong> resolved by platform support team</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Creator-Specific Policies */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Users className="text-secondary mr-3" size={24} />
                  <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))]">Creator-Specific Policies</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>Individual creators may offer additional guarantees beyond our platform minimums:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Extended satisfaction guarantees:</strong> Some creators offer 7-day, 30-day, or longer satisfaction guarantees</li>
                    <li><strong>Money-back guarantees:</strong> Full refunds even after product access in certain cases</li>
                    <li><strong>Subscription cancellation:</strong> Terms vary by creator for recurring services</li>
                    <li><strong>Partial refunds:</strong> Some creators offer prorated refunds for unused portions</li>
                    <li><strong>Exchange policies:</strong> Option to exchange for different products from the same creator</li>
                  </ul>
                  <div className="bg-secondary/5 p-4 rounded-lg mt-4">
                    <p><strong>Important:</strong> All creator policies must meet our platform minimums and are clearly stated on each product page.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Request Refunds */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-6">How to Request Refunds</h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-3">Step-by-Step Process:</h3>
                    <ol className="list-decimal list-inside space-y-2">
                      <li><strong>Contact the creator directly first</strong> - Creator contact details are provided on your purchase receipt and order confirmation</li>
                      <li><strong>Allow 48 hours for response</strong> - Give the creator time to address your refund request</li>
                      <li><strong>Contact Soul Made AI if unresolved</strong> - If the creator doesn't respond within 48 hours or disputes arise, email penelope@soulmadeai.com</li>
                      <li><strong>Platform mediation</strong> - We'll enforce the creator's stated policy and mediate any disputes</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-3">What to Include in Your Refund Request:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Order number and purchase date</li>
                      <li>Product name and creator</li>
                      <li>Reason for refund request</li>
                      <li>Whether you've accessed/downloaded the product</li>
                      <li>Any relevant screenshots or documentation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Platform Protection */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">Platform Protection</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>Soul Made AI is committed to maintaining a fair and trustworthy marketplace:</BionicText>
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--dark-gray))] mb-2">Policy Review</h4>
                      <p className="text-sm">All creator refund policies are reviewed for fairness and compliance with consumer protection standards.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--dark-gray))] mb-2">Fraud Prevention</h4>
                      <p className="text-sm">Creators with fraudulent practices or unfair policies are immediately removed from the platform.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--dark-gray))] mb-2">Dispute Mediation</h4>
                      <p className="text-sm">Customer disputes are mediated by Soul Made AI to ensure fair resolution.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--dark-gray))] mb-2">Continuous Monitoring</h4>
                      <p className="text-sm">We continuously monitor creator performance and customer satisfaction.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Circumstances */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-6">Special Circumstances</h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">Technical Issues</h3>
                    <p>If you experience technical problems accessing your purchased content, contact our support team immediately. We'll work to resolve technical issues promptly and may offer refunds if problems cannot be fixed.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">Misrepresentation</h3>
                    <p>If a product significantly differs from its description or advertised features, you may be eligible for a refund regardless of access status. We take product misrepresentation seriously.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">AI-Generated Content</h3>
                    <p>Our AI services (like the Silver Linings Journal) are provided as-is. While we strive for quality, AI-generated content may vary in usefulness. Refunds for AI services are handled case-by-case.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Promise */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">Our Promise</h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>We ensure all creators offer fair, transparent refund policies that respect both creator rights and customer protection.</BionicText>
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p><strong>Remember:</strong> Specific refund terms apply to each purchase - always check the product page before buying.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Processing */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock className="text-accent mr-3" size={24} />
                  <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))]">Payment Processing</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>Refunds are processed through the same payment method used for the original purchase via Stripe. Processing times vary by payment method:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Credit/Debit Cards:</strong> 3-5 business days</li>
                    <li><strong>PayPal:</strong> 1-2 business days</li>
                    <li><strong>Bank Transfers:</strong> 5-10 business days</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">Contact Information</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    <BionicText>For refund disputes or questions about our refund policy:</BionicText>
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p><strong>Email:</strong> penelope@soulmadeai.com</p>
                      <p><strong>Response Time:</strong> Within 24 hours</p>
                      <p><strong>Business Hours:</strong> Monday-Friday, 9 AM - 5 PM GMT</p>
                    </div>
                    <div>
                      <p><strong>Mailing Address:</strong></p>
                      <p className="text-sm">
                        Soul Made AI<br />
                        c/o FPS Chartered Certified Accountants<br />
                        Levine House, 233 Wigan Road<br />
                        Ashton In Makerfield, Wigan<br />
                        WN4 9SI, United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">Changes to This Policy</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <BionicText>We may update this refund policy periodically. Changes will be communicated via email and platform notifications. The updated policy applies to all future purchases.</BionicText>
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}