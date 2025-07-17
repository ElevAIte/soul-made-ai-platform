import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BionicText } from "@/components/ui/bionic-text";
import { Footer } from "@/components/ui/footer";
import { Star, TrendingUp, DollarSign, Eye } from "lucide-react";

const successStories = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Spiritual Coach",
    avatar: "SC",
    rating: 4.9,
    badge: "Top Seller",
    badgeColor: "bg-green-100 text-green-800",
    quote: "I've earned over $50,000 selling my spiritual guidance templates. The platform makes it so easy to reach customers globally.",
    sales: "2,500+",
    earned: "$52,000",
    category: "Spiritual Guidance",
    categoryIcon: "🔮"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    title: "Mindfulness Teacher",
    avatar: "/api/placeholder/40/40",
    rating: 4.8,
    badge: "Bestseller",
    badgeColor: "bg-blue-100 text-blue-800",
    quote: "My meditation courses have helped thousands of students. The automated delivery system saves me hours every day.",
    sales: "1,200+",
    earned: "$95,000",
    category: "Meditation",
    categoryIcon: "🧘‍♂️"
  },
  {
    id: 3,
    name: "Emma Johnson",
    title: "Business Coach",
    avatar: "/api/placeholder/40/40",
    rating: 4.7,
    badge: "Rising Star",
    badgeColor: "bg-purple-100 text-purple-800",
    quote: "I love how simple it is to upload and sell my business templates. The global reach has transformed my coaching practice.",
    sales: "3,800+",
    earned: "$35,000",
    category: "Business",
    categoryIcon: "💼"
  }
];

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--dark-gray))] mb-4">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              <BionicText>See how creators are building their dream businesses and earning from their passion</BionicText>
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* Header with Avatar and Info */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {story.avatar.startsWith('/api') ? (
                        <img 
                          src={story.avatar} 
                          alt={story.name}
                          className="w-12 h-12 rounded-full object-cover bg-gray-200"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                          {story.avatar}
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold text-[hsl(var(--dark-gray))]">{story.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{story.title}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${story.badgeColor}`}>
                      {story.badge}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="ml-1 text-sm font-medium text-[hsl(var(--dark-gray))]">{story.rating}</span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-600 dark:text-gray-300 mb-6 italic">
                    <BionicText>"{story.quote}"</BionicText>
                  </blockquote>

                  {/* Statistics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="text-primary mr-1" size={16} />
                        <span className="text-xs text-gray-600 dark:text-gray-400">Sales</span>
                      </div>
                      <div className="text-lg font-bold text-[hsl(var(--dark-gray))]">{story.sales}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <DollarSign className="text-green-600 mr-1" size={16} />
                        <span className="text-xs text-gray-600 dark:text-gray-400">Earned</span>
                      </div>
                      <div className="text-lg font-bold text-green-600">{story.earned}</div>
                    </div>
                  </div>

                  {/* Category and View Profile */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="mr-1">{story.categoryIcon}</span>
                      <span>Category: {story.category}</span>
                    </div>
                    <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/5">
                      <Eye className="mr-1" size={14} />
                      View Profile →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            <BionicText>Join thousands of creators who are building sustainable businesses by following their hearts, not market trends.</BionicText>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              onClick={() => window.location.href = "/products"}
            >
              Browse Success Products
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4">
              Platform Success Metrics
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              <BionicText>Real numbers from our soul-led creator community</BionicText>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">7,500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Sales</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$182K</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Creator Earnings</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">247</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Creators</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">4.8★</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Rating</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}