import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ExternalLink, ArrowLeft, Sparkles } from "lucide-react";
import { BionicText } from "@/components/ui/bionic-text";

const createCourseSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  price: z.string().min(1, "Price is required").refine(
    (val) => !isNaN(Number(val)) && Number(val) > 0,
    "Price must be a positive number"
  ),
  category: z.enum(["course", "template", "ebook", "healing"]),
  imageUrl: z.string().url("Please enter a valid image URL").optional().or(z.literal("")),
  tags: z.string().optional(),
});

type CreateCourseData = z.infer<typeof createCourseSchema>;

export default function CreateCourse() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<CreateCourseData>({
    resolver: zodResolver(createCourseSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: "course",
      imageUrl: "",
      tags: "",
    },
  });

  const createCourseMutation = useMutation({
    mutationFn: async (data: CreateCourseData) => {
      const courseData = {
        ...data,
        price: Number(data.price),
        tags: data.tags ? data.tags.split(",").map(tag => tag.trim()) : [],
      };
      return apiRequest("POST", "/api/courses", courseData);
    },
    onSuccess: () => {
      toast({
        title: "Product Listed Successfully!",
        description: "Your product is now available on the marketplace. You can upload your PDF file from the dashboard.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/creator/courses"] });
      navigate("/creator-dashboard");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create product listing",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: CreateCourseData) => {
    createCourseMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--light-gray))]" id="main-content">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/creator-dashboard")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Dashboard
          </Button>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className="text-primary" size={48} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dark-gray))] mb-4">
              <span className="soul-text-gradient">List Your Product</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              <BionicText>Share your soul-led creation with conscious learners. Create your product listing and upload your digital file.</BionicText>
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-primary" size={20} />
              Product Information
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              <BionicText>Tell us about your digital product that customers will receive</BionicText>
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Product Title */}
              <div>
                <Label htmlFor="title">Product Title *</Label>
                <Input
                  id="title"
                  {...form.register("title")}
                  placeholder="e.g., Soul AI Prompt Mega Pack"
                  className="mt-1"
                />
                {form.formState.errors.title && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.title.message}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  {...form.register("description")}
                  placeholder="Describe what customers will receive in your digital product..."
                  rows={4}
                  className="mt-1"
                />
                {form.formState.errors.description && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.description.message}</p>
                )}
              </div>

              {/* Price and Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price (USD) *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    {...form.register("price")}
                    placeholder="97.00"
                    className="mt-1"
                  />
                  {form.formState.errors.price && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.price.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select onValueChange={(value) => form.setValue("category", value as any)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="course">Course</SelectItem>
                      <SelectItem value="template">Template</SelectItem>
                      <SelectItem value="ebook">E-book</SelectItem>
                      <SelectItem value="healing">Healing Tool</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.category && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.category.message}</p>
                  )}
                </div>
              </div>

              {/* File Upload Placeholder */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ExternalLink className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      Digital Product File
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <BionicText>After creating your listing, you can upload your PDF file that customers will receive after purchase</BionicText>
                    </p>
                  </div>
                </div>
              </div>

              {/* Image URL */}
              <div>
                <Label htmlFor="imageUrl">Product Image URL (Optional)</Label>
                <Input
                  id="imageUrl"
                  type="url"
                  {...form.register("imageUrl")}
                  placeholder="https://example.com/product-image.jpg"
                  className="mt-1"
                />
                <p className="text-sm text-gray-600 mt-1">
                  <BionicText>Direct link to your product cover image</BionicText>
                </p>
                {form.formState.errors.imageUrl && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.imageUrl.message}</p>
                )}
              </div>

              {/* Tags */}
              <div>
                <Label htmlFor="tags">Tags (Optional)</Label>
                <Input
                  id="tags"
                  {...form.register("tags")}
                  placeholder="soul-led, business, mindset, intuition"
                  className="mt-1"
                />
                <p className="text-sm text-gray-600 mt-1">
                  <BionicText>Separate tags with commas to help people find your product</BionicText>
                </p>
              </div>

              {/* Platform Fee Info */}
              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-secondary" size={16} />
                    <h4 className="font-medium text-[hsl(var(--dark-gray))]">Platform Fee Structure</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    <BionicText>We take just 10% when someone purchases through our platform. You keep 90% of each sale.</BionicText>
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Your earnings: </span>
                      <span className="text-green-600 font-bold">
                        ${form.watch("price") ? (Number(form.watch("price")) * 0.9).toFixed(2) : "0.00"}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Platform fee: </span>
                      <span className="text-gray-600">
                        ${form.watch("price") ? (Number(form.watch("price")) * 0.1).toFixed(2) : "0.00"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/creator-dashboard")}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={createCourseMutation.isPending}
                  className="flex-1 bg-primary text-white hover:bg-primary/90"
                >
                  {createCourseMutation.isPending ? "Creating..." : "List Product"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}