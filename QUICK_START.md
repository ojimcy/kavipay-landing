# Quick Start Guide - Kavipay Landing Page

## Setup (5 minutes)

### 1. Initialize Next.js Project

```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src
```

When prompted:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: Yes
- App Router: Yes
- Import alias: Yes (@/*)

### 2. Install Core Dependencies

```bash
npm install framer-motion class-variance-authority clsx tailwind-merge
npm install lucide-react @radix-ui/react-accordion @radix-ui/react-dialog
npm install react-hook-form @hookform/resolvers zod
```

### 3. Install Shadcn/ui

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button input accordion
```

### 4. Create Environment File

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values.

---

## Project Structure Setup

### 1. Create Folder Structure

```bash
mkdir -p public/images public/videos public/favicon
mkdir -p src/components/sections src/components/ui src/components/layout
mkdir -p src/lib src/app/funding src/app/api/subscribe
```

### 2. Update Tailwind Config

**tailwind.config.ts:**
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0EA5E9',
          600: '#0284C7',
        },
        accent: {
          500: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

### 3. Add Inter Font

**src/app/layout.tsx:**
```typescript
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kavipay - Your Money, Without Borders',
  description: 'Spend globally with cards that actually work. Zero fees, instant funding, total control.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

---

## First Component - Hero Section

**src/components/sections/Hero.tsx:**
```typescript
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Your Money,{' '}
              <span className="text-primary-500">Without Borders</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Spend globally with cards that actually work. Zero fees, instant funding, total control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition">
                Download Kavipay
              </button>
              <button className="px-8 py-4 border-2 border-primary-500 text-primary-500 rounded-lg font-semibold hover:bg-primary-50 transition">
                See How It Works ↓
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <span className="text-gray-600">10,000+ users worldwide</span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-gray-200 aspect-[9/16] rounded-3xl shadow-2xl">
              {/* Phone mockup placeholder - replace with actual image */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Phone Mockup
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**src/app/page.tsx:**
```typescript
import { Hero } from '@/components/sections/Hero'

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* Add other sections here */}
    </main>
  )
}
```

---

## Analytics Setup

**src/lib/analytics.ts:**
```typescript
export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
}

// Event helpers
export const analytics = {
  pageView: () => trackEvent('page_view'),
  ctaClick: (location: string) => trackEvent('cta_click', { location }),
  downloadClick: (platform: 'ios' | 'android') =>
    trackEvent(`download_${platform}_click`),
  emailSubmit: () => trackEvent('email_submit'),
  faqExpand: (question: string) => trackEvent('faq_expand', { question }),
}
```

**Add to src/app/layout.tsx:**
```typescript
import Script from 'next/script'

// Inside <body> tag
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

---

## Email Capture API

**src/app/api/subscribe/route.ts:**
```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email' },
        { status: 400 }
      )
    }

    // TODO: Add to your email service
    // Example with Resend:
    // await fetch('https://api.resend.com/audiences/contacts', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email,
    //     audience_id: process.env.AUDIENCE_ID
    //   })
    // })

    console.log('Email captured:', email)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
```

---

## Assets Checklist

Place these in the `public/` folder:

### Images Needed
- [ ] `phone-mockup.png` - Hero section (1000x2000px)
- [ ] `cards-fanned.jpg` - Physical cards section
- [ ] `app-dashboard.png` - Screenshot
- [ ] `app-cards.png` - Screenshot
- [ ] `app-transactions.png` - Screenshot
- [ ] `app-bills.png` - Screenshot
- [ ] `feature-icons/` - SVG icons for features
- [ ] `logos/` - TechCrunch, Forbes, Bloomberg

### Favicon
```bash
# Generate at https://realfavicongenerator.net/
# Place in public/favicon/
```

---

## Development Workflow

### 1. Run Development Server
```bash
npm run dev
```
Visit http://localhost:3000

### 2. Build Sections Incrementally
- Day 1: Hero + Header
- Day 2: Features + How It Works
- Day 3: Screenshots + Testimonials
- Day 4: FAQ + Footer
- Day 5: Polish + Animations

### 3. Test Responsiveness
```bash
# Mobile
# Desktop
# Tablet
```

### 4. Optimize Performance
```bash
npm run build
npm run start

# Check Lighthouse score (target: 90+)
```

---

## Deploy to Vercel

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Kavipay landing page"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Deploy
```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Vercel Dashboard
# Connect GitHub repo at vercel.com
```

### 3. Add Environment Variables
In Vercel dashboard, add:
- `NEXT_PUBLIC_GA_ID`
- `RESEND_API_KEY`
- `AUDIENCE_ID`
- `NEXT_PUBLIC_APP_STORE_URL`
- `NEXT_PUBLIC_PLAY_STORE_URL`

---

## Next Steps

1. ✅ Set up project structure
2. ✅ Build Hero section
3. [ ] Build remaining sections (see DOCS.md)
4. [ ] Add animations with Framer Motion
5. [ ] Implement analytics tracking
6. [ ] Add email capture form
7. [ ] Create `/funding` page
8. [ ] Optimize images
9. [ ] Test on mobile devices
10. [ ] Deploy to production

---

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Full Documentation](./DOCS.md)

---

## Support

Questions? Check:
1. `DOCS.md` - Complete specifications
2. `README.md` - Project overview
3. Next.js documentation
4. Tailwind documentation
