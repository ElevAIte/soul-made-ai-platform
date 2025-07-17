import { Card, CardContent } from "@/components/ui/card";
import { BionicText } from "@/components/ui/bionic-text";
import { Footer } from "@/components/ui/footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--dark-gray))] mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              <BionicText>Last updated: 7/17/2025</BionicText>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Agreement to Terms */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">1. Agreement to Terms</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>By accessing and using Soul Made AI ("we", "our", or "us"), you agree to be bound by these Terms of Service. Our platform is a UK-based AI-powered e-commerce platform specializing in spiritual wellness and business productivity tools.</BionicText>
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p><strong>Company:</strong> Soul Made AI</p>
                    <p><strong>Contact:</strong> penelope@soulmadeai.com</p>
                    <p><strong>Address:</strong> c/o FPS Chartered Certified Accountants, Levine House, 233 Wigan Road, Ashton In Makerfield, Wigan, WN4 9SI, United Kingdom</p>
                    <p><strong>Website:</strong> soulmadeai.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description of Service */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">2. Description of Service</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>Soul Made AI provides an AI-powered marketplace for spiritual wellness and business productivity tools, including:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>AI-generated spiritual guidance and meditation content</li>
                    <li>Digital marketplace for spiritual and productivity tools</li>
                    <li>The Silver Linings Journal with AI companion</li>
                    <li>Business productivity applications and templates</li>
                    <li>Creator tools for uploading and selling digital products</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* User Accounts */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">3. User Accounts</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>To use our services, you must create an account and provide accurate information. You are responsible for:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Maintaining the security of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Immediately notifying us of any unauthorized use</li>
                    <li>Ensuring you are at least 16 years old</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* AI Services and Content */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">4. AI Services and Content</h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">AI-Generated Content</h3>
                    <p className="mb-3">
                      <BionicText>Our AI systems generate personalized spiritual guidance and business content. By using these services, you acknowledge:</BionicText>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>AI responses are generated based on algorithms and training data</li>
                      <li>Content is for informational and inspirational purposes only</li>
                      <li>AI guidance does not replace professional medical, legal, or financial advice</li>
                      <li>You use AI-generated content at your own discretion and risk</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">Accuracy and Limitations</h3>
                    <p>
                      <BionicText>While we strive for accuracy, AI-generated content may contain errors, omissions, or outdated information. We do not guarantee the completeness, reliability, or accuracy of AI responses.</BionicText>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Marketplace Terms */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">5. Marketplace Terms</h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">For Buyers</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>All purchases are final unless otherwise specified</li>
                      <li>Digital products are delivered electronically</li>
                      <li>You may not resell or redistribute purchased content</li>
                      <li>Access to products may be revoked for terms violations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">For Sellers</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>You retain ownership of your uploaded content</li>
                      <li>You grant us a license to distribute your products</li>
                      <li>Products must comply with our content guidelines</li>
                      <li>We handle payment processing and customer service</li>
                      <li>Commission fees apply to all sales</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">6. Payment Terms</h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>Payments are processed securely through Stripe. By making a purchase, you agree to:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Provide accurate payment information</li>
                    <li>Pay all charges associated with your account</li>
                    <li>Accept responsibility for all charges made under your account</li>
                    <li>Our refund policy as outlined in section 7</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Refunds and Cancellations */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">7. Refunds and Cancellations</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>Digital products are generally non-refundable. However, we may provide refunds at our discretion for:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Technical issues preventing access to purchased content</li>
                    <li>Significant misrepresentation of product features</li>
                    <li>Duplicate purchases made in error</li>
                    <li>Compliance with applicable consumer protection laws</li>
                  </ul>
                  <div className="bg-secondary/5 p-4 rounded-lg mt-4">
                    <p>To request a refund, contact <strong>penelope@soulmadeai.com</strong> within 14 days of purchase.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prohibited Uses */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">8. Prohibited Uses</h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>You may not use our service to:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Upload harmful, offensive, or inappropriate content</li>
                    <li>Attempt to breach security measures</li>
                    <li>Interfere with other users' experience</li>
                    <li>Create false or misleading accounts</li>
                    <li>Engage in fraudulent activities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">9. Intellectual Property</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <BionicText>The Soul Made AI platform, including its software, design, and AI algorithms, is protected by copyright and other intellectual property laws. You may not copy, modify, or distribute our platform without permission.</BionicText>
                </p>
              </CardContent>
            </Card>

            {/* Privacy and Data Protection */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">10. Privacy and Data Protection</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <BionicText>Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information. By using our service, you consent to data processing as described in our Privacy Policy.</BionicText>
                </p>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">11. Disclaimers</h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>Our service is provided "as is" without warranties. We disclaim all warranties, express or implied, including:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Merchantability and fitness for a particular purpose</li>
                    <li>Uninterrupted or error-free service</li>
                    <li>Accuracy of AI-generated content</li>
                    <li>Compatibility with all devices or browsers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">12. Limitation of Liability</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <BionicText>To the maximum extent permitted by law, Soul Made AI shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our service.</BionicText>
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">13. Governing Law</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <BionicText>These terms are governed by the laws of England and Wales. Any disputes shall be resolved in the courts of England and Wales.</BionicText>
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">14. Termination</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <BionicText>We may terminate or suspend your account at any time for violations of these terms. Upon termination, your right to use the service ceases immediately.</BionicText>
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">15. Changes to Terms</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <BionicText>We may modify these terms at any time. Significant changes will be communicated via email or platform notifications. Continued use after changes constitutes acceptance of new terms.</BionicText>
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">16. Contact Information</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-2">
                  <p>
                    <BionicText>For questions about these terms:</BionicText>
                  </p>
                  <p><strong>Email:</strong> penelope@soulmadeai.com</p>
                  <p><strong>Address:</strong> c/o FPS Chartered Certified Accountants, Levine House, 233 Wigan Road, Ashton In Makerfield, Wigan, WN4 9SI, United Kingdom</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}