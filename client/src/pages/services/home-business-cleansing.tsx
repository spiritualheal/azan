import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, CheckCircle2 } from "lucide-react";
import spaceImage from "@assets/generated_images/spiritual_consultation_space_interior.png";

export default function HomeBusinessCleansingPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-b from-orange-500/20 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={spaceImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Home className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-service">
            Home, Land & Business Cleansing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Purify your environment from negativity and spiritual interference
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Spaces Carry Energy</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A home or business can hold negativity from past events, people, arguments, losses, or spiritual interference. This stagnant energy creates an uncomfortable atmosphere, blocks success, and attracts more negativity.
              </p>
              <p className="text-lg text-muted-foreground">
                I purify your environment so your home feels peaceful, your business attracts customers, your land becomes prosperous, and your family remains protected.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6">What Cleansing Brings</h3>
              <div className="space-y-3">
                {["Peaceful and harmonious home atmosphere", "Business that attracts customers and success", "Prosperous and fertile land", "Protected family environment", "Removal of negative past energy", "Spiritual purity in your space"].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Purify Your Space</h2>
          <p className="text-xl mb-8 opacity-90">Create peaceful and prosperous environments</p>
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
