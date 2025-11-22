import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/generated_images/spiritual_hero_background_landscape.png";
import energyImage from "@assets/generated_images/energy_healing_abstract_background.png";
import spaceImage from "@assets/generated_images/spiritual_consultation_space_interior.png";
import breakthroughImage from "@assets/generated_images/breakthrough_prosperity_energy_visualization.png";
import protectionImage from "@assets/generated_images/protection_shield_spiritual_visualization.png";
import loveImage from "@assets/generated_images/love_healing_energy_connection.png";

const galleryItems = [
  {
    id: 1,
    image: heroImage,
    title: "Sacred Spiritual Landscape",
    category: "Environment",
    description: "Ancient grounds where ancestral energy flows freely",
  },
  {
    id: 2,
    image: energyImage,
    title: "Healing Energy Visualization",
    category: "Energy Work",
    description: "The flow of purifying spiritual energy during cleansing",
  },
  {
    id: 3,
    image: spaceImage,
    title: "Consultation Space",
    category: "Sacred Space",
    description: "Peaceful environment for spiritual sessions",
  },
  {
    id: 4,
    image: breakthroughImage,
    title: "Breakthrough Energy",
    category: "Prosperity",
    description: "Manifestation of prosperity and abundance opening",
  },
  {
    id: 5,
    image: protectionImage,
    title: "Protection Shield",
    category: "Protection",
    description: "Spiritual barrier against negative forces",
  },
  {
    id: 6,
    image: loveImage,
    title: "Love Healing Energy",
    category: "Relationships",
    description: "Connection and restoration in relationships",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-gallery">
            Spiritual Gallery
          </h1>
          <p className="text-xl text-muted-foreground">
            Visualizations of spiritual energy, sacred spaces, and the power of ancestral healing
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover-elevate transition-all cursor-pointer" data-testid={`gallery-item-${item.id}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3" data-testid={`badge-category-${item.id}`}>
                    {item.category}
                  </Badge>
                  <h3 className="font-serif text-xl font-bold mb-2" data-testid={`title-${item.id}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              These visualizations represent the spiritual energies and sacred work of ancestral healing
            </p>
            <p className="text-sm text-muted-foreground italic">
              "The spiritual realm is real, powerful, and accessible through proper guidance and ancestral wisdom"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
