# Kavipay Landing Page - UI/UX Design Guide

**Version:** 1.0
**Last Updated:** 2025-10-26
**For:** Development Team

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Design System](#design-system)
3. [Component Library](#component-library)
4. [Layout & Spacing](#layout--spacing)
5. [Responsive Design](#responsive-design)
6. [Animation & Interaction](#animation--interaction)
7. [Accessibility](#accessibility)
8. [Visual Hierarchy](#visual-hierarchy)
9. [Best Practices](#best-practices)
10. [Quality Checklist](#quality-checklist)

---

## Design Principles

### Core Design Philosophy

**1. Clarity Over Cleverness**
- Every element must have a clear purpose
- No decorative elements that don't serve the conversion goal
- Information hierarchy should be instantly obvious

**2. Trust Through Design**
- Premium, polished aesthetics build credibility
- Consistent spacing and alignment show attention to detail
- High-quality imagery signals a quality product

**3. Friction Reduction**
- Every click should feel instant and responsive
- Forms should be minimal (single field when possible)
- CTAs should be obvious and compelling

**4. Mobile-First Mindset**
- 60%+ of traffic will be mobile
- Touch targets must be minimum 44x44px
- Content should be scannable on small screens

---

## Design System

### Color Palette

```css
/* Primary - Sky Blue (Trust, Technology) */
--primary-50:  #f0f9ff;
--primary-100: #e0f2fe;
--primary-500: #0EA5E9;  /* Main brand color */
--primary-600: #0284C7;  /* Hover states */
--primary-700: #0369a1;  /* Active states */

/* Accent - Purple (Premium, Innovation) */
--accent-400: #a78bfa;
--accent-500: #8B5CF6;   /* Premium features */
--accent-600: #7c3aed;

/* Neutral - Gray Scale */
--neutral-50:  #F9FAFB;  /* Backgrounds */
--neutral-100: #F3F4F6;  /* Cards */
--neutral-200: #E5E7EB;  /* Borders */
--neutral-400: #9CA3AF;  /* Disabled text */
--neutral-600: #4B5563;  /* Secondary text */
--neutral-700: #374151;  /* Body text */
--neutral-900: #111827;  /* Headlines */

/* Status Colors */
--success: #10B981;      /* Confirmations */
--warning: #F59E0B;      /* Alerts */
--error:   #EF4444;      /* Errors */

/* Gradients */
--gradient-hero: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
--gradient-cta:  linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
--gradient-premium: linear-gradient(135deg, #8B5CF6 0%, #7c3aed 100%);
```

#### Color Usage Guidelines

**Primary Blue:**
- Primary CTAs (Download button)
- Links and interactive elements
- Section accents
- Progress indicators

**Accent Purple:**
- Premium card features
- Special offers/highlights
- Secondary CTAs in premium sections
- Premium badge indicators

**Neutral Gray:**
- Body text: `neutral-700`
- Secondary text: `neutral-600`
- Disabled elements: `neutral-400`
- Backgrounds: `neutral-50` to `neutral-100`
- Borders: `neutral-200`

**DO NOT:**
- ❌ Use more than 3 colors in a single section
- ❌ Use accent purple for primary CTAs
- ❌ Use pure black (#000000) - always use neutral-900
- ❌ Use colors below 4.5:1 contrast ratio for text

---

### Typography

#### Font Family
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Why Inter?**
- Excellent readability at all sizes
- Professional, modern appearance
- Optimized for screens
- Wide character set support

#### Type Scale

```css
/* Display - Hero Headlines */
--text-display: 60px / 3.75rem;     /* Desktop */
--text-display-mobile: 36px / 2.25rem;  /* Mobile */
font-weight: 700 (Bold);
line-height: 1.1;
letter-spacing: -0.02em;

/* H1 - Section Headlines */
--text-h1: 48px / 3rem;
--text-h1-mobile: 32px / 2rem;
font-weight: 700 (Bold);
line-height: 1.2;
letter-spacing: -0.015em;

/* H2 - Subsection Headlines */
--text-h2: 36px / 2.25rem;
--text-h2-mobile: 28px / 1.75rem;
font-weight: 600 (Semibold);
line-height: 1.3;

/* H3 - Feature Headlines */
--text-h3: 24px / 1.5rem;
--text-h3-mobile: 20px / 1.25rem;
font-weight: 600 (Semibold);
line-height: 1.4;

/* Body Large - Subheadlines */
--text-body-lg: 20px / 1.25rem;
font-weight: 400 (Regular);
line-height: 1.6;

/* Body - Default Text */
--text-body: 16px / 1rem;
font-weight: 400 (Regular);
line-height: 1.6;
color: neutral-700;

/* Body Small - Captions, Labels */
--text-body-sm: 14px / 0.875rem;
font-weight: 400 (Regular);
line-height: 1.5;
color: neutral-600;

/* Button Text */
--text-button: 16px / 1rem;
font-weight: 600 (Semibold);
letter-spacing: 0.01em;
```

#### Typography Best Practices

**DO:**
- ✅ Use max 3 font sizes per section
- ✅ Maintain 1.5-1.6 line height for body text
- ✅ Use negative letter-spacing for large headlines
- ✅ Keep line length between 50-75 characters
- ✅ Use semibold (600) for emphasis, not bold (700)

**DON'T:**
- ❌ Use more than 2 font weights per page
- ❌ Use ALL CAPS for body text (headlines only, sparingly)
- ❌ Use italic for large blocks of text
- ❌ Center-align paragraphs longer than 2 lines
- ❌ Use font sizes smaller than 14px

---

### Spacing System

**8-Point Grid System**

All spacing should be multiples of 8px (0.5rem):

```css
--space-1:  8px  / 0.5rem;
--space-2:  16px / 1rem;
--space-3:  24px / 1.5rem;
--space-4:  32px / 2rem;
--space-6:  48px / 3rem;
--space-8:  64px / 4rem;
--space-12: 96px / 6rem;
--space-16: 128px / 8rem;
--space-24: 192px / 12rem;
```

#### Spacing Usage

**Component Internal Spacing:**
- Button padding: `py-3 px-6` (12px/24px)
- Card padding: `p-6` or `p-8` (24px/32px)
- Input padding: `py-3 px-4` (12px/16px)

**Component Spacing:**
- Between elements: `space-3` (24px)
- Between sections: `space-12` to `space-24` (96px-192px)
- Between feature cards: `gap-6` or `gap-8` (24px/32px)

**Section Padding:**
- Desktop: `py-24` (96px top/bottom)
- Mobile: `py-16` (64px top/bottom)
- Container: `px-4` on mobile, `px-6` on desktop

**Max Width Containers:**
```css
--container-sm: 640px;   /* Forms, single column */
--container-md: 768px;   /* Text content */
--container-lg: 1024px;  /* Features grid */
--container-xl: 1280px;  /* Hero, full sections */
```

---

### Elevation & Shadows

```css
/* Card Shadows */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Interactive Shadows */
--shadow-button: 0 4px 14px 0 rgba(14, 165, 233, 0.25);
--shadow-button-hover: 0 6px 20px 0 rgba(14, 165, 233, 0.35);
```

**Shadow Usage:**
- Cards: `shadow-md`
- Phone mockups: `shadow-2xl`
- Buttons (hover): `shadow-button-hover`
- Modals/Dialogs: `shadow-xl`
- Feature icons: `shadow-sm`

---

### Border Radius

```css
--radius-sm: 6px;   /* Small elements, badges */
--radius-md: 8px;   /* Buttons, inputs, cards */
--radius-lg: 12px;  /* Feature cards, images */
--radius-xl: 16px;  /* Large cards, sections */
--radius-2xl: 24px; /* Phone mockups */
--radius-full: 9999px; /* Pills, avatar */
```

**Usage:**
- Buttons: `rounded-lg` (8px)
- Inputs: `rounded-lg` (8px)
- Cards: `rounded-xl` (16px)
- Images: `rounded-lg` or `rounded-xl`
- Phone mockups: `rounded-3xl` (24px)

---

## Component Library

### Buttons

#### Primary Button (CTA)
```tsx
<button className="
  px-6 py-3
  bg-gradient-to-r from-primary-500 to-primary-600
  text-white font-semibold text-base
  rounded-lg
  shadow-button hover:shadow-button-hover
  transition-all duration-200
  hover:scale-105
  active:scale-95
">
  Download Kavipay
</button>
```

**Specs:**
- Min width: 140px
- Height: 48px (touch-friendly)
- Font: 16px, semibold (600)
- Padding: 12px 24px
- Hover: Scale 1.05, elevated shadow
- Active: Scale 0.95

#### Secondary Button
```tsx
<button className="
  px-6 py-3
  border-2 border-primary-500
  text-primary-600 font-semibold
  rounded-lg
  hover:bg-primary-50
  transition-all duration-200
">
  Learn More
</button>
```

#### Ghost Button
```tsx
<button className="
  px-6 py-3
  text-neutral-700 font-medium
  hover:text-primary-500
  transition-colors duration-200
">
  View Features
</button>
```

**Button States:**
- Default: Base styles
- Hover: Scale/shadow/background change
- Active: Slight scale down (0.95)
- Disabled: `opacity-50 cursor-not-allowed`
- Loading: Show spinner, disable interaction

---

### Input Fields

```tsx
<input className="
  w-full px-4 py-3
  border-2 border-neutral-200
  rounded-lg
  text-base text-neutral-900
  placeholder:text-neutral-400
  focus:border-primary-500 focus:ring-4 focus:ring-primary-100
  transition-all duration-200
" />
```

**Specs:**
- Height: 48px (touch-friendly)
- Border: 2px, neutral-200
- Focus: Primary border + subtle ring
- Error: Red border + error message
- Success: Green border + checkmark

---

### Cards

#### Feature Card
```tsx
<div className="
  p-8
  bg-white
  rounded-xl
  border border-neutral-200
  shadow-md hover:shadow-lg
  transition-all duration-300
  hover:-translate-y-1
">
  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
    {/* Icon */}
  </div>
  <h3 className="text-xl font-semibold mb-2">Feature Title</h3>
  <p className="text-neutral-600">Description text...</p>
</div>
```

**Specs:**
- Padding: 32px
- Border: 1px, subtle
- Hover: Elevate (-4px) + shadow increase
- Icon container: 48x48px, rounded, tinted background

#### Testimonial Card
```tsx
<div className="
  p-6
  bg-neutral-50
  rounded-lg
  border-l-4 border-primary-500
">
  <div className="flex mb-2">
    <span className="text-yellow-400">★★★★★</span>
  </div>
  <p className="text-neutral-700 mb-4">"Quote text..."</p>
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-neutral-200"></div>
    <div>
      <p className="font-semibold text-sm">Name</p>
      <p className="text-xs text-neutral-500">Location</p>
    </div>
  </div>
</div>
```

---

### Badges & Pills

```tsx
/* Trust Badge */
<div className="
  inline-flex items-center gap-2
  px-3 py-1
  bg-green-50 text-green-700
  rounded-full
  text-sm font-medium
">
  ✓ Bank-Level Security
</div>

/* Feature Badge */
<span className="
  px-2 py-1
  bg-accent-100 text-accent-700
  rounded text-xs font-semibold uppercase tracking-wide
">
  Premium
</span>
```

---

## Layout & Spacing

### Grid Systems

#### Features Grid (3 columns)
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Feature cards */}
</div>
```

#### Two-Column Layout (Hero, Content)
```tsx
<div className="grid lg:grid-cols-2 gap-12 items-center">
  <div>{/* Text content */}</div>
  <div>{/* Visual content */}</div>
</div>
```

#### Responsive Breakpoints
```css
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large */
```

**Usage Pattern:**
```tsx
/* Mobile-first approach */
<div className="
  grid                     /* 1 column on mobile */
  md:grid-cols-2          /* 2 columns on tablet */
  lg:grid-cols-3          /* 3 columns on desktop */
  gap-6 md:gap-8          /* Responsive gap */
">
```

---

### Container Patterns

#### Full-Width Section
```tsx
<section className="py-16 md:py-24 bg-neutral-50">
  <div className="container mx-auto px-4 max-w-7xl">
    {/* Content */}
  </div>
</section>
```

#### Centered Content
```tsx
<div className="max-w-3xl mx-auto text-center">
  <h2 className="text-4xl font-bold mb-4">Headline</h2>
  <p className="text-xl text-neutral-600">Subheadline</p>
</div>
```

---

## Responsive Design

### Mobile-First Strategy

**Approach:**
1. Design for mobile (320px minimum)
2. Enhance for tablet (768px+)
3. Optimize for desktop (1024px+)

### Touch Targets

**Minimum Sizes:**
- Buttons: 44x44px (iOS guideline)
- Links in paragraphs: 44px height
- Form inputs: 48px height
- Icon buttons: 48x48px

### Content Stacking

**Mobile (<768px):**
```tsx
/* Stack vertically */
<div className="flex flex-col gap-6">
  <div>Primary content</div>
  <div>Secondary content</div>
</div>
```

**Desktop (768px+):**
```tsx
/* Side by side */
<div className="flex md:flex-row flex-col gap-8">
  <div className="flex-1">Primary</div>
  <div className="flex-1">Secondary</div>
</div>
```

### Image Optimization

**Responsive Images:**
```tsx
<Image
  src="/phone-mockup.png"
  alt="Kavipay App Dashboard"
  width={500}
  height={1000}
  sizes="(max-width: 768px) 100vw, 500px"
  className="w-full h-auto"
  priority={isAboveFold}
/>
```

**Background Images:**
```tsx
/* Use different images for mobile vs desktop */
<div className="
  bg-cover bg-center
  bg-[url('/hero-mobile.jpg')]
  md:bg-[url('/hero-desktop.jpg')]
">
```

---

## Animation & Interaction

### Animation Principles

**1. Purposeful Motion**
- Animations should guide attention
- Motion should feel natural (ease-in-out)
- Keep durations short (200-400ms)

**2. Performance First**
- Animate only transform and opacity
- Avoid animating layout properties
- Use `will-change` sparingly

**3. Respect Accessibility**
```tsx
/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Common Animations

#### Fade In on Scroll
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

#### Stagger Children
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

#### Button Hover
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Download
</motion.button>
```

#### Carousel
```tsx
<motion.div
  drag="x"
  dragConstraints={{ left: -1000, right: 0 }}
  className="flex gap-4"
>
  {/* Screenshot images */}
</motion.div>
```

### Micro-Interactions

**Form Validation:**
- ✅ Instant feedback on blur/change
- ✅ Checkmark animation on success
- ✅ Shake animation on error

**Loading States:**
- Skeleton screens for content
- Spinner for actions (button clicks)
- Progress bar for multi-step

**Success States:**
- Confetti or checkmark animation
- Green border pulse
- Success message fade in

---

## Accessibility

### WCAG 2.1 AA Compliance

#### Color Contrast
**Minimum Ratios:**
- Normal text: 4.5:1
- Large text (18px+): 3:1
- UI components: 3:1

**Tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Stark Figma Plugin](https://www.getstark.co/)

#### Semantic HTML
```tsx
/* Use proper heading hierarchy */
<h1>Main page title</h1>
  <h2>Section title</h2>
    <h3>Subsection title</h3>

/* Use semantic elements */
<nav>...</nav>
<main>...</main>
<section>...</section>
<article>...</article>
<footer>...</footer>
```

#### Keyboard Navigation
```tsx
/* Ensure all interactive elements are keyboard accessible */
<button
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  tabIndex={0}
>
  Click me
</button>

/* Focus states */
.focus-visible:outline-2
.focus-visible:outline-primary-500
.focus-visible:outline-offset-2
```

#### ARIA Labels
```tsx
/* Screen reader text */
<button aria-label="Download Kavipay app from App Store">
  <AppleIcon />
</button>

/* Loading states */
<div aria-live="polite" aria-busy="true">
  Loading...
</div>

/* Form errors */
<input
  aria-invalid="true"
  aria-describedby="error-message"
/>
<span id="error-message" role="alert">
  Email is required
</span>
```

#### Focus Management
```tsx
/* Skip to main content link */
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

<main id="main-content">
  {/* Page content */}
</main>
```

---

## Visual Hierarchy

### F-Pattern Layout

Users scan in an F-pattern:
1. Top horizontal (headline)
2. Down left side (subheadline, bullets)
3. Second horizontal (CTA)

**Design Accordingly:**
```
═══════════════════════════════════════
[Large Headline]
[Subheadline text]
[Bullet points]     [Supporting visual]

[Primary CTA]
═══════════════════════════════════════
```

### Size Hierarchy

**Importance Order:**
1. Hero headline: 60px
2. Section headlines: 36px
3. Feature headlines: 24px
4. Body text: 16px
5. Caption text: 14px

**Visual Weight:**
```
Hero CTA > Section Headlines > Feature Cards > Body Text
```

### Color Hierarchy

**Draw Attention:**
1. Primary CTAs: Bright primary color
2. Headlines: Dark neutral (near black)
3. Body: Medium neutral gray
4. Secondary: Light neutral gray

### Whitespace as Design

**80/20 Rule:**
- 80% whitespace
- 20% content

**Benefits:**
- Easier to scan
- Feels premium
- Reduces cognitive load

---

## Best Practices

### Performance Optimization

#### Image Optimization
```tsx
/* Use Next.js Image component */
import Image from 'next/image';

<Image
  src="/phone.png"
  alt="Description"
  width={500}
  height={1000}
  quality={85}
  loading="lazy" // or "eager" for above fold
  placeholder="blur"
  blurDataURL="data:image/..." // optional
/>
```

**Guidelines:**
- Use WebP format (fallback to PNG/JPEG)
- Compress images (TinyPNG, Squoosh)
- Lazy load below-the-fold images
- Use appropriate sizes (don't load 4K on mobile)

#### Font Loading
```tsx
/* Preload critical fonts */
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevent invisible text
  preload: true
});
```

#### Code Splitting
```tsx
/* Lazy load heavy components */
import dynamic from 'next/dynamic';

const ScreenshotCarousel = dynamic(
  () => import('@/components/sections/Screenshots'),
  { loading: () => <p>Loading...</p> }
);
```

---

### Conversion Optimization

#### CTA Placement
**Required Locations:**
1. Hero section (above fold)
2. After features grid
3. After testimonials
4. Before footer (final opportunity)

**CTA Best Practices:**
- Use action verbs ("Download", "Get Started")
- Create urgency ("Join 10,000+ users")
- Show benefit ("Get Started Free")
- Make it visually prominent (color, size)

#### Form Optimization
```tsx
/* Single field is best */
<form className="flex gap-2">
  <input
    type="email"
    placeholder="Enter your email"
    className="flex-1"
  />
  <button type="submit">Join Waitlist</button>
</form>

/* Multi-field - use smart defaults */
<input
  type="tel"
  autoComplete="tel"
  inputMode="numeric"
/>
```

#### Social Proof
**Types:**
- User count: "10,000+ users"
- Ratings: "★★★★★ 4.8/5"
- Media logos: TechCrunch, Forbes
- Testimonials: Real quotes with photos
- Trust badges: SSL, verified, secure

**Placement:**
- Hero section (immediate trust)
- Before CTAs (overcome objections)
- Footer (final reassurance)

---

### Common Mistakes to Avoid

**DON'T:**
- ❌ Use too many fonts (max 1 family, 2-3 weights)
- ❌ Use too many colors (stick to palette)
- ❌ Make text too small (<14px on mobile)
- ❌ Use low-contrast text (check ratios!)
- ❌ Forget mobile optimization
- ❌ Use auto-play videos with sound
- ❌ Have CTAs that don't stand out
- ❌ Use generic stock photos
- ❌ Neglect loading states
- ❌ Ignore accessibility

**DO:**
- ✅ Test on real devices
- ✅ Use system fonts as fallback
- ✅ Optimize images before upload
- ✅ Add loading states
- ✅ Test keyboard navigation
- ✅ Use semantic HTML
- ✅ Add proper alt text
- ✅ Monitor performance
- ✅ A/B test CTAs
- ✅ Gather user feedback

---

## Quality Checklist

### Before Shipping

#### Visual Design
- [ ] All colors from design system
- [ ] Consistent spacing (8px grid)
- [ ] Proper typography scale
- [ ] Consistent border radius
- [ ] Shadows used appropriately
- [ ] High-quality images (2x for retina)

#### Responsive
- [ ] Tested on iPhone SE (320px)
- [ ] Tested on iPhone 14 Pro (393px)
- [ ] Tested on iPad (768px)
- [ ] Tested on desktop (1440px+)
- [ ] All images responsive
- [ ] Touch targets 44x44px minimum

#### Accessibility
- [ ] Color contrast 4.5:1 minimum
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] ARIA labels present
- [ ] Semantic HTML used
- [ ] Screen reader tested

#### Performance
- [ ] Lighthouse score >85
- [ ] First Contentful Paint <1.5s
- [ ] Time to Interactive <3s
- [ ] Images optimized
- [ ] Fonts preloaded
- [ ] No layout shift (CLS <0.1)

#### Functionality
- [ ] All links work
- [ ] CTAs track correctly
- [ ] Forms validate properly
- [ ] Email capture works
- [ ] Analytics firing
- [ ] Error states handled

#### Content
- [ ] All copy proofread
- [ ] Headlines compelling
- [ ] CTAs action-oriented
- [ ] No placeholder text
- [ ] All images have alt text

#### Cross-Browser
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Safari iOS (latest)

---

## Design Tokens (for Developers)

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369a1',
        },
        accent: {
          500: '#8B5CF6',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          600: '#4B5563',
          700: '#374151',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['60px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h2': ['36px', { lineHeight: '1.3' }],
        'h3': ['24px', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',  // 72px
        '22': '5.5rem',  // 88px
      },
      boxShadow: {
        'button': '0 4px 14px 0 rgba(14, 165, 233, 0.25)',
        'button-hover': '0 6px 20px 0 rgba(14, 165, 233, 0.35)',
      },
    },
  },
};
```

---

## Resources & Tools

### Design Tools
- **Figma:** Design mockups and prototypes
- **Stark:** Accessibility contrast checker
- **TinyPNG:** Image compression
- **WebAIM:** Contrast checker

### Development Tools
- **Lighthouse:** Performance auditing
- **React DevTools:** Component inspection
- **Tailwind IntelliSense:** VSCode extension
- **Framer Motion DevTools:** Animation debugging

### Testing Tools
- **BrowserStack:** Cross-browser testing
- **ChromeVox:** Screen reader testing
- **Google Analytics:** Conversion tracking
- **Hotjar:** Heatmap analysis

---

## Summary

This design guide ensures:
- ✅ Consistent visual language
- ✅ High conversion optimization
- ✅ Excellent accessibility
- ✅ Fast performance
- ✅ Mobile-first responsiveness
- ✅ Trust-building design

**Key Takeaways:**
1. Stick to the design system (colors, typography, spacing)
2. Mobile-first always
3. Performance is a feature
4. Accessibility is non-negotiable
5. Test, measure, iterate

**Questions?** Refer to:
- `DOCS.md` - Complete specifications
- `QUICK_START.md` - Implementation guide
- Next.js docs - Technical implementation

---

**Good luck building! 🚀**
