import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2 } from "lucide-react";

export default function BackToSenderPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 bg-gradient-to-b from-indigo-500/20 to-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-service">
            "Back to the Sender" Protection Shield
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Spiritual shield that returns negative intentions without harming anyone
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-4xl font-bold mb-6">Not Revenge—Protection</h2>
          <p className="text-lg text-muted-foreground mb-6">
            This is not about revenge or causing harm to others. This is a spiritual shield that returns negative intentions back to where they came from without harming anyone. It stabilizes your spirit and restores your peace.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            When someone sends negative energy, curses, or ill intentions your way, this shield reflects it back to its source, protecting you while maintaining spiritual balance and universal law.
          </p>
          <div className="space-y-3">
            {["Returns negative energy to its source", "Maintains spiritual balance and law", "No harm to sender—just reflection", "Restores your peace and stability", "Prevents future spiritual attacks"].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Create Your Shield</h2>
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
