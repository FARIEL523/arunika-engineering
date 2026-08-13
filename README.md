# Arunika Engineering — Corporate Website

> A fictional corporate website concept for an Indonesian engineering and industrial solutions company.

---

## Overview

**Arunika Engineering** is a fictional B2B corporate website concept created as a web development portfolio case study.

The project focuses on building a polished company profile experience with:

- Corporate UI/UX
- Responsive frontend development
- Industrial visual direction
- Editorial information hierarchy
- Interaction design
- Scroll-based animation
- Accessibility
- Performance-conscious implementation

The design intentionally avoids common SaaS patterns and aims for a more established engineering / industrial visual language.

---

## Project Goals

The website is designed to communicate four core ideas:

1. **Who the company is**
2. **What capabilities it provides**
3. **Which industries it serves**
4. **What kind of projects it can deliver**

The overall experience follows a B2B-oriented journey:

> **Company → Capabilities → Industries → Projects → Trust → Conversion**

---

## Design Direction

### Visual Concept

**Bright Corporate Industrial**

The final visual language combines:

- Warm off-white surfaces
- Clean white sections
- Charcoal typography
- Muted copper accents
- Industrial photography
- Editorial layouts
- Thin dividers
- Restrained motion

The intended personality is:

**Professional · Technical · Established · Reliable · Premium**

rather than:

**SaaS · Startup · Futuristic · UI-heavy**

### Color Palette

| Role | Color |
|---|---|
| Primary Background | `#F7F8F6` |
| Secondary Background | `#EEF1EF` |
| White | `#FFFFFF` |
| Primary Text | `#17212B` |
| Secondary Text | `#68747D` |
| Accent Copper | `#A96F31` |
| Border | `#D9DEDC` |

### Typography

- **Manrope** — headings / display typography
- **Inter** — body copy / interface text

---

## Website Structure

### 01 — Hero

Primary brand statement with industrial photography, CTA actions, and technical company metadata.

### 02 — About / Company Overview

Company positioning, supporting narrative, industrial imagery, and credibility metrics.

### 03 — Services

Editorial capability list with interactive visual previews.

### 04 — Industries

Industry matrix presenting the business sectors Arunika is positioned to serve.

### 05 — Projects / Case Studies

Featured project presentation followed by supporting editorial project entries.

### 06 — Why Arunika

Four trust-oriented principles:

- Engineering-led
- Execution discipline
- Operational reliability
- Long-term partnership

### 07 — Conversion CTA

A focused closing statement and primary inquiry CTA.

### 08 — Contact

B2B inquiry form with client-side validation.

### 09 — Footer

Corporate navigation, positioning statement, and contact information.

---

## Key Features

### Responsive Design

Targeted and validated across:

- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 375px
- 320px

The mobile experience is reorganized rather than simply scaled down.

### Mobile Navigation

Includes:

- Full-screen overlay
- Hamburger → X state
- Scroll locking
- Escape key support
- Focus management
- Keyboard navigation
- Accessible touch targets

### Interactive Services

Desktop service rows support:

- Hover interaction
- Keyboard focus
- Active service state
- Contextual image preview
- Directional motion

### Project Presentation

The project section uses:

- One featured case study
- Supporting editorial project rows
- Technical metadata
- Subtle image interaction

### Contact Form

Includes:

- Required field validation
- Inline error feedback
- Accessible status messaging
- Client-side success state

No real backend/email service is connected.

---

## Motion & Interaction

The project uses a restrained motion system.

### GSAP

Used for:

- Hero entrance animation
- Scroll-triggered section reveals
- Staggered content entry
- Image reveals
- Service interactions
- Project interactions

### Motion Principles

Animation is intended to feel:

- Precise
- Fast
- Controlled
- Subtle

The implementation respects:

```css
@media (prefers-reduced-motion: reduce)
```

Non-essential movement is disabled when reduced motion is enabled.

---

## Technology Stack

### Core

- HTML5
- CSS3
- Vanilla JavaScript

### Motion

- GSAP
- GSAP ScrollTrigger
- Native CSS transitions

### Fonts

- Manrope
- Inter

### Hosting

Suitable for static hosting such as:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

---

## Project Structure

```text
arunika-engineering/
│
├── index.html
├── PRD.md
├── README.md
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── css/
│   ├── style.css
│   ├── components.css
│   └── responsive.css
│
└── js/
    ├── main.js
    ├── navigation.js
    └── animations.js
```

---

## Accessibility

Accessibility considerations include:

- Semantic HTML5 structure
- Proper heading hierarchy
- Form labels
- Keyboard navigation
- Visible focus states
- Accessible mobile navigation
- Escape-to-close behavior
- Focus restoration
- Reduced-motion support
- Meaningful image alt text
- Minimum touch targets

---

## Performance

The implementation is intentionally lightweight.

Performance considerations include:

- No frontend framework
- Minimal JavaScript
- Reusable CSS
- Lazy-loaded below-the-fold imagery where appropriate
- No unnecessary UI library
- Controlled animation usage
- No continuous animation loops without purpose

---

## Disclaimer

**Arunika Engineering is a fictional company created solely for design and development portfolio purposes.**

All company information, project descriptions, statistics, locations, contact details, and operational claims shown on the website are fictional demonstration content.

This project does **not** represent an actual company, client engagement, contract, certification, or partnership.

---

## Live Demo

Replace this placeholder after deployment:

**Live Website:** `https://arunika-engineering.vercel.app/`

---

## Screenshots

Recommended showcase images:

```text
docs/screenshots/desktop.png
docs/screenshots/mobile.png
docs/screenshots/mobile-menu.png
```

Add the final screenshots after deployment.

---

## Development Process

The project was implemented incrementally through a structured product and frontend development process:

1. Foundation + Hero
2. Company Overview
3. Services
4. Industries
5. Projects / Case Studies
6. Why Arunika + CTA
7. Contact + Footer
8. Final visual and responsive QA
9. Art-direction and human-fingerprint refinement

---

## What This Project Demonstrates

This project demonstrates practical skills in:

- Semantic HTML
- Responsive CSS
- Vanilla JavaScript
- GSAP animation
- Interaction design
- Corporate information architecture
- Responsive navigation
- Form validation
- Accessibility
- Visual hierarchy
- Performance-aware implementation

---

## Author

**Muhammad Fariel Gifari**

Web Developer / Frontend Developer

---

## License / Portfolio Use

This project is a personal portfolio concept.

Do not present the fictional Arunika brand, company information, statistics, or project content as a real commercial client engagement.
