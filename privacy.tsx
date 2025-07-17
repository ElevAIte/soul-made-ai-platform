import { Card, CardContent } from "@/components/ui/card";
import { BionicText } from "@/components/ui/bionic-text";
import { Footer } from "@/components/ui/footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--dark-gray))] mb-4">
              Privacy Policy
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
            
            {/* Introduction */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">1. Introduction</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>Welcome to Soul Made AI ("we", "our", or "us"). We are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our AI-powered e-commerce platform specializing in spiritual wellness and business productivity tools.</BionicText>
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p><strong>Data Controller:</strong> Soul Made AI</p>
                    <p><strong>Contact:</strong> penelope@soulmadeai.com</p>
                    <p><strong>Address:</strong> c/o FPS Chartered Certified Accountants, Levine House, 233 Wigan Road, Ashton In Makerfield, Wigan, WN4 9SI, United Kingdom</p>
                    <p><strong>Website:</strong> soulmadeai.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">2. Information We Collect</h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Name and contact details (email address, phone number)</li>
                      <li>Payment information (processed securely through Stripe)</li>
                      <li>Account credentials and profile information</li>
                      <li>Purchase history and transaction records</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">AI Interaction Data</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Journal entries and spiritual reflections submitted to our AI companion</li>
                      <li>Messages and conversations with AI systems</li>
                      <li>AI-generated responses and personalized guidance</li>
                      <li>Usage patterns and interaction preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">Technical Data</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>IP address, browser type, and device information</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Usage analytics and performance metrics</li>
                      <li>Error logs and diagnostic information</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">3. How We Use Your Information</h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p><strong>Service Delivery:</strong> To provide our AI-powered spiritual wellness tools and e-commerce platform</p>
                  <p><strong>AI Processing:</strong> To generate personalized spiritual guidance and business content through our AI systems</p>
                  <p><strong>Transaction Processing:</strong> To handle payments, refunds, and customer service</p>
                  <p><strong>Communication:</strong> To send important updates, security alerts, and customer support</p>
                  <p><strong>Platform Improvement:</strong> To enhance our AI algorithms and user experience</p>
                  <p><strong>Legal Compliance:</strong> To meet our legal obligations and protect user rights</p>
                </div>
              </CardContent>
            </Card>

            {/* AI Data Processing */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">4. AI Data Processing</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>Our AI systems process your data to provide personalized spiritual guidance and business productivity tools. This includes:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Analyzing journal entries to generate meaningful spiritual insights</li>
                    <li>Processing user preferences to customize AI responses</li>
                    <li>Creating personalized meditation guides and healing recommendations</li>
                    <li>Generating business productivity content based on user needs</li>
                  </ul>
                  <div className="bg-accent/5 p-4 rounded-lg">
                    <p><strong>Third-Party AI Services:</strong> We use OpenAI's services for content generation. Data sent to OpenAI is processed according to their privacy policy and our data processing agreements.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Storage and Security */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">5. Data Storage and Security</h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>We implement appropriate technical and organizational measures to protect your data:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Encrypted data transmission (HTTPS/TLS)</li>
                    <li>Secure database storage with access controls</li>
                    <li>Regular security audits and updates</li>
                    <li>Payment data handled by PCI-compliant processors (Stripe)</li>
                    <li>Journal entries stored securely in Airtable with encryption</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights Under GDPR */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">6. Your Rights Under GDPR</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>As a UK-based company serving international customers, you have the following rights:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                    <li><strong>Erasure:</strong> Request deletion of your data (right to be forgotten)</li>
                    <li><strong>Portability:</strong> Receive your data in a structured format</li>
                    <li><strong>Restriction:</strong> Limit how we process your data</li>
                    <li><strong>Objection:</strong> Object to certain types of processing</li>
                    <li><strong>Withdraw Consent:</strong> Revoke consent for AI processing at any time</li>
                  </ul>
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <p>To exercise these rights, contact us at <strong>penelope@soulmadeai.com</strong>. We will respond within 30 days.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">7. Data Sharing and Third Parties</h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>We share data only when necessary:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Payment Processing:</strong> Stripe for secure payment handling</li>
                    <li><strong>Data Storage:</strong> Airtable for journal entry storage</li>
                    <li><strong>AI Services:</strong> OpenAI for content generation</li>
                    <li><strong>Analytics:</strong> Anonymized usage data for platform improvement</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">8. Cookies and Tracking</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <BionicText>We use cookies to enhance your experience. You can control cookies through your browser settings. Essential cookies are required for platform functionality.</BionicText>
                </p>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">9. International Transfers</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <BionicText>Some data may be processed outside the UK/EU by our service providers. We ensure adequate protection through standard contractual clauses and adequacy decisions.</BionicText>
                </p>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">10. Data Retention</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <BionicText>We retain data only as long as necessary for service delivery and legal compliance. Journal entries are kept for the duration of your account plus 2 years for yearbook creation purposes.</BionicText>
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">11. Children's Privacy</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <BionicText>Our service is not intended for children under 16. We do not knowingly collect data from minors.</BionicText>
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">12. Contact Information</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-2">
                  <p>
                    <BionicText>For privacy-related questions or to exercise your rights:</BionicText>
                  </p>
                  <p><strong>Email:</strong> penelope@soulmadeai.com</p>
                  <p><strong>Address:</strong> c/o FPS Chartered Certified Accountants, Levine House, 233 Wigan Road, Ashton In Makerfield, Wigan, WN4 9SI, United Kingdom</p>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">13. Changes to This Policy</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <BionicText>We may update this Privacy Policy periodically. Significant changes will be communicated via email or platform notifications.</BionicText>
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