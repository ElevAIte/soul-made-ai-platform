import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { BookOpen, FileText, Book, Sparkles, Star, Clock, Users, Filter } from "lucide-react";
import { useState } from "react";
import { Footer } from "@/components/ui/footer";
import { BionicText } from "@/components/ui/bionic-text";

type ProductCategory = "all" | "courses" | "templates" | "ebooks" | "healing";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("all");

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["/api/courses"],
  });

  const categories = [
    { 
      id: "all" as const, 
      name: "All Products", 
      icon: Filter,
      description: "Browse everything"
    },
    { 
      id: "courses" as const, 
      name: "Courses", 
      icon: BookOpen,
      description: "Digital learning experiences"
    },
    { 
      id: "templates" as const, 
      name: "Templates", 
      icon: FileText,
      description: "Ready-to-use tools"
    },
    { 
      id: "ebooks" as const, 
      name: "E-books", 
      icon: Book,
      description: "Comprehensive guides"
    },
    { 
      id: "healing" as const, 
      name: "Healing Tools", 
      icon: Sparkles,
      description: "Conscious wellness"
    }
  ];

  // For now, we'll show courses for all categories since that's what we have in the database
  // In a real implementation, you'd filter based on a category field in the database
  const filteredProducts = courses;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-background" id="main-content">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--dark-gray))] mb-6">
              <span className="soul-text-gradient">Soul-Led Products</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              <BionicText>Discover courses, templates, e-books, and healing tools created by conscious entrepreneurs following their hearts, not market trends.</BionicText>
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[hsl(var(--light-gray))] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <Button
                  key={category.id}
                  variant={isActive ? "default" : "outline"}
                  className={`flex items-center gap-2 ${isActive ? 'bg-primary text-white' : 'hover:bg-primary/5'}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon size={16} />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Category Info */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {selectedCategory !== "all" && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                <Filter size={16} />
                {categories.find(c => c.id === selectedCategory)?.description}
              </div>
            )}
            <p className="text-gray-600 dark:text-gray-300">
              {selectedCategory === "all" 
                ? `Showing all ${filteredProducts.length} products`
                : `${filteredProducts.length} ${categories.find(c => c.id === selectedCategory)?.name.toLowerCase()} available`
              }
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product: any) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <BookOpen className="text-primary" size={48} />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        Course
                      </span>
                      {product.featured && (
                        <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[hsl(var(--dark-gray))] mb-2">
                      <BionicText>{product.title}</BionicText>
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      <BionicText>{product.description}</BionicText>
                    </p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="mr-2 text-primary" size={14} />
                        <span>Self-paced learning</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-2 text-primary" size={14} />
                        <span>1,200+ students</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="mr-2 text-secondary" size={14} />
                        <span>{product.rating || "4.9"} rating</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-secondary">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${Math.round(Number(product.price) * 1.3)}
                      </span>
                    </div>
                    
                    <Link href={`/course/${product.id}`}>
                      <Button className="w-full bg-primary text-white hover:bg-primary/90">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <BookOpen className="text-gray-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We're working on adding more {selectedCategory !== "all" ? categories.find(c => c.id === selectedCategory)?.name.toLowerCase() : "products"} to our platform.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory("all")}
              >
                View All Products
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}