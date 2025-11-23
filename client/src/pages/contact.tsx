import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { SiWhatsapp, SiFacebook } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactPage() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceInterest: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Chief Tanga will contact you shortly. Thank you for reaching out.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    submitMutation.mutate(data);
  };

  const services = [
    "Spiritual Cleansing",
    "Voodoo Prevention",
    "Witchcraft Removal",
    "Back to Sender Protection",
    "Breakthrough & Prosperity",
    "Love Healing",
    "Protection Against Attacks",
    "Home & Business Cleansing",
    "Ancestor Readings",
    "General Inquiry",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-contact">
            Contact Chief Tanga
          </h1>
          <p className="text-xl text-muted-foreground">
            Begin your healing journey today. Reach out for a confidential consultation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6" data-testid="heading-form">
                Send a Message
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+27 73 255 2543" {...field} value={field.value || ""} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                          <FormControl>
                            <SelectTrigger data-testid="select-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service} data-testid={`option-${service.toLowerCase().replace(/\s+/g, '-')}`}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell Chief Tanga about your situation and what you need help with..."
                            className="min-h-32"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full" disabled={submitMutation.isPending} data-testid="button-submit-contact">
                    {submitMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold mb-6">Other Ways to Reach Us</h2>

              <Card>
                <CardHeader>
                  <Phone className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Phone</CardTitle>
                  <CardDescription>Direct consultation line</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="tel:+27732552543" className="text-lg font-medium hover:text-primary transition-colors" data-testid="link-phone-contact">
                    +27 73 255 2543
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Mail className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Email</CardTitle>
                  <CardDescription>For detailed inquiries</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="mailto:contact@chieftanga.com" className="text-lg font-medium hover:text-primary transition-colors" data-testid="link-email-contact">
                    contact@chieftanga.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <SiWhatsapp className="w-8 h-8 text-green-500 mb-2" />
                  <CardTitle>WhatsApp</CardTitle>
                  <CardDescription>Quick messaging and consultations</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://wa.me/27732552543"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-whatsapp-contact"
                  >
                    <Button variant="outline">
                      Message on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <SiFacebook className="w-8 h-8 text-blue-500 mb-2" />
                  <CardTitle>Facebook Messenger</CardTitle>
                  <CardDescription>Connect via Messenger</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://m.me/chieftanga"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-messenger-contact"
                  >
                    <Button variant="outline">
                      Message on Facebook
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Monday - Friday:</strong> 9:00 AM - 8:00 PM</p>
                    <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
                    <p><strong>Sunday:</strong> By appointment only</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <Shield className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Confidentiality Assured</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    All consultations and communications are completely confidential and protected. Your privacy and spiritual journey are sacred.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
