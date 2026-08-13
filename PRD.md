# Product Requirements Document (PRD) — Arunika Corporate Landing Page

## 1. Project Overview & Business Goal
- **Company**: Arunika
- **Industry**: Engineering, Construction & Industrial Solutions
- **Goal**: Premium corporate landing page communicating confidence, reliability, technical precision, and modern industrial capability.
- **Target Audience**: Enterprise clients, industrial operators, infrastructure project owners, corporate partners.

## 2. Technology Stack & Constraints
- **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+), GSAP (GreenSock Animation Platform via CDN / local).
- **Typography**: Google Fonts (Headings: Manrope, Body: Inter).
- **Constraints**: NO React, Next.js, Vue, Angular, Framer Motion, Tailwind CSS, Bootstrap, or heavy UI frameworks.
- **Design Tokens**: Pure CSS Custom Properties.

## 3. Design System & Tokens
- **Primary Navy**: `#0B1726` (`--color-primary`)
- **Steel Navy**: `#16283B` (`--color-steel-navy`)
- **Steel Blue**: `#29465F` (`--color-steel-blue`)
- **Accent Orange**: `#F59E0B` (`--color-accent`)
- **Background**: `#F7F8FA` (`--color-background`)
- **White**: `#FFFFFF` (`--color-white`)
- **Primary Text**: `#111827` (`--color-text`)
- **Muted Text**: `#667085` (`--color-muted`)
- **Border**: `#E5E7EB` (`--color-border`)

## 4. Phase Breakdown
- **Phase 1 (CURRENT)**: Foundation, Header / Navbar (Desktop & Mobile Overlay), Hero Section with GSAP Animations & Responsive Design.
- **Phase 2**: Company Overview / About
- **Phase 3**: Services Matrix
- **Phase 4**: Featured Projects & Industries
- **Phase 5**: Why Arunika & CTA Section
- **Phase 6**: Contact & Footer

## 5. Phase 1 Detailed Specifications
### Header / Navbar
- Desktop: Logo (`ARUNIKA`), Nav links (`About`, `Services`, `Projects`, `Industries`, `Contact`), CTA button (`Let's Talk`).
- Scroll Behavior: Integrated with Hero initial state, transitions to solid dark navy on scroll.
- Mobile Navigation Overlay:
  - Full-screen viewport overlay when opened.
  - Header with Logo (`ARUNIKA`) and visible close button (`✕`) at top-right (min 44x44px touch area).
  - Hamburger button (`☰`) at top-right in closed state.
  - Body scroll lock during open state.
  - Close on: X button click, Escape keypress, or Navigation link click.
  - Focus trap / focus management into menu on open, return focus to hamburger on close.
  - Full ARIA accessibility (`aria-expanded`, `aria-controls`, `aria-label`).

### Hero Section
- Eyebrow: `ENGINEERING & INDUSTRIAL SOLUTIONS`
- Headline: `Engineering Solutions Built for Industry.`
- Description: `We deliver reliable engineering, construction, and industrial solutions that help businesses operate safer, smarter, and more efficiently.`
- Primary CTA: `Explore Our Services`
- Secondary CTA: `View Projects`
- Technical Metadata: `EST. 2016` | `ENGINEERING` | `CONSTRUCTION` | `INDUSTRIAL SOLUTIONS`
- Visual: Industrial visual asset with dark navy overlay and crisp typography.

### GSAP Animations & Motion
- Timeline: Navbar fade-in -> Eyebrow slide/fade -> Headline reveal (staggered) -> Description fade up -> CTA buttons fade up -> Hero visual subtle scale/reveal.
- Respect `prefers-reduced-motion: reduce`.
-

# 32. FINAL SUCCESS CRITERIA

The project is complete when:

- Desktop is polished.
- Mobile is polished.
- Navigation works correctly.
- Mobile menu has a visible X close button.
- All sections are visually coherent.
- Animation feels intentional and premium.
- No horizontal overflow exists.
- No console errors exist.
- No broken images exist.
- HTML is semantic.
- CSS is maintainable.
- JavaScript is modular.
- Website loads efficiently.
- SEO metadata exists.
- Accessibility basics are implemented.
- Reduced-motion support exists.
- Visual identity remains consistent from Hero through Footer.

## Core principle

> **Build less, but make every detail feel intentional.**

The goal is not to demonstrate how many technologies can be used. The goal is to produce a website that looks like a **real, premium B2B engineering company profile**.
