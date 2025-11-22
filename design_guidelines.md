# Design Guidelines for Chief Tanga Azan Wani Spiritual Healing Website

## Design Approach

**Reference-Based Approach** drawing from premium wellness, spiritual, and holistic healing websites (Calm, Headspace, high-end spiritual retreats) combined with traditional cultural elements to establish spiritual authority and trust. This design must balance modern sophistication with ancestral wisdom aesthetics.

## Core Design Principles

1. **Spiritual Authority**: Deep, rich visual language that commands respect and trust
2. **Accessible Mystery**: Approachable yet profound, welcoming yet powerful
3. **Cultural Authenticity**: Incorporate traditional patterns and symbols respectfully
4. **Trust Building**: Professional polish with testimonial-forward approach
5. **Multi-Channel Accessibility**: Seamless communication paths throughout

## Typography

**Primary Font**: Playfair Display (serif) for headings - conveys wisdom, tradition, authority  
**Secondary Font**: Inter (sans-serif) for body text - modern, readable, professional

**Hierarchy**:
- H1: text-5xl md:text-6xl lg:text-7xl, font-bold
- H2: text-4xl md:text-5xl, font-semibold  
- H3: text-2xl md:text-3xl, font-semibold
- H4: text-xl md:text-2xl, font-medium
- Body: text-base md:text-lg, font-normal
- Small: text-sm, font-normal

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24 for consistent rhythm
- Micro spacing: space-y-4
- Component spacing: gap-8, p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-4 md:px-8

## Theme System

**Automatic Dark/Light Detection**: 
- Use `prefers-color-scheme` media query for automatic detection
- Manual toggle button in header (sun/moon icon)
- Persist preference in localStorage
- Smooth transitions between modes (transition-colors duration-200)

**Implementation**:
- Light mode: Clean whites, warm beiges, soft golds
- Dark mode: Deep purples, midnight blues, bronze accents
- Both modes maintain readability and spiritual atmosphere

## Page Structure & Components

### Global Elements

**Navigation** (Mega Menu):
- Sticky header with blur backdrop (backdrop-blur-lg)
- Logo left, primary nav center, theme toggle + contact CTA right
- Services dropdown with grid layout showing all 9 services with icons
- Mobile: Full-screen overlay menu with animated entrance

**Floating Contact Widget**:
- Fixed bottom-right position
- Expandable bubble showing WhatsApp, Facebook Messenger, Phone icons
- Pulse animation to draw attention
- Z-index layering above all content

**Footer**:
- Four-column layout: Services Quick Links | About & Resources | Contact Info | Newsletter Signup
- Social media icons row
- Trust badges ("Generations of Healing," "Confidential Services")
- Legal links (Privacy, Terms)

### Home Page (Hero-Forward Design)

**Hero Section** (h-screen):
- Full-viewport height with parallax background image (spiritual/ancestral themed)
- Centered content with dramatic headline: "Spiritual Healing, Ancestral Wisdom, Restored Destiny"
- Subheadline highlighting Chief Tanga's expertise
- Dual CTA buttons with blur backgrounds: "Book Consultation" (primary), "Explore Services" (secondary)
- Floating trust indicators: "3+ Generations" | "Confidential" | "Ancient Wisdom"

**Introduction Section**:
- Two-column layout: Chief's portrait (rounded, bordered) + mission statement
- Pull quote styling for key spiritual message
- "Why People Trust Me" badge grid

**Services Overview** (3-column grid):
- Card-based layout for 9 core services
- Icon + title + brief description + "Learn More" link
- Hover lift effect (translate-y)

**Signs You Need Help** (Diagnostic Section):
- Masonry grid of symptom cards with checkmark icons
- Conversational tone: "Do you experience..."
- CTA: "Get Your Spiritual Assessment"

**Testimonials Carousel**:
- Auto-rotating 3-card display
- Star ratings, photo placeholders, detailed stories
- Navigation dots below

**Call-to-Action Banner**:
- Full-width section with background pattern
- Centered message: "Your Peace Matters. Your Destiny Matters."
- Multiple contact method buttons

### Individual Service Pages (9 pages)

**Template Structure**:
- Hero banner with service-specific imagery and title
- What This Service Does (2-column: description + benefits list)
- How It Works (process timeline with step cards)
- Who This Helps (symptom/situation list)
- Success Stories (2 testimonials)
- Related Services (3-card grid)
- Book This Service CTA section

### About Page

- Hero section with Chief's professional portrait
- Mission & Heritage (2-column text + image alternating sections)
- Spiritual Approach explanation with icons
- Lineage & Training timeline
- Core Values grid (4 columns)
- Personal message from Chief Tanga
- CTA: "Begin Your Healing Journey"

### Testimonials Page

- Filter bar (All Services | By Service Type)
- Masonry grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Rich testimonial cards: photo + name + service + rating + story
- Load more button

### Contact Page

- Two-column layout:
  - Left: Multi-step contact form (Name, Email, Phone, Service Interest, Message)
  - Right: Contact methods cards (WhatsApp, Facebook, Phone, Email) + Office hours + Confidentiality assurance
- FAQ accordion below
- Map placeholder section

### Blog/Resources (if implemented)

- Grid of article cards (3 columns)
- Featured article hero
- Categories sidebar
- Related articles footer

## Images

**Hero Images Required**:
- Home: Spiritual/mystical landscape with cultural elements (ancestral symbols, nature)
- Services: Abstract energy/light imagery per service theme
- About: Professional portrait of Chief Tanga Azan Wani

**Supporting Images**:
- Testimonial placeholders (portrait style, diverse representation)
- Service icons (custom illustrated or from Heroicons)
- Gallery page: spiritual ceremonies, nature elements, consultation spaces

## Component Library

**Buttons**:
- Primary: Rounded-full, px-8, py-4, backdrop-blur-md when on images
- Secondary: Outlined variant
- Sizes: text-base md:text-lg
- Icons: Heroicons via CDN

**Cards**:
- Rounded-2xl borders
- Hover effects: scale-105 transform
- Shadow layering for depth

**Forms**:
- Floating labels
- Focus states with ring effect
- Validation feedback inline

**Icons**: Heroicons exclusively via CDN

## Animations

**Strategic Use Only**:
- Hero parallax scroll
- Fade-in on scroll for sections (Intersection Observer)
- Smooth page transitions
- Floating contact widget pulse (subtle, 3s interval)
- No distracting or excessive motion

## Mobile Optimization

- Hamburger menu with slide-in drawer
- Stacked layouts (all columns become single-column)
- Touch-friendly tap targets (min 44px)
- Optimized hero heights (60vh on mobile vs 100vh desktop)
- Floating contact widget scales smaller

This design creates a powerful, trustworthy, and spiritually resonant experience that converts visitors into clients while honoring ancestral traditions with modern web excellence.