import {
  users,
  courses,
  courseModules,
  purchases,
  reviews,
  type User,
  type UpsertUser,
  type Course,
  type InsertCourse,
  type CourseModule,
  type InsertCourseModule,
  type Purchase,
  type InsertPurchase,
  type Review,
  type InsertReview,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  // User operations (mandatory for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  updateUserStripeInfo(userId: string, stripeCustomerId: string, stripeSubscriptionId?: string): Promise<User>;
  
  // Course operations
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  getCourseWithModules(id: number): Promise<(Course & { modules: CourseModule[] }) | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  updateCourse(id: number, course: Partial<InsertCourse>): Promise<Course>;
  getCreatorCourses(creatorId: string): Promise<Course[]>;
  
  // Course module operations
  getCourseModules(courseId: number): Promise<CourseModule[]>;
  createCourseModule(module: InsertCourseModule): Promise<CourseModule>;
  
  // Purchase operations
  createPurchase(purchase: InsertPurchase): Promise<Purchase>;
  getPurchase(id: number): Promise<Purchase | undefined>;
  getUserPurchases(userId: string): Promise<Purchase[]>;
  getCreatorEarnings(creatorId: string): Promise<{ totalEarnings: number; monthlyEarnings: number }>;
  
  // Review operations
  createReview(review: InsertReview): Promise<Review>;
  getCourseReviews(courseId: number): Promise<Review[]>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async updateUserStripeInfo(userId: string, stripeCustomerId: string, stripeSubscriptionId?: string): Promise<User> {
    const [user] = await db
      .update(users)
      .set({
        stripeCustomerId,
        stripeSubscriptionId,
        updatedAt: new Date(),
      })
      .where(eq(users.id, userId))
      .returning();
    return user;
  }

  // Course operations
  async getCourses(): Promise<Course[]> {
    return await db.select().from(courses).where(eq(courses.isPublished, true)).orderBy(desc(courses.createdAt));
  }

  async getCourse(id: number): Promise<Course | undefined> {
    const [course] = await db.select().from(courses).where(eq(courses.id, id));
    return course;
  }

  async getCourseWithModules(id: number): Promise<(Course & { modules: CourseModule[] }) | undefined> {
    const course = await this.getCourse(id);
    if (!course) return undefined;
    
    const modules = await this.getCourseModules(id);
    return { ...course, modules };
  }

  async createCourse(course: InsertCourse): Promise<Course> {
    const [newCourse] = await db.insert(courses).values(course).returning();
    return newCourse;
  }

  async updateCourse(id: number, course: Partial<InsertCourse>): Promise<Course> {
    const [updatedCourse] = await db
      .update(courses)
      .set({ ...course, updatedAt: new Date() })
      .where(eq(courses.id, id))
      .returning();
    return updatedCourse;
  }

  async getCreatorCourses(creatorId: string): Promise<Course[]> {
    return await db.select().from(courses).where(eq(courses.creatorId, creatorId));
  }

  // Course module operations
  async getCourseModules(courseId: number): Promise<CourseModule[]> {
    return await db.select().from(courseModules).where(eq(courseModules.courseId, courseId));
  }

  async createCourseModule(module: InsertCourseModule): Promise<CourseModule> {
    const [newModule] = await db.insert(courseModules).values(module).returning();
    return newModule;
  }

  // Purchase operations
  async createPurchase(purchase: InsertPurchase): Promise<Purchase> {
    const [newPurchase] = await db.insert(purchases).values(purchase).returning();
    return newPurchase;
  }

  async getPurchase(id: number): Promise<Purchase | undefined> {
    const [purchase] = await db.select().from(purchases).where(eq(purchases.id, id));
    return purchase;
  }

  async getUserPurchases(userId: string): Promise<Purchase[]> {
    return await db.select().from(purchases).where(eq(purchases.userId, userId));
  }

  async getCreatorEarnings(creatorId: string): Promise<{ totalEarnings: number; monthlyEarnings: number }> {
    // Get all completed purchases for creator's courses
    const result = await db
      .select({
        totalEarnings: purchases.creatorEarnings,
        createdAt: purchases.createdAt,
      })
      .from(purchases)
      .innerJoin(courses, eq(purchases.courseId, courses.id))
      .where(and(
        eq(courses.creatorId, creatorId),
        eq(purchases.status, "completed")
      ));

    const totalEarnings = result.reduce((sum, p) => sum + Number(p.totalEarnings), 0);
    
    // Calculate this month's earnings
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthlyEarnings = result
      .filter(p => p.createdAt && p.createdAt >= startOfMonth)
      .reduce((sum, p) => sum + Number(p.totalEarnings), 0);

    return { totalEarnings, monthlyEarnings };
  }

  // Review operations
  async createReview(review: InsertReview): Promise<Review> {
    const [newReview] = await db.insert(reviews).values(review).returning();
    return newReview;
  }

  async getCourseReviews(courseId: number): Promise<Review[]> {
    return await db.select().from(reviews).where(eq(reviews.courseId, courseId));
  }
}

export const storage = new DatabaseStorage();
