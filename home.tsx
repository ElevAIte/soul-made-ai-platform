import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Heart, Star, Clock, Users, Play, Bolt, TrendingUp, BookOpen, DollarSign, FileText, Download, Book, Sparkles } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import auroraImage from "@assets/Bg9NEJCiUNL64Jcg6R5ss_1752774979293.png";

export default function Home() {
  const { user } = useAuth();

  const { data: courses = [], isLoading: coursesLoading } = useQuery({
    queryKey: ["/api/courses"],
  });

  const { data: purchases = [] } = useQuery({
    queryKey: ["/api/purchases"],
  });

  if (coursesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Welcome Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[hsl(var(--dark-gray))] mb-6 leading-tight">
              Welcome back, <span className="soul-text-gradient">{user?.firstName || "Creator"}</span>!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Continue your soul-led creator journey. Explore new courses or manage your creations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/courses">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Browse Courses
                </Button>
              </Link>
              {user?.isCreator && (
                <Link href="/creator-dashboard">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                    <TrendingUp className="mr-2" size={16} />
                    Creator Dashboard
                  </Button>
                </Link>
              )}
            </div>
            
            {/* Beta Pricing Banner */}
            <div className="inline-flex items-center px-6 py-3 bg-secondary/10 rounded-full text-secondary font-medium border border-secondary/20">
              <Bolt className="mr-2" size={16} />
              Beta Pricing: Only 10% Platform Fee - Limited Time!
            </div>
          </div>
        </div>
      </section>

      {/* User Stats Section */}
      {purchases.length > 0 && (
        <section className="py-12 bg-[hsl(var(--light-gray))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-2xl font-bold text-[hsl(var(--dark-gray))]">{purchases.length}</div>
                  <div className="text-sm text-gray-600">Courses Enrolled</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="mx-auto mb-2 text-secondary" size={24} />
                  <div className="text-2xl font-bold text-[hsl(var(--dark-gray))]">4.8</div>
                  <div className="text-sm text-gray-600">Avg. Course Rating</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="mx-auto mb-2 text-accent" size={24} />
                  <div className="text-2xl font-bold text-[hsl(var(--dark-gray))]">24h</div>
                  <div className="text-sm text-gray-600">Learning Time</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

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
                    src={auroraImage} 
                    alt="Soul-led creator meditating under aurora with AI brain on laptop" 
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
                  
                  <Link href="/course/1">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 mb-4">
                      View Course
                    </Button>
                  </Link>
                  
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
      <section className="py-20 bg-[hsl(var(--light-gray))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">Explore all the ways to grow your soul-led business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Courses */}
            <Link href="/products">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-2">Courses</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Digital learning experiences that guide you step-by-step through transformational processes and skill-building journeys.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Templates */}
            <Link href="/products">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <FileText className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-2">Templates</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Ready-to-use planners, worksheets, business tools, and frameworks to streamline your conscious entrepreneur journey.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* E-books */}
            <Link href="/products">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Book className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-2">E-books</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Comprehensive guides, methodologies, and frameworks that dive deep into soul-led business and personal development.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Healing Tools */}
            <Link href="/products">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                    <Sparkles className="text-purple-600 dark:text-purple-400" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-2">Healing Tools</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Meditations, energy work, breathwork sessions, and other conscious tools for inner healing and expansion.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Available Courses */}
      {courses.length > 0 && (
        <section className="py-20 bg-[hsl(var(--light-gray))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4">All Courses</h2>
              <p className="text-lg text-gray-600">Expand your skills and soul-led journey</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course: any) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <BookOpen className="text-primary" size={48} />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-secondary">
                        ${course.price}
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="mr-1 text-secondary" size={14} />
                        <span>{course.rating || "4.9"}</span>
                      </div>
                    </div>
                    <Link href={`/course/${course.id}`}>
                      <Button className="w-full bg-primary text-white hover:bg-primary/90">
                        View Course
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Become a Creator CTA */}
      {!user?.isCreator && (
        <section className="py-20 gradient-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Share Your Gifts?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Become a creator and start monetizing your soul-led expertise with our supportive platform.
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <DollarSign className="mr-2" size={16} />
              Become a Creator
            </Button>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
