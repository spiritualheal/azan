import { type Contact, type InsertContact, type Testimonial, type InsertTestimonial } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactSubmission(contact: InsertContact): Promise<Contact>;
  getContactSubmissions(): Promise<Contact[]>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.contacts = new Map();
    this.testimonials = new Map();
    
    // Add some initial testimonials
    this.seedTestimonials();
  }

  private seedTestimonials() {
    const initialTestimonials: InsertTestimonial[] = [
      {
        name: "Sarah M.",
        service: "Spiritual Cleansing",
        rating: 5,
        testimonial: "After my spiritual cleansing with Chief Tanga, I felt like a completely different person. The heaviness that had been weighing me down for years just lifted. My life has completely turned around.",
        location: "New York",
        featured: 1,
      },
      {
        name: "Michael K.",
        service: "Breakthrough & Prosperity",
        rating: 5,
        testimonial: "My business was on the verge of collapse. Nothing was working despite my best efforts. Chief Tanga identified the spiritual blockages and within weeks, opportunities started flowing in. I'm forever grateful.",
        location: "California",
        featured: 1,
      },
      {
        name: "Jennifer L.",
        service: "Love Healing",
        rating: 5,
        testimonial: "Chief Tanga helped restore my relationship when all hope seemed lost. The ancestral guidance and healing brought clarity and love back into our lives. Truly powerful work.",
        location: "Texas",
        featured: 1,
      },
    ];

    initialTestimonials.forEach(t => {
      const id = randomUUID();
      const testimonial: Testimonial = {
        id,
        name: t.name,
        service: t.service,
        rating: t.rating,
        testimonial: t.testimonial,
        location: t.location || null,
        featured: t.featured || null,
        createdAt: new Date(),
      };
      this.testimonials.set(id, testimonial);
    });
  }

  async createContactSubmission(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      id,
      name: insertContact.name,
      email: insertContact.email,
      phone: insertContact.phone || null,
      serviceInterest: insertContact.serviceInterest || null,
      message: insertContact.message,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContactSubmissions(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort(
      (a, b) => (b.featured || 0) - (a.featured || 0) || b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = {
      id,
      name: insertTestimonial.name,
      service: insertTestimonial.service,
      rating: insertTestimonial.rating,
      testimonial: insertTestimonial.testimonial,
      location: insertTestimonial.location || null,
      featured: insertTestimonial.featured || null,
      createdAt: new Date(),
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
