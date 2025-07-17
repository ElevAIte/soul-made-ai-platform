import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AccessibilityProvider } from "@/components/ui/accessibility-provider";
import { AccessibilityToolbar } from "@/components/ui/accessibility-toolbar";
import { SupportChatbot } from "@/components/ui/support-chatbot";
import { useAuth } from "@/hooks/useAuth";
import { Navigation } from "@/components/ui/navigation";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Home from "@/pages/home";
import Course from "@/pages/course";
import Checkout from "@/pages/checkout";
import CreatorDashboard from "@/pages/creator-dashboard";
import Products from "@/pages/products";
import Contact from "@/pages/contact";
import About from "@/pages/about";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import AIPolicy from "@/pages/ai-policy";
import RefundPolicy from "@/pages/refund-policy";
import SuccessStories from "@/pages/success-stories";
import CreateCourse from "@/pages/create-course";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <>
      <Navigation />
      <Switch>
        {isLoading || !isAuthenticated ? (
          <Route path="/" component={Landing} />
        ) : (
          <>
            <Route path="/" component={Home} />
            <Route path="/course/:id" component={Course} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/creator-dashboard" component={CreatorDashboard} />
            <Route path="/create-course" component={CreateCourse} />
          </>
        )}
        {/* Public routes that work for both authenticated and non-authenticated users */}
        <Route path="/courses" component={Products} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/ai-policy" component={AIPolicy} />
        <Route path="/refund-policy" component={RefundPolicy} />
        <Route path="/success-stories" component={SuccessStories} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AccessibilityProvider>
          <TooltipProvider>
            <div>
              {/* Skip to main content link for keyboard users */}
              <a href="#main-content" className="skip-link">
                Skip to main content
              </a>
              <Toaster />
              <Router />
              <AccessibilityToolbar />
              <SupportChatbot />
            </div>
          </TooltipProvider>
        </AccessibilityProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
