import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Clock, Users, Star, Play, CheckCircle, Heart } from "lucide-react";

export default function Course() {
  const { user, isAuthenticated } = useAuth();
  const [match, params] = useRoute("/course/:id");
  const courseId = params?.id;

  const { data: course, isLoading } = useQuery({
    queryKey: ["/api/courses", courseId],
    enabled: !!courseId,
  });

  const { data: purchases = [] } = useQuery({
    queryKey: ["/api/purchases"],
    enabled: isAuthenticated,
  });

  const isPurchased = purchases.some((p: any) => p.courseId === parseInt(courseId || "0"));

  if (isLoading) {
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
          <p className="text-gray-600 mb-4">The course you're looking for doesn't exist.</p>
          <Link href="/courses">
            <Button>Browse Courses</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Course Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={course.imageUrl || "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"}
                    alt={course.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Course
                    </span>
                    <span className="ml-3 text-secondary font-semibold text-lg">
                      ${course.price}
                    </span>
                  </div>
                  
                  <h1 className="text-2xl font-bold text-[hsl(var(--dark-gray))] mb-4">
                    {course.title}
                  </h1>
                  
                  <p className="text-gray-600 mb-6">
                    {course.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {course.totalHours && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="mr-2 text-primary" size={16} />
                        <span>{course.totalHours} hours of content</span>
                      </div>
                    )}
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="mr-2 text-primary" size={16} />
                      <span>{course.enrollmentCount || 0} students enrolled</span>
                    </div>
                    {course.rating && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="mr-2 text-secondary" size={16} />
                        <span>{course.rating} rating ({course.reviewCount || 0} reviews)</span>
                      </div>
                    )}
                  </div>
                  
                  {isPurchased ? (
                    <Button className="w-full bg-green-600 text-white hover:bg-green-700 mb-4">
                      <CheckCircle className="mr-2" size={16} />
                      Enrolled - Continue Learning
                    </Button>
                  ) : (
                    <Link href={`/checkout?courseId=${course.id}`}>
                      <Button className="w-full bg-primary text-white hover:bg-primary/90 mb-4">
                        Enroll Now
                      </Button>
                    </Link>
                  )}
                  
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

      {/* Course Modules */}
      {course.modules && course.modules.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4">Course Modules</h2>
              <p className="text-lg text-gray-600">Structured learning path to mastery</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {course.modules.map((module: any, index: number) => (
                  <Card key={module.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                            index === 0 ? 'bg-primary/10' : 
                            index === 1 ? 'bg-secondary/10' : 'bg-accent/10'
                          }`}>
                            <span className={`font-bold ${
                              index === 0 ? 'text-primary' : 
                              index === 1 ? 'text-secondary' : 'text-accent'
                            }`}>
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-[hsl(var(--dark-gray))]">{module.title}</h3>
                            <p className="text-sm text-gray-600">{module.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {module.duration && (
                            <span className="text-sm text-gray-500">{module.duration} hours</span>
                          )}
                          {module.lessonCount && (
                            <div className="flex items-center mt-1">
                              <Play className="text-primary mr-1" size={12} />
                              <span className="text-sm text-gray-600">{module.lessonCount} lessons</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {index === 0 && (
                          <>
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">AI Basics</span>
                            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs">Creative Applications</span>
                            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">Soul Connection</span>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">Brand Strategy</span>
                            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs">Content Creation</span>
                            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">Authentic Voice</span>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">Revenue Streams</span>
                            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs">Pricing Strategy</span>
                            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">Soul Alignment</span>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Default modules if none exist */}
      {(!course.modules || course.modules.length === 0) && (
        <section className="py-20 bg-[hsl(var(--light-gray))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4">Course Modules</h2>
              <p className="text-lg text-gray-600">Structured learning path to mastery</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {/* Default Module 1 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-primary font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[hsl(var(--dark-gray))]">Foundation of AI for Creators</h3>
                          <p className="text-sm text-gray-600">Understanding AI tools and their creative potential</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500">2.5 hours</span>
                        <div className="flex items-center mt-1">
                          <Play className="text-primary mr-1" size={12} />
                          <span className="text-sm text-gray-600">8 lessons</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">AI Basics</span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs">Creative Applications</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">Soul Connection</span>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Default Module 2 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-secondary font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[hsl(var(--dark-gray))]">Building Your Creator Brand</h3>
                          <p className="text-sm text-gray-600">Developing authentic brand identity with AI assistance</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500">3 hours</span>
                        <div className="flex items-center mt-1">
                          <Play className="text-primary mr-1" size={12} />
                          <span className="text-sm text-gray-600">12 lessons</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">Brand Strategy</span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs">Content Creation</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">Authentic Voice</span>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Default Module 3 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-accent font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[hsl(var(--dark-gray))]">Monetization Strategies</h3>
                          <p className="text-sm text-gray-600">Creating sustainable income from your soul-led gifts</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500">2.5 hours</span>
                        <div className="flex items-center mt-1">
                          <Play className="text-primary mr-1" size={12} />
                          <span className="text-sm text-gray-600">10 lessons</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">Revenue Streams</span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs">Pricing Strategy</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">Soul Alignment</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
