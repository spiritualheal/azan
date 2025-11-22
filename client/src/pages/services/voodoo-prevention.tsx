import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import protectionImage from "@assets/generated_images/protection_shield_spiritual_visualization.png";

export default function VoodooPreventionPage() {
  const benefits = [
    "Complete protection from spiritual attacks",
    "Energy barrier against jealousy and dark practices",
    "Peace of mind and spiritual security",
    "Deflection of negative intentions",
    "Strengthened spiritual immunity",
  ];

  const howItWorks = [
    { step: 1, title: "Threat Assessment", description: "Identify sources of spiritual attack and vulnerability" },
    { step: 2, title: "Shield Creation", description: "Build powerful protective barrier using ancestral methods" },
    { step: 3, title: "Energy Fortification", description: "Strengthen your spiritual defenses against future attacks" },
    { step: 4, title: "Ongoing Protection", description: "Maintain and reinforce your spiritual shield" },
  ];

  const whoNeedsThis = [
    "Feeling spiritually attacked or targeted",
    "Experiencing unexplained misfortune",
    "Sensing jealousy from others",
    "Dealing with toxic people or environments",
    "Need protection from dark spiritual forces",
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-b from-blue-500/20 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={protectionImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-service">
            Voodoo Prevention & Defense
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Protection against spiritual attacks rooted in jealousy, conflict, and dark practices
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6" data-testid="heading-what-it-does">
                What This Service Does
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Many people unknowingly face spiritual attacks rooted in jealousy, conflict, envy, or dark practices. These attacks can manifest as unexplained misfortune, health issues, relationship problems, or business failures.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My protection seals your spirit against all harmful energies, creating a strong barrier between you and any negative force. This is not just defense—this is spiritual fortification that prevents attacks before they reach you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6">Protection Benefits</h3>
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

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-4xl font-bold mb-16 text-center" data-testid="heading-how-it-works">
            Protection Process
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

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center" data-testid="heading-who-needs">
            Who Needs This Protection?
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

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="heading-cta">
            Protect Yourself Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait for attacks to manifest—build your spiritual shield now
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-book-service">
                Book This Service
              </Button>
            </Link>
            <Link href="/services/witchcraft-removal">
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
