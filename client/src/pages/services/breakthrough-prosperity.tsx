import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import breakthroughImage from "@assets/generated_images/breakthrough_prosperity_energy_visualization.png";

export default function BreakthroughProsperityPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-b from-green-500/20 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={breakthroughImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <TrendingUp className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-service">
            Breakthrough & Prosperity Opening
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Remove spiritual blockages preventing financial breakthrough and long-term prosperity
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Unlock Your Prosperity</h2>
              <p className="text-lg text-muted-foreground mb-6">
                If you feel like your life is not moving forward, no matter how hard you try, you may have a spiritual blockage. These blockages prevent blessings, opportunities, and prosperity from reaching you.
              </p>
              <p className="text-lg text-muted-foreground">
                I perform blessing openings for financial breakthrough, job opportunities, business success, love and relationships, family stability, and long-term prosperity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6">Areas of Breakthrough</h3>
              <div className="space-y-3">
                {["Financial breakthrough and wealth", "Job opportunities and career growth", "Business success and expansion", "Love and relationship fulfillment", "Family stability and harmony", "Long-term prosperity and abundance"].map((area, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p>{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Open Your Path to Success</h2>
          <p className="text-xl mb-8 opacity-90">Remove blockages and welcome breakthrough into your life</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-book-service">
                Book This Service
              </Button>
            </Link>
            <Link href="/services/love-healing">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground/30 text-primary-foreground" data-testid="button-next-service">
                Next Service
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
