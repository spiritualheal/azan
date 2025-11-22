import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingContactWidget } from "@/components/layout/floating-contact-widget";

import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import TestimonialsPage from "@/pages/testimonials";
import ContactPage from "@/pages/contact";
import FAQPage from "@/pages/faq";
import GalleryPage from "@/pages/gallery";
import BlogPage from "@/pages/blog";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";

import SpiritualCleansingPage from "@/pages/services/spiritual-cleansing";
import VoodooPreventionPage from "@/pages/services/voodoo-prevention";
import WitchcraftRemovalPage from "@/pages/services/witchcraft-removal";
import BackToSenderPage from "@/pages/services/back-to-sender";
import BreakthroughProsperityPage from "@/pages/services/breakthrough-prosperity";
import LoveHealingPage from "@/pages/services/love-healing";
import ProtectionPage from "@/pages/services/protection";
import HomeBusinessCleansingPage from "@/pages/services/home-business-cleansing";
import AncestorReadingsPage from "@/pages/services/ancestor-readings";

import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/testimonials" component={TestimonialsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/terms" component={TermsPage} />
          
          {/* Service Pages */}
          <Route path="/services/spiritual-cleansing" component={SpiritualCleansingPage} />
          <Route path="/services/voodoo-prevention" component={VoodooPreventionPage} />
          <Route path="/services/witchcraft-removal" component={WitchcraftRemovalPage} />
          <Route path="/services/back-to-sender" component={BackToSenderPage} />
          <Route path="/services/breakthrough-prosperity" component={BreakthroughProsperityPage} />
          <Route path="/services/love-healing" component={LoveHealingPage} />
          <Route path="/services/protection" component={ProtectionPage} />
          <Route path="/services/home-business-cleansing" component={HomeBusinessCleansingPage} />
          <Route path="/services/ancestor-readings" component={AncestorReadingsPage} />
          
          {/* 404 */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingContactWidget />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
