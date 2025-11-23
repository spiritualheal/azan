import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, ChevronDown, Sparkles, Shield, Zap, TrendingUp, Heart, Home, Eye, Phone, Mail, Github } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = [
  { name: "Full Life Spiritual Cleansing", path: "/services/spiritual-cleansing", Icon: Sparkles },
  { name: "Voodoo Prevention & Defense", path: "/services/voodoo-prevention", Icon: Shield },
  { name: "Witchcraft Removal", path: "/services/witchcraft-removal", Icon: Zap },
  { name: "Back to Sender Protection", path: "/services/back-to-sender", Icon: Shield },
  { name: "Breakthrough & Prosperity", path: "/services/breakthrough-prosperity", Icon: TrendingUp },
  { name: "Love Healing & Relationship Restoration", path: "/services/love-healing", Icon: Heart },
  { name: "Protection Against Spiritual Attacks", path: "/services/protection", Icon: Shield },
  { name: "Home & Business Cleansing", path: "/services/home-business-cleansing", Icon: Home },
  { name: "Ancestor Readings & Guidance", path: "/services/ancestor-readings", Icon: Eye },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMoreOpen(false);
  }, [location]);

  // Explicit, sensible order for navigation
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const moreLinks = [
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "backdrop-blur-lg bg-background/90 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top info bar to make the site feel active/busy */}
        <div className="hidden md:flex items-center justify-between text-sm px-2 py-1 text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> <span>Call: +1 (555) 123-4567</span></div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> <span>hello@grandmasterheal.com</span></div>
            <div className="px-2 py-0.5 rounded-md bg-accent/10 text-accent">Bookings open • Limited slots</div>
          </div>
          <div className="text-xs italic">Ancestral healing — spiritual restoration & protection</div>
        </div>

        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="flex flex-col leading-none hover-elevate rounded-md px-3 py-2 cursor-pointer">
              <span className="font-serif text-2xl md:text-3xl font-bold text-primary">
                Chief Tanga
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">Ancestral Healing</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.name === "Services") {
                return (
                  <div key="services" className="relative">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      data-testid="button-services-menu"
                      className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium text-foreground hover-elevate"
                    >
                      Services
                      <ChevronDown className="w-4 h-4" />
                    </motion.button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-2 w-96 bg-popover border border-popover-border rounded-lg shadow-lg p-4 z-40"
                        >
                          <div className="grid grid-cols-1 gap-2">
                            {services.map((service) => {
                              const Icon = service.Icon;
                              return (
                                <Link key={service.path} href={service.path}>
                                  <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3 p-3 rounded-md hover-elevate cursor-pointer">
                                    <Icon className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-medium text-popover-foreground">{service.name}</span>
                                  </motion.div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // regular link
              return (
                <Link key={link.path} href={link.path}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    data-testid={`link-${link.name.toLowerCase()}`}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate cursor-pointer ${
                      location === link.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              );
            })}

            {/* More dropdown for Gallery/Blog/FAQ */}
            <div className="relative">
              <motion.button whileHover={{ scale: 1.03 }} onClick={() => setMoreOpen(!moreOpen)} className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-foreground hover-elevate">
                More
                <ChevronDown className="w-4 h-4" />
              </motion.button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.12 }} className="absolute right-0 mt-2 w-44 bg-popover border border-popover-border rounded-lg shadow-lg p-2 z-40">
                    <div className="flex flex-col">
                      {moreLinks.map((m) => (
                        <Link key={m.path} href={m.path}>
                          <div className="px-3 py-2 rounded-md text-sm hover-elevate cursor-pointer">{m.name}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* GitHub / Repo link */}
            <a href="https://github.com/Azan/Azan" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub">
              <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Link href="/contact">
              <Button data-testid="button-book-consultation" className="hidden md:flex">
                Book Consultation
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.18 }} className="lg:hidden py-4 border-t border-border">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.path} href={link.path}>
                    <div
                      data-testid={`mobile-link-${link.name.toLowerCase()}`}
                      className={`px-4 py-3 rounded-md text-base font-medium transition-colors hover-elevate cursor-pointer ${
                        location === link.path ? "text-primary bg-accent" : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </div>
                  </Link>
                ))}

                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  data-testid="button-mobile-services"
                  className="flex items-center justify-between px-4 py-3 rounded-md text-base font-medium text-foreground hover-elevate"
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                {servicesOpen && (
                  <div className="pl-4 flex flex-col gap-1">
                    {services.map((service) => {
                      const Icon = service.Icon;
                      return (
                        <Link key={service.path} href={service.path}>
                          <div
                            data-testid={`mobile-link-service-${service.path.split('/').pop()}`}
                            className="flex items-center gap-2 px-4 py-2 rounded-md text-sm hover-elevate cursor-pointer"
                          >
                            <Icon className="w-4 h-4 text-primary" />
                            <span>{service.name}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}

                {/* More links in mobile */}
                <button onClick={() => setMoreOpen(!moreOpen)} className="flex items-center justify-between px-4 py-3 rounded-md text-base font-medium text-foreground hover-elevate">
                  More
                  <ChevronDown className={`w-5 h-5 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
                </button>

                {moreOpen && (
                  <div className="pl-4 flex flex-col gap-1">
                    {moreLinks.map((m) => (
                      <Link key={m.path} href={m.path}>
                        <div className="px-4 py-2 rounded-md text-sm hover-elevate cursor-pointer">{m.name}</div>
                      </Link>
                    ))}
                  </div>
                )}

                <Link href="/contact">
                  <Button className="mt-4" data-testid="mobile-button-book-consultation">
                    Book Consultation
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
