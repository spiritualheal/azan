import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Eye, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Ancestral Wisdom",
    description: "Generations of healing knowledge passed down through sacred lineages",
    icon: Eye,
  },
  {
    title: "No Harm to Others",
    description: "Clean approach with strict respect for ancestral laws and universal balance",
    icon: Heart,
  },
  {
    title: "Confidential & Respectful",
    description: "Complete privacy and respect for every individual's spiritual journey",
    icon: Shield,
  },
  {
    title: "Powerful yet Safe",
    description: "Traditional healing that restores hope, peace, and spiritual strength",
    icon: Sparkles,
  },
];

const approach = [
  "Ancestral wisdom and spiritual knowledge",
  "Natural elements and energy alignment",
  "Protection rituals and prayer",
  "Traditional healing formulas",
  "Destiny interpretation and guidance",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-about">
            About Chief Tanga Azan Wani
          </h1>
          <p className="text-xl text-muted-foreground">
            Grand Master of Ancestral Healing, Energy Protection & Spiritual Restoration
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="heading-mission">
                My Spiritual Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every person is born with light, energy, and a destiny. But along the way, life becomes clouded by negative influences, jealousy, curses, heartbreak, business failure, spiritual interference, and forces that the physical eyes cannot see.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My mission is to stand beside you as a spiritual warrior, clearing your path and replacing darkness with clarity, strength, and blessings.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">I do not work with harmful intentions</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">I work with purification, protection, and cleansing</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">I restore your spiritual balance and natural flow</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                <Eye className="w-40 h-40 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center" data-testid="heading-heritage">
              Ancient Heritage & Sacred Lineage
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                For generations, the path of healing, protection, and spiritual mastery has been carried by chosen individuals. I, Chief Tanga Azan Wani, stand as one of the guardians of this ancient lineage.
              </p>
              <p>
                My calling is to help those suffering from unseen forces, unexplained misfortunes, spiritual attacks, emotional heaviness, and disruptive energies that drain strength and block success.
              </p>
              <p>
                My work is rooted in the traditions of the ancestors, the knowledge of nature, and the powerful balance of spiritual energy. This is not guesswork—this is ancient science carried through bloodlines and practiced with discipline and responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Approach */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center" data-testid="heading-approach">
            My Spiritual Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {approach.map((item, index) => (
              <div key={index} className="flex items-start gap-3" data-testid={`approach-${index}`}>
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            The power behind my work is guided by generations of knowledge, natural elements, energy alignment, protection rituals, and traditional healing formulas. Each practice is rooted in ancestral laws and spiritual discipline.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center" data-testid="heading-values">
            Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} data-testid={`value-${index}`}>
                <CardHeader>
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why People Trust Me */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center" data-testid="heading-trust">
            Why People Trust Me
          </h2>
          <div className="space-y-4 mb-12">
            {[
              "Generations of healing knowledge and proven practices",
              "Powerful yet safe spiritual work rooted in ancestral laws",
              "Strict respect for confidentiality and privacy",
              "Clean approach with no harm to others",
              "Guidance that restores hope, peace, and spiritual strength",
              "Proven results across countless lives transformed",
            ].map((reason, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card" data-testid={`trust-reason-${index}`}>
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg">{reason}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl text-muted-foreground italic mb-8">
            "Those who come to me leave lighter, stronger, and spiritually guarded."
          </p>
          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-begin-journey">
                Begin Your Healing Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
