import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function WitchcraftRemovalPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 bg-gradient-to-b from-yellow-500/20 to-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Zap className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-service">
            Witchcraft Removal & Energy Purification
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unbind yourself from curses, interference, and spiritual manipulation to bring back your freedom
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Breaking Free from Spiritual Bondage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                If you feel like your life is stuck, blocked, or constantly going backwards—witchcraft could be the cause. This isn't about blame or fear. It's about recognizing when spiritual forces are working against your progress and taking action to break free.
              </p>
              <p className="text-lg text-muted-foreground">
                My purification rituals unbind you from curses, interference, and spiritual manipulation, bringing back your freedom and forward momentum.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6">Signs of Witchcraft Interference</h3>
              <div className="space-y-3">
                {["Life moving backwards despite effort", "Unexplained failures and setbacks", "Feeling spiritually bound or restricted", "Success slipping away at the last moment", "Unusual patterns of misfortune"].map((sign, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p>{sign}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Reclaim Your Freedom</h2>
          <p className="text-xl mb-8 opacity-90">Break free from spiritual manipulation and move forward</p>
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
