# Kavipay Landing Page

High-conversion marketing website for Kavipay - a global virtual and physical card platform.

## Overview

This landing page is designed to:
- Drive app downloads (iOS & Android)
- Capture email leads
- Build brand trust and credibility
- Achieve 8-12% visitor-to-download conversion rate

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Components:** Shadcn/ui + Radix UI
- **Forms:** React Hook Form + Zod
- **Analytics:** Google Analytics 4 + Vercel Analytics

## Project Structure

```
kavipay-landing/
├── public/
│   ├── images/          # App screenshots, mockups, cards
│   ├── videos/          # Demo videos
│   └── favicon/         # Favicon assets
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── funding/page.tsx      # Crypto funding page
│   │   └── api/subscribe/        # Email capture API
│   ├── components/
│   │   ├── sections/    # Hero, Features, FAQ, etc.
│   │   ├── ui/          # Reusable UI components
│   │   └── layout/      # Header, Footer
│   └── lib/
│       ├── analytics.ts # Analytics utilities
│       └── utils.ts     # Helper functions
└── DOCS.md             # Complete documentation
```

## Key Features

### Landing Page Sections
1. Hero with clear value proposition
2. Social proof bar
3. Problem/solution sections
4. Features grid (6 key features)
5. How it works (3 steps)
6. App screenshots carousel
7. Physical cards showcase
8. Utilities & bill payments
9. Funding options (discrete crypto positioning)
10. Testimonials
11. Security & trust
12. FAQ
13. Final CTA
14. Footer

### Conversion Optimization
- Multiple strategic CTAs
- Fast page load (<2s)
- Mobile-first responsive design
- Social proof throughout
- Friction-free email capture
- A/B testing ready

### Stealth Crypto Strategy
- No crypto mention on homepage hero
- Generic "Digital Assets" terminology
- Dedicated `/funding` page for crypto details
- SEO optimized for crypto keywords
- Compliant with regulations

## Environment Variables

Create a `.env.local` file:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx
AUDIENCE_ID=aud_xxxxxxxxxxxx

# App Store Links
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/...
NEXT_PUBLIC_PLAY_STORE_URL=https://play.google.com/...
```

## Development Timeline

- **Week 1:** Setup & Foundation
- **Week 2:** Core Sections
- **Week 3:** Content & Polish
- **Week 4:** Optimization & Launch

See `DOCS.md` for detailed timeline and checklists.

## Success Metrics

Target KPIs:
- **Conversion Rate:** 8-12% (visitor → download)
- **Email Capture:** 15-20% of visitors
- **Bounce Rate:** <45%
- **Page Load Time:** <2 seconds

## Documentation

For complete documentation including:
- Detailed section specifications
- Copywriting guidelines
- Design system
- Component examples
- Launch checklist
- Post-launch optimization

See **[DOCS.md](./DOCS.md)**

## License

Proprietary - Kavipay 2025
