import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Heart, CheckCircle2 } from "lucide-react";
import loveImage from "@assets/generated_images/love_healing_energy_connection.png";

export default function LoveHealingPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-b from-pink-500/20 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={loveImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Heart className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-service">
            Love Healing & Relationship Restoration
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Restore relationships through ancestral guidance and energy balancing
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Heal Your Heart</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Relationships are spiritual connections that can be disrupted by external forces, past trauma, misunderstandings, and negative energy. When love is under attack, the heart suffers.
              </p>
              <p className="text-lg text-muted-foreground">
                Through ancestral guidance and energy balancing, your heart regains peace, and your relationships become stronger. This service addresses breakups, emotional distance, spiritual interference, and past trauma affecting present love.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6">What I Help With</h3>
              <div className="space-y-3">
                {["Healing from breakups and separations", "Resolving misunderstandings", "Removing emotional distance", "Clearing spiritual interference in relationships", "Healing past trauma affecting love", "Restoring trust and connection"].map((help, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p>{help}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Restore Your Love</h2>
          <p className="text-xl mb-8 opacity-90">Heal your heart and strengthen your relationships</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-book-service">
              Book This Service
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
