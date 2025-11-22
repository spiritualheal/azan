import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const { data: testimonialsData = [], isLoading, isError } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
    queryFn: async () => {
      const response = await fetch('/api/testimonials');
      if (!response.ok) {
        throw new Error('Failed to fetch testimonials');
      }
      return response.json();
    },
  });

  const services = ["all", "Spiritual Cleansing", "Voodoo Prevention", "Witchcraft Removal", "Back to Sender", "Breakthrough & Prosperity", "Love Healing", "Protection Against Attacks", "Home & Business Cleansing", "Ancestor Readings"];

  const filteredTestimonials = filter === "all"
    ? testimonialsData
    : testimonialsData.filter(t => t.service === filter);

  const displayedTestimonials = showAll ? filteredTestimonials : filteredTestimonials.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-testimonials">
            Testimonials
          </h1>
          <p className="text-xl text-muted-foreground">
            Real transformations from those who have experienced spiritual healing with Chief Tanga Azan Wani
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-card border-y border-card-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {services.map((service) => (
              <Button
                key={service}
                variant={filter === service ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(service)}
                data-testid={`filter-${service.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {service === "all" ? "All Services" : service}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {isLoading && (
            <div className="flex items-center justify-center py-24">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
              <span className="ml-3 text-lg text-muted-foreground">Loading testimonials...</span>
            </div>
          )}

          {isError && (
            <div className="text-center py-24">
              <p className="text-lg text-destructive mb-4">Failed to load testimonials. Please try again later.</p>
              <Button onClick={() => window.location.reload()} variant="outline">
                Retry
              </Button>
            </div>
          )}

          {!isLoading && !isError && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedTestimonials.map((testimonial) => (
                  <Card key={testimonial.id} className={testimonial.featured ? "border-primary" : ""} data-testid={`testimonial-${testimonial.id}`}>
                    <CardHeader>
                      {testimonial.featured && (
                        <Badge className="w-fit mb-2" data-testid={`badge-featured-${testimonial.id}`}>
                          Featured
                        </Badge>
                      )}
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.location} • {testimonial.service}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground italic">"{testimonial.testimonial}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {!showAll && filteredTestimonials.length > 6 && (
                <div className="text-center mt-12">
                  <Button onClick={() => setShowAll(true)} variant="outline" size="lg" data-testid="button-load-more">
                    Load More Testimonials
                  </Button>
                </div>
              )}

              {showAll && (
                <div className="text-center mt-12">
                  <Button onClick={() => setShowAll(false)} variant="outline" data-testid="button-show-less">
                    Show Less
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join countless others who have found healing, protection, and breakthrough
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-book-consultation">
            Book Your Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
