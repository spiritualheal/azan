import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import energyImage from "@assets/generated_images/energy_healing_abstract_background.png";

export default function SpiritualCleansingPage() {
  const benefits = [
    "Complete removal of bad luck and negative vibrations",
    "Restoration of your natural energy and vitality",
    "Mental clarity and emotional lightness",
    "Reopening of blocked blessings and opportunities",
    "Protection from future spiritual dirt",
  ];

  const howItWorks = [
    { step: 1, title: "Spiritual Assessment", description: "I identify the sources of negative energy affecting your life" },
    { step: 2, title: "Cleansing Ritual", description: "Traditional purification ceremony using ancestral methods" },
    { step: 3, title: "Energy Restoration", description: "Rebuilding your spiritual strength and natural flow" },
    { step: 4, title: "Protection Seal", description: "Creating a barrier against future spiritual contamination" },
  ];

  const whoNeedsThis = [
    "Experiencing consistent bad luck",
    "Feeling spiritually heavy or drained",
    "Carrying emotional baggage from the past",
    "Unable to move forward despite effort",
    "Sensing negative energy around you",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-primary/20 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={energyImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Sparkles className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-service">
            Full Life Spiritual Cleansing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete cleansing that washes away bad luck, spiritual dirt, and negative vibrations to restore your energy and reopen your destiny
          </p>
        </div>
      </section>

      {/* What This Service Does */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6" data-testid="heading-what-it-does">
                What This Service Does
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Life accumulates spiritual dirt—from negative experiences, toxic relationships, jealous people, cursed environments, and energy vampires. This spiritual contamination creates a layer of heaviness that blocks blessings, drains vitality, and attracts more negativity.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Full Life Spiritual Cleansing removes all layers of spiritual dirt, restoring your energy to its natural, powerful state. This is not a quick fix—this is a complete restoration of your spiritual foundation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6">Benefits You'll Experience</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`benefit-${index}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-4xl font-bold mb-16 text-center" data-testid="heading-how-it-works">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item) => (
              <Card key={item.step} data-testid={`step-${item.step}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Helps */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center" data-testid="heading-who-needs">
            Who Needs This Service?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {whoNeedsThis.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card" data-testid={`who-needs-${index}`}>
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="heading-cta">
            Ready to Cleanse Your Spirit?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Begin your journey to spiritual freedom and restored energy today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-book-service">
                Book This Service
              </Button>
            </Link>
            <Link href="/services/voodoo-prevention">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground/30 text-primary-foreground" data-testid="button-next-service">
                Explore Next Service
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
