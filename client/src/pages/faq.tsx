import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is spiritual healing?",
        answer: "Spiritual healing is the practice of removing negative energies, curses, and spiritual blockages that prevent you from living your best life. It addresses unseen forces that affect your health, relationships, finances, and overall wellbeing using ancestral wisdom and traditional methods.",
      },
      {
        question: "How do I know if I need spiritual healing?",
        answer: "Signs include: consistent bad luck, strange dreams, sudden financial problems, relationship breakdowns, unexplained illness, feeling spiritually heavy, sleep disturbances, or sensing that something is blocking your progress despite your best efforts.",
      },
      {
        question: "Is spiritual healing safe?",
        answer: "Yes, my work is completely safe. I work with purification, protection, and ancestral energy—never with harmful intentions. All practices respect spiritual laws and focus on restoring balance, not causing harm.",
      },
    ],
  },
  {
    category: "Services & Process",
    questions: [
      {
        question: "How long does a spiritual cleansing take?",
        answer: "The duration varies depending on the severity of spiritual contamination. Initial consultations typically last 1-2 hours. Some services require multiple sessions for complete restoration. I'll assess your specific situation and provide a clear timeline.",
      },
      {
        question: "Do I need to be physically present for the healing?",
        answer: "While in-person sessions are most powerful, I can perform certain spiritual work remotely with your consent. Distance doesn't limit spiritual energy. We'll discuss the best approach during your consultation.",
      },
      {
        question: "What should I expect during a session?",
        answer: "Expect a peaceful, sacred environment. I'll begin with spiritual assessment, identify sources of negative energy, perform appropriate rituals using ancestral methods, and provide guidance for maintaining your spiritual health. You may feel lighter, more peaceful, and energized after the session.",
      },
      {
        question: "How often should I get spiritual cleansing?",
        answer: "It depends on your lifestyle and spiritual exposure. Some people benefit from annual cleansing, while others facing active spiritual attacks may need more frequent sessions. After your initial healing, I'll recommend a maintenance schedule tailored to your needs.",
      },
    ],
  },
  {
    category: "Confidentiality & Trust",
    questions: [
      {
        question: "Is my consultation confidential?",
        answer: "Absolutely. Complete confidentiality is guaranteed. Your spiritual journey, personal information, and everything discussed in our sessions remains private and protected. This is a sacred trust.",
      },
      {
        question: "What if I'm skeptical?",
        answer: "Skepticism is natural. I don't ask for blind faith—I ask for openness. Many of my clients were initially skeptical but experienced undeniable results. The proof is in the transformation you'll experience.",
      },
      {
        question: "Why should I trust Chief Tanga?",
        answer: "I carry generations of ancestral healing knowledge, practice with strict respect for spiritual laws, maintain complete confidentiality, use only clean approaches with no harm to others, and have countless testimonials from transformed lives. Trust is earned through results and integrity.",
      },
    ],
  },
  {
    category: "Practical Information",
    questions: [
      {
        question: "How do I book a consultation?",
        answer: "You can book through our contact form, call us directly at +1 (234) 567-890, message us on WhatsApp, or reach out via Facebook Messenger. We'll schedule a time that works for you and provide all necessary details.",
      },
      {
        question: "What should I bring to my first session?",
        answer: "Bring an open mind and honest heart. I'll guide you on any specific items needed based on your situation during our initial conversation. Sometimes specific personal items help strengthen the spiritual connection.",
      },
      {
        question: "Do you offer emergency spiritual services?",
        answer: "Yes. If you're experiencing severe spiritual attacks or urgent situations, contact me immediately. I prioritize emergency cases and will work to assist you as quickly as possible.",
      },
      {
        question: "What languages do you work in?",
        answer: "I primarily work in English, but spiritual energy transcends language barriers. If you speak another language, please let me know during booking and we can make arrangements.",
      },
    ],
  },
  {
    category: "Results & Follow-up",
    questions: [
      {
        question: "When will I see results?",
        answer: "Some people experience immediate relief—feeling lighter, sleeping better, or seeing opportunities open within days. More complex situations may take 2-4 weeks to manifest complete transformation. Spiritual healing works in divine timing.",
      },
      {
        question: "What happens after my healing session?",
        answer: "I provide guidance for maintaining your spiritual health, protective practices you can do at home, and remain available for follow-up questions. Some clients schedule periodic check-ins to ensure continued spiritual strength.",
      },
      {
        question: "Can the negative energy come back?",
        answer: "Once properly cleansed and protected, you have strong spiritual defense. However, if you re-expose yourself to toxic people, cursed environments, or neglect your spiritual health, new contamination can occur. I teach you how to maintain your protection.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-faq">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about spiritual healing, services, and the healing process
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="font-serif text-3xl font-bold mb-6" data-testid={`heading-category-${categoryIndex}`}>
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, questionIndex) => (
                    <AccordionItem
                      key={questionIndex}
                      value={`${categoryIndex}-${questionIndex}`}
                      className="bg-card border border-card-border rounded-lg px-6"
                      data-testid={`faq-${categoryIndex}-${questionIndex}`}
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact Chief Tanga directly for personalized answers and guidance
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-contact-us">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
