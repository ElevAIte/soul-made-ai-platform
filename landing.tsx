import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Clock, Users, Play, Bolt, CheckCircle, Target, Zap, User, BookOpen, FileText, Book, Sparkles } from "lucide-react";
import { BionicText } from "@/components/ui/bionic-text";
import { Footer } from "@/components/ui/footer";
import auroraImage from "@assets/Bg9NEJCiUNL64Jcg6R5ss_1752774979293.png";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white dark:bg-background" id="main-content">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <Heart className="mr-2" size={16} />
              One soulful product. One powerful path.
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[hsl(var(--dark-gray))] mb-6 leading-tight">
              Follow Your Heart,<br />
              <span className="soul-text-gradient">Not Your Head</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              <BionicText>SoulMade AI is where conscious creators stop building more and start building better - one soul-aligned offer at a time. Built for coaches, creators, and soul-led entrepreneurs.</BionicText>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
                onClick={() => window.location.href = "/api/login"}
              >
                Start Creating Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/5"
              >
                <Play className="mr-2" size={16} />
                Watch Demo
              </Button>
            </div>
            
            {/* Beta Pricing Banner */}
            <div className="inline-flex items-center px-6 py-3 bg-secondary/10 rounded-full text-secondary font-medium border border-secondary/20">
              <Bolt className="mr-2" size={16} />
              Beta Pricing: Only 10% Platform Fee - Limited Time!
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4">Featured Course</h2>
            <p className="text-lg text-gray-600">Start your journey with our flagship course</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="AI and creativity visualization" 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                    <span className="ml-3 text-secondary font-semibold text-lg">$297</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">
                    Gen AI Fundamentals for Soul Led Creators
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    Master the art of using AI to amplify your creative gifts and build a sustainable income stream that aligns with your soul's purpose.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="mr-2 text-primary" size={16} />
                      <span>8 hours of content</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="mr-2 text-primary" size={16} />
                      <span>1,247 students enrolled</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="mr-2 text-secondary" size={16} />
                      <span>4.9 rating (156 reviews)</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary text-white hover:bg-primary/90 mb-4"
                    onClick={() => window.location.href = "/api/login"}
                  >
                    Enroll Now
                  </Button>
                  
                  <div className="text-center">
                    <Button variant="ghost" className="text-primary hover:text-primary/80">
                      <Heart className="mr-1" size={16} />
                      Add to Wishlist
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">Explore all the ways to grow your soul-led business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Courses */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-2">Courses</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <BionicText>Digital learning experiences that guide you step-by-step through transformational processes and skill-building journeys.</BionicText>
                </p>
              </CardContent>
            </Card>

            {/* Templates */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <FileText className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-2">Templates</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <BionicText>Ready-to-use planners, worksheets, business tools, and frameworks to streamline your conscious entrepreneur journey.</BionicText>
                </p>
              </CardContent>
            </Card>

            {/* E-books */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Book className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-2">E-books</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <BionicText>Comprehensive guides, methodologies, and frameworks that dive deep into soul-led business and personal development.</BionicText>
                </p>
              </CardContent>
            </Card>

            {/* Healing Tools */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                  <Sparkles className="text-purple-600 dark:text-purple-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-2">Healing Tools</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <BionicText>Meditations, energy work, breathwork sessions, and other conscious tools for inner healing and expansion.</BionicText>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Core Benefits Section */}
      <section className="py-20 bg-[hsl(var(--light-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4">Your soul already knows what you're meant to create</h2>
            <p className="text-lg text-gray-600">We guide you to that authentic choice through intuition, not market research or fear-based thinking.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-4">End Decision Paralysis</h3>
                <p className="text-gray-600">No more "which product should I build next?" Perfect for neurospicy creators who get overwhelmed by endless possibilities.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-4">Force Mastery Mode</h3>
                <p className="text-gray-600">Stop building. Start selling. Move from creation addiction to profit mastery. One product forces you into the growth phase where money is made.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-4">Clear Brand Identity</h3>
                <p className="text-gray-600">Become THE person known for ONE thing. Clear messaging, focused audience, undiluted impact. Your one thing becomes your signature.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Built by AI Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4">Built by AI. For AI-Enhanced Creators.</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Soul Made AI was created entirely with artificial intelligence - and we celebrate exceptional AI-generated soul-led content. Embrace the future of conscious creation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-4">AI-Generated Content Encouraged</h3>
                <p className="text-gray-600">Use ChatGPT, Claude, or any AI to create exceptional soul-led content. We value quality and transformation over "handcrafted" labels.</p>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Bolt className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-4">100% AI-Built Platform</h3>
                <p className="text-gray-600">Every line of code, every design element, every feature was created through AI collaboration. We practice what we preach about AI-enhanced creation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build One Soulful Product?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Stop building more. Start building better. Your soul already knows what you're meant to create.
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => window.location.href = "/api/login"}
          >
            Follow Your Heart Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
