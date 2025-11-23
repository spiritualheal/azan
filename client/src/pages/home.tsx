import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Shield, Heart, TrendingUp, Home, Eye, Zap, Star, CheckCircle2, ArrowRight } from "lucide-react";


const services = [
  {
    title: "Full Life Spiritual Cleansing",
    description: "Complete cleansing to wash away bad luck, spiritual dirt, and negative vibrations. Restore your energy and reopen your destiny.",
    icon: Sparkles,
    path: "/services/spiritual-cleansing",
    color: "text-purple-500",
  },
  {
    title: "Voodoo Prevention & Defense",
    description: "Protection against spiritual attacks rooted in jealousy, conflict, and dark practices. Create a strong barrier against negative forces.",
    icon: Shield,
    path: "/services/voodoo-prevention",
    color: "text-blue-500",
  },
  {
    title: "Witchcraft Removal",
    description: "Unbind yourself from curses, interference, and spiritual manipulation. Bring back your freedom and forward momentum.",
    icon: Zap,
    path: "/services/witchcraft-removal",
    color: "text-yellow-500",
  },
  {
    title: "Back to Sender Protection",
    description: "Spiritual shield that returns negative intentions without harm. Stabilize your spirit and restore your peace.",
    icon: Shield,
    path: "/services/back-to-sender",
    color: "text-indigo-500",
  },
  {
    title: "Breakthrough & Prosperity",
    description: "Remove spiritual blockages preventing financial breakthrough, job opportunities, business success, and long-term prosperity.",
    icon: TrendingUp,
    path: "/services/breakthrough-prosperity",
    color: "text-green-500",
  },
  {
    title: "Love Healing & Relationships",
    description: "Restore relationships through ancestral guidance and energy balancing. Heal breakups, misunderstandings, and emotional distance.",
    icon: Heart,
    path: "/services/love-healing",
    color: "text-pink-500",
  },
  {
    title: "Protection Against Attacks",
    description: "Shield your life, destiny, sleep, and mental wellbeing from invisible forces and hidden enemies.",
    icon: Shield,
    path: "/services/protection",
    color: "text-red-500",
  },
  {
    title: "Home & Business Cleansing",
    description: "Purify your environment from negativity, past events, and spiritual interference. Create peaceful and prosperous spaces.",
    icon: Home,
    path: "/services/home-business-cleansing",
    color: "text-orange-500",
  },
  {
    title: "Ancestor Readings & Guidance",
    description: "Receive messages from the spiritual realm to guide decisions, reveal hidden enemies, and bring clarity to your life purpose.",
    icon: Eye,
    path: "/services/ancestor-readings",
    color: "text-purple-500",
  },
];

const signs = [
  "Consistent bad luck",
  "Strange or disturbing dreams",
  "Sudden financial collapse",
  "Relationship breakdowns",
  "Constant misunderstandings",
  "Heaviness in the body",
  "Sleep disturbances",
  "Unexplained sickness",
  "Feeling watched or attacked",
  "Blessings slipping away",
  "Business failing without reason",
  "People turning against you",
  "Fear and uncontrollable emotions",
  "Constant setbacks before success",
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "New York",
    service: "Spiritual Cleansing",
    rating: 5,
    text: "After my spiritual cleansing with Chief Tanga, I felt like a completely different person. The heaviness that had been weighing me down for years just lifted. My life has completely turned around.",
  },
  {
    name: "Michael K.",
    location: "California",
    service: "Business Breakthrough",
    rating: 5,
    text: "My business was on the verge of collapse. Nothing was working despite my best efforts. Chief Tanga identified the spiritual blockages and within weeks, opportunities started flowing in. I'm forever grateful.",
  },
  {
    name: "Jennifer L.",
    location: "Texas",
    service: "Love Healing",
    rating: 5,
    text: "Chief Tanga helped restore my relationship when all hope seemed lost. The ancestral guidance and healing brought clarity and love back into our lives. Truly powerful work.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
        ></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <Badge className="mb-6 text-base px-6 py-2 bg-primary/20 backdrop-blur-md border-primary/30" data-testid="badge-trust">
            3+ Generations of Ancestral Wisdom
          </Badge>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" data-testid="heading-hero">
            Spiritual Healing, Ancestral Wisdom, Restored Destiny
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Experience powerful cleansing, protection, and breakthrough with Chief Tanga Azan Wani. Your peace matters. Your destiny matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 backdrop-blur-md" data-testid="button-book-consultation-hero">
                Book Consultation
              </Button>
            </Link>
            <Link href="/services/spiritual-cleansing">
              <Button size="lg" variant="outline" className="text-lg px-8 backdrop-blur-md bg-white/10 text-white border-white/30" data-testid="button-explore-services">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 justify-center mt-12 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm">Confidential Services</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm">Ancient Traditions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm">Proven Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="heading-introduction">
                Grand Master of Ancestral Healing
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                I, Chief Tanga Azan Wani, stand as one of the guardians of ancient healing lineage. My calling is to help those suffering from unseen forces, unexplained misfortunes, spiritual attacks, and disruptive energies that drain strength and block success.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My work is rooted in the traditions of the ancestors, the knowledge of nature, and the powerful balance of spiritual energy. I work with purification, protection, cleansing, and ancestral energy to restore your spiritual balance and return your life to its natural flow.
              </p>
              <Link href="/about">
                <Button variant="outline" data-testid="button-learn-more">
                  Learn More About Chief Tanga
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                <Eye className="w-32 h-32 text-primary/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="heading-services">
              Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive spiritual healing, protection, and guidance to restore your life to peace and prosperity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate transition-all cursor-pointer" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <service.icon className={`w-12 h-12 mb-4 ${service.color}`} />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Link href={service.path}>
                    <Button variant="ghost" size="sm" data-testid={`button-learn-more-${index}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need Help */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="heading-signs">
              Do You Experience Any of These Signs?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These symptoms may indicate you need spiritual intervention and healing
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
            {signs.map((sign, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-card-border"
                data-testid={`sign-${index}`}
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{sign}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-get-assessment">
                Get Your Spiritual Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="heading-testimonials">
              What People Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real transformations from those who have experienced spiritual healing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} data-testid={`testimonial-${index}`}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location} • {testimonial.service}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" data-testid="button-view-all-testimonials">
                View All Testimonials
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="heading-cta">
            Your Peace Matters. Your Destiny Matters.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't let spiritual attacks, bad luck, or negative energy control your life. Begin your healing journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-contact-now">
                Contact Chief Tanga Now
              </Button>
            </Link>
            <a href="tel:+27732552543">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground/30 text-primary-foreground" data-testid="button-call-now">
                Call Now: +27 73 255 2543
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
