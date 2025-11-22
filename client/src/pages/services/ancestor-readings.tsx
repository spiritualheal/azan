import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Eye, CheckCircle2, ArrowRight } from "lucide-react";

export default function AncestorReadingsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 bg-gradient-to-b from-purple-500/20 to-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Eye className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-service">
            Ancestor Readings & Destiny Guidance
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Receive messages from the spiritual realm to guide your path
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Connect With Ancestral Wisdom</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your ancestors watch over you and guide your path. Through spiritual readings, I connect with the ancestral realm to receive messages that provide clarity, reveal hidden enemies, open your path, and bring understanding to your life purpose.
              </p>
              <p className="text-lg text-muted-foreground">
                These readings help you make important decisions, understand your spiritual journey, and align with your true destiny.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6">What Readings Reveal</h3>
              <div className="space-y-3">
                {["Guidance for important life decisions", "Revelation of hidden enemies", "Clarity on your life purpose", "Understanding of spiritual blockages", "Insight into relationship dynamics", "Direction for your path forward"].map((revelation, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p>{revelation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Discover Your Path</h2>
          <p className="text-xl mb-8 opacity-90">Receive ancestral guidance for your journey</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-book-service">
                Book This Service
              </Button>
            </Link>
            <Link href="/testimonials">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground/30 text-primary-foreground" data-testid="button-testimonials">
                Read Success Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
