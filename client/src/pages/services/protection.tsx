import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2 } from "lucide-react";

export default function ProtectionPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 bg-gradient-to-b from-red-500/20 to-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-service">
            Protection Against Spiritual Attacks & Hidden Enemies
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Shield your life, destiny, and wellbeing from invisible forces
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-4xl font-bold mb-6">Not Every Enemy Is Seen</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Some enemies hide behind smiles, others behind silence. Not all attacks are visible to the physical eye. Spiritual attacks can come from jealous people, envious relatives, competitive colleagues, or even strangers who wish you harm.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            I help protect your life, your destiny, your sleep, and your mental wellbeing from invisible forces that try to pull you down. This protection covers all areas of your life, creating a complete shield around you.
          </p>
          <div className="space-y-3">
            {["Protection for your life and health", "Shield for your destiny and purpose", "Guard for your mental wellbeing", "Security for your sleep and peace", "Defense against hidden enemies", "Barrier against jealousy and envy"].map((protection, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p>{protection}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Shield Yourself Today</h2>
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
