import { Card, CardContent } from "@/components/ui/card";
import { BionicText } from "@/components/ui/bionic-text";
import { Footer } from "@/components/ui/footer";

export default function AIPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--dark-gray))] mb-4">
              AI Policy
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
                    <BionicText>Soul Made AI is committed to the responsible and ethical use of artificial intelligence. This AI Policy explains how we use AI technologies, the data processing involved, and your rights regarding AI-generated content.</BionicText>
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p><strong>Company:</strong> Soul Made AI</p>
                    <p><strong>Contact:</strong> penelope@soulmadeai.com</p>
                    <p><strong>Address:</strong> c/o FPS Chartered Certified Accountants, Levine House, 233 Wigan Road, Ashton In Makerfield, Wigan, WN4 9SI, United Kingdom</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Services We Provide */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">2. AI Services We Provide</h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>Our AI-powered services include:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Spiritual Guidance:</strong> Personalized spiritual insights and meditation guidance</li>
                    <li><strong>Journal Companion:</strong> AI responses to daily journal entries in The Silver Linings Journal</li>
                    <li><strong>Content Generation:</strong> Creation of spiritual and business productivity content</li>
                    <li><strong>Personalized Recommendations:</strong> Product and content suggestions based on user preferences</li>
                    <li><strong>Customer Support:</strong> AI-assisted customer service responses</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* AI Technology We Use */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">3. AI Technology We Use</h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>We primarily use OpenAI's GPT models for content generation and natural language processing. Our AI systems are designed to provide helpful, harmless, and honest responses within the context of spiritual wellness and business productivity.</BionicText>
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">Third-Party AI Services</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>OpenAI:</strong> For text generation and conversation</li>
                      <li><strong>Data Processing:</strong> All third-party AI services are bound by data processing agreements</li>
                      <li><strong>Security:</strong> Data is transmitted securely and processed according to privacy standards</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Processing for AI */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">4. Data Processing for AI</h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">What Data We Process</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Journal entries and spiritual reflections</li>
                      <li>User messages and questions</li>
                      <li>Preference data and interaction history</li>
                      <li>Context from previous conversations</li>
                      <li>User feedback on AI responses</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">How We Process Data</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Data is anonymized where possible</li>
                      <li>Processing occurs in secure, encrypted environments</li>
                      <li>Data is used only for generating relevant responses</li>
                      <li>We do not train our own AI models on user data</li>
                      <li>Third-party processors are bound by strict data agreements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Consent and Control */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">5. User Consent and Control</h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">Consent Requirements</h3>
                    <p className="mb-3">
                      <BionicText>By using our AI services, you explicitly consent to:</BionicText>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Processing your data through AI systems</li>
                      <li>Generating personalized content based on your inputs</li>
                      <li>Storage of interaction data for service improvement</li>
                      <li>Sharing anonymized data with third-party AI providers</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">Your Control Options</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Opt-out:</strong> You can discontinue using AI services at any time</li>
                      <li><strong>Data Deletion:</strong> Request removal of your AI interaction data</li>
                      <li><strong>Preference Settings:</strong> Adjust how AI processes your information</li>
                      <li><strong>Feedback:</strong> Rate and provide feedback on AI responses</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI-Generated Content Disclaimers */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">6. AI-Generated Content Disclaimers</h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">Nature of AI Content</h3>
                    <p className="mb-3">
                      <BionicText>All AI-generated content is created by artificial intelligence systems and should be understood as such:</BionicText>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Content is generated based on patterns in training data</li>
                      <li>Responses are not human opinions or professional advice</li>
                      <li>AI may occasionally produce inaccurate or inappropriate content</li>
                      <li>Generated content reflects AI training, not human expertise</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">Professional Advice Disclaimer</h3>
                    <p className="mb-3">
                      <BionicText>AI-generated spiritual guidance and business content is for informational purposes only and does not constitute:</BionicText>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Professional medical, psychological, or therapeutic advice</li>
                      <li>Legal or financial consultation</li>
                      <li>Religious or spiritual doctrine</li>
                      <li>Personalized treatment recommendations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accuracy and Limitations */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">7. Accuracy and Limitations</h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">Known Limitations</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Accuracy:</strong> AI may provide incorrect or outdated information</li>
                      <li><strong>Context:</strong> AI may misunderstand nuanced or complex situations</li>
                      <li><strong>Bias:</strong> AI responses may reflect biases present in training data</li>
                      <li><strong>Creativity:</strong> AI generates novel content but may lack human creativity</li>
                      <li><strong>Emotional Intelligence:</strong> AI simulates empathy but lacks genuine emotional understanding</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">Quality Assurance</h3>
                    <p className="mb-3">
                      <BionicText>We implement measures to improve AI accuracy and safety:</BionicText>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Regular review of AI output quality</li>
                      <li>Content filtering and safety measures</li>
                      <li>User feedback integration</li>
                      <li>Continuous improvement of AI prompts and systems</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">8. Intellectual Property</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <h3 className="text-lg font-semibold text-[hsl(var(--dark-gray))] mb-2">AI-Generated Content Ownership</h3>
                  <p className="mb-3">
                    <BionicText>Regarding intellectual property rights in AI-generated content:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Users retain rights to their original inputs and prompts</li>
                    <li>AI-generated responses are provided for your use</li>
                    <li>We do not claim ownership of AI-generated content</li>
                    <li>Users are responsible for ensuring appropriate use of generated content</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Safety and Moderation */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">9. Safety and Moderation</h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>We implement safety measures to ensure responsible AI use:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Content filtering to prevent harmful outputs</li>
                    <li>Monitoring for inappropriate use patterns</li>
                    <li>User reporting mechanisms for concerning content</li>
                    <li>Regular safety audits and improvements</li>
                    <li>Compliance with AI safety best practices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Transparency and Accountability */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">10. Transparency and Accountability</h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>We are committed to transparency in our AI operations:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Clear labeling of AI-generated content</li>
                    <li>Regular updates to AI capabilities and limitations</li>
                    <li>Open communication about AI system changes</li>
                    <li>Responsive customer support for AI-related concerns</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Changes to AI Services */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">11. Changes to AI Services</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <BionicText>We may update our AI services, capabilities, or policies. Significant changes will be communicated through:</BionicText>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Email notifications to users</li>
                    <li>Platform announcements</li>
                    <li>Updated policy documentation</li>
                    <li>In-app notifications for major changes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">12. Contact Information</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-2">
                  <p>
                    <BionicText>For questions about our AI policies or to report concerns:</BionicText>
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