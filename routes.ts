import type { Express } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import OpenAI from "openai";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { insertCourseSchema, insertCourseModuleSchema, insertPurchaseSchema } from "@shared/schema";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing required Stripe secret: STRIPE_SECRET_KEY');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing required OpenAI API key: OPENAI_API_KEY');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PLATFORM_FEE_PERCENTAGE = 0.10; // 10% platform fee

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Course routes
  app.get('/api/courses', async (req, res) => {
    try {
      const courses = await storage.getCourses();
      res.json(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });

  app.get('/api/courses/:id', async (req, res) => {
    try {
      const courseId = parseInt(req.params.id);
      const course = await storage.getCourseWithModules(courseId);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json(course);
    } catch (error) {
      console.error("Error fetching course:", error);
      res.status(500).json({ message: "Failed to fetch course" });
    }
  });

  app.post('/api/courses', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const courseData = insertCourseSchema.parse({
        ...req.body,
        creatorId: userId,
      });
      
      const course = await storage.createCourse(courseData);
      res.json(course);
    } catch (error) {
      console.error("Error creating course:", error);
      res.status(500).json({ message: "Failed to create course" });
    }
  });

  app.post('/api/courses/:id/modules', isAuthenticated, async (req: any, res) => {
    try {
      const courseId = parseInt(req.params.id);
      const moduleData = insertCourseModuleSchema.parse({
        ...req.body,
        courseId,
      });
      
      const module = await storage.createCourseModule(moduleData);
      res.json(module);
    } catch (error) {
      console.error("Error creating module:", error);
      res.status(500).json({ message: "Failed to create module" });
    }
  });

  // Creator dashboard routes
  app.get('/api/creator/courses', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const courses = await storage.getCreatorCourses(userId);
      res.json(courses);
    } catch (error) {
      console.error("Error fetching creator courses:", error);
      res.status(500).json({ message: "Failed to fetch creator courses" });
    }
  });

  app.get('/api/creator/earnings', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const earnings = await storage.getCreatorEarnings(userId);
      res.json(earnings);
    } catch (error) {
      console.error("Error fetching earnings:", error);
      res.status(500).json({ message: "Failed to fetch earnings" });
    }
  });

  // Purchase routes
  app.get('/api/purchases', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const purchases = await storage.getUserPurchases(userId);
      res.json(purchases);
    } catch (error) {
      console.error("Error fetching purchases:", error);
      res.status(500).json({ message: "Failed to fetch purchases" });
    }
  });

  // Stripe payment routes
  app.post('/api/create-payment-intent', isAuthenticated, async (req: any, res) => {
    try {
      const { courseId } = req.body;
      const userId = req.user.claims.sub;
      
      const course = await storage.getCourse(courseId);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }

      const amount = Number(course.price);
      const platformFee = amount * PLATFORM_FEE_PERCENTAGE;
      const creatorEarnings = amount - platformFee;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        metadata: {
          courseId: courseId.toString(),
          userId,
          platformFee: platformFee.toString(),
          creatorEarnings: creatorEarnings.toString(),
        },
      });

      res.json({ 
        clientSecret: paymentIntent.client_secret,
        amount,
        platformFee,
        creatorEarnings,
      });
    } catch (error: any) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({ message: "Error creating payment intent: " + error.message });
    }
  });

  // Webhook to handle successful payments
  app.post('/api/webhook/stripe', async (req, res) => {
    const sig = req.headers['stripe-signature'];
    
    try {
      const event = stripe.webhooks.constructEvent(req.body, sig!, process.env.STRIPE_WEBHOOK_SECRET!);
      
      if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const { courseId, userId, platformFee, creatorEarnings } = paymentIntent.metadata;
        
        await storage.createPurchase({
          userId,
          courseId: parseInt(courseId),
          amount: (paymentIntent.amount / 100).toString(),
          platformFee,
          creatorEarnings,
          stripePaymentIntentId: paymentIntent.id,
          status: 'completed',
        });
      }
      
      res.json({ received: true });
    } catch (error) {
      console.error('Webhook error:', error);
      res.status(400).send('Webhook Error');
    }
  });

  // AI Support Chatbot endpoint
  app.post('/api/chat/support', async (req, res) => {
    try {
      const { message, conversationHistory = [] } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ message: "Message is required" });
      }

      // Create system prompt for soul-led creator support
      const systemPrompt = `You are a supportive AI assistant specifically designed for Soul Made AI - a conscious creator marketplace platform. You help soul-led creators, coaches, and conscious entrepreneurs who are building authentic, heart-centered businesses.

Key Platform Information:
- Platform name: "Soul Made AI" 
- Core philosophy: "One soulful product. One powerful path" - helping creators focus on one authentic offer
- Guiding principle: "Follow Your Heart, Not Your Head" - emphasizing intuition over market research
- Target audience: Soul-led creators, conscious coaches, authentic entrepreneurs
- Platform celebrates AI-enhanced creativity and AI-generated content
- Built by and for neurodivergent creators with strong accessibility features

Language Guidelines:
- Use "soul-led", "conscious", "authentic", "heart-centered" instead of "spiritual"
- Speak warmly and supportively, acknowledging the creator's inner wisdom
- Encourage following intuition and authentic expression
- Avoid pushy sales language or fear-based marketing tactics
- Use inclusive, accessible language

Platform Features You Can Help With:
1. Course Creation: Help with structuring soul-led courses, pricing authentically, creating compelling descriptions
2. Platform Navigation: Explain how to upload courses, manage modules, set pricing
3. Payment Processing: Explain the 10% platform fee structure and payment setup
4. Creator Dashboard: Help understand analytics, revenue tracking, student management
5. Accessibility Features: Explain bionic reading, dark mode, accessibility toolbar
6. AI Integration: Guide on using AI tools for content creation while maintaining authenticity

Support Topics:
- Technical platform questions
- Course creation best practices for conscious creators
- Pricing guidance that honors value without exploitation
- Building authentic creator brands
- Balancing AI assistance with personal authenticity
- Community building for soul-led businesses

Always respond with empathy, wisdom, and practical guidance. Remember that these creators are building heart-centered businesses and may struggle with traditional "hustle" mentality. Encourage authentic expression and sustainable practices.`;

      // Build conversation context
      const messages = [
        { role: "system", content: systemPrompt },
        ...conversationHistory.slice(-8).map((msg: any) => ({
          role: msg.role,
          content: msg.content
        })),
        { role: "user", content: message }
      ];

      const completion = await openai.chat.completions.create({
        model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
        messages,
        max_tokens: 500,
        temperature: 0.7,
      });

      const assistantMessage = completion.choices[0].message.content;

      res.json({ 
        message: assistantMessage,
        timestamp: new Date().toISOString()
      });

    } catch (error: any) {
      console.error("Error in support chat:", error);
      res.status(500).json({ 
        message: "I'm having trouble connecting right now. Please try again in a moment.",
        error: error.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
