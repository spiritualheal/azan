import { useState } from "react";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiWhatsapp, SiFacebook } from "react-icons/si";

export function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const contactMethods = [
    {
      name: "WhatsApp",
      icon: SiWhatsapp,
      href: "https://wa.me/1234567890",
      color: "text-green-500",
      testId: "button-whatsapp",
    },
    {
      name: "Facebook Messenger",
      icon: SiFacebook,
      href: "https://m.me/chieftanga",
      color: "text-blue-500",
      testId: "button-messenger",
    },
    {
      name: "Call Us",
      icon: Phone,
      href: "tel:+1234567890",
      color: "text-primary",
      testId: "button-call",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contact@chieftanga.com",
      color: "text-primary",
      testId: "button-email",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Contact options - shown when open */}
      {isOpen && (
        <div className="flex flex-col gap-2 bg-popover border border-popover-border rounded-lg shadow-lg p-3 animate-in slide-in-from-bottom-5">
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={method.testId}
              className="flex items-center gap-3 px-4 py-3 rounded-md hover-elevate transition-all"
            >
              <method.icon className={`w-5 h-5 ${method.color}`} />
              <span className="text-sm font-medium whitespace-nowrap">{method.name}</span>
            </a>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <Button
        size="icon"
        className="w-14 h-14 rounded-full shadow-lg animate-pulse"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-contact-widget-toggle"
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  );
}
