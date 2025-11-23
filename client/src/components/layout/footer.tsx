import { Link } from "wouter";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const services = [
    { name: "Spiritual Cleansing", path: "/services/spiritual-cleansing" },
    { name: "Voodoo Prevention", path: "/services/voodoo-prevention" },
    { name: "Witchcraft Removal", path: "/services/witchcraft-removal" },
    { name: "Love Healing", path: "/services/love-healing" },
    { name: "Breakthrough & Prosperity", path: "/services/breakthrough-prosperity" },
  ];

  const resources = [
    { name: "About Chief Tanga", path: "/about" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog & Resources", path: "/blog" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <footer className="bg-card border-t border-card-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary">Chief Tanga</h3>
              <p className="text-sm text-muted-foreground">Ancestral Healing</p>
            </div>
            <p className="text-sm text-foreground">
              Generations of spiritual wisdom, healing, and protection. Restoring peace and destiny through ancestral power.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <Button variant="outline" size="icon">
                  <Facebook className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <Button variant="outline" size="icon">
                  <Instagram className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Services Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link href={service.path}>
                    <div
                      data-testid={`footer-link-${service.path.split('/').pop()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {service.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <Link href={resource.path}>
                    <div
                      data-testid={`footer-link-${resource.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {resource.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 space-y-2">
              <Link href="/privacy">
                <div data-testid="footer-link-privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Privacy Policy
                </div>
              </Link>
              <Link href="/terms">
                <div data-testid="footer-link-terms" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Terms of Service
                </div>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+27732552543" data-testid="link-phone" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+27 73 255 2543</span>
              </a>
              <a href="mailto:contact@chieftanga.com" data-testid="link-email" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@chieftanga.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Confidential Locations Available</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-xs font-semibold text-primary mb-2">Confidential Services</p>
              <p className="text-xs text-muted-foreground">All consultations are private and protected</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Chief Tanga Azan Wani. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                3+ Generations of Healing
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Ancient Wisdom
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
