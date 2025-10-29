# Kavipay Landing Page - Image Assets Guide

This directory contains all the image assets for the Kavipay landing page. Below is a guide for where to place each type of image.

## Directory Structure

```
public/images/
├── cards/
│   ├── virtual-card-mockup.png
│   ├── physical-card-mockup.png
│   ├── card-in-phone.png
│   └── card-designs/
│       ├── standard.png
│       └── premium.png
├── app/
│   ├── app-screenshot-1.png
│   ├── app-screenshot-2.png
│   ├── app-screenshot-3.png
│   └── qr-code.png
├── utilities/
│   ├── bill-payment-screen.png
│   ├── airtime-purchase-screen.png
│   └── transaction-history.png
├── logos/
│   ├── kavipay-logo.svg
│   ├── kavipay-logo-white.svg
│   ├── partners/
│   │   ├── visa.svg
│   │   ├── mastercard.svg
│   │   ├── apple-pay.svg
│   │   ├── google-pay.svg
│   │   └── samsung-pay.svg
│   └── certifications/
│       ├── pci-dss.svg
│       ├── iso-27001.svg
│       └── soc-2.svg
├── testimonials/
│   ├── user-1.jpg
│   ├── user-2.jpg
│   └── user-3.jpg
├── backgrounds/
│   ├── hero-gradient.svg
│   └── section-pattern.svg
└── icons/
    ├── features/
    └── utilities/
```

## Recommended Image Specifications

### Card Images
- **Format**: PNG with transparency
- **Size**: 800x504px (1.586:1 ratio - standard credit card aspect ratio)
- **DPI**: 144 (2x for retina displays)
- **Usage**: Card showcase sections on home and /card page

### App Screenshots
- **Format**: PNG
- **Size**: 1170x2532px (iPhone aspect ratio)
- **DPI**: 144
- **Usage**: Hero sections, app download section

### Logos
- **Format**: SVG (preferred) or PNG with transparency
- **Size**: Variable (SVG scales perfectly)
- **Usage**: Header, footer, partner showcases

### Testimonial Photos
- **Format**: JPG
- **Size**: 400x400px (square)
- **DPI**: 144
- **Usage**: Testimonials section

### Background Images
- **Format**: SVG or optimized PNG
- **Size**: 1920x1080px or larger
- **Usage**: Hero sections, decorative backgrounds

## Where Images Are Used

### Homepage (/)
- Hero section: App mockup showing card management
- Social Proof: Partner logos (Visa, Mastercard, etc.)
- Stats: Background gradients
- Features: Icon illustrations
- Testimonials: User photos
- App Download: QR code, app store badges

### Card Page (/card)
- Hero: Virtual and physical card mockups
- Virtual Card section: Phone mockup showing virtual card creation
- Physical Card section: Standard and premium card designs
- Features: Card in various payment scenarios

### Utilities Page (/utilities)
- Hero: Service category illustrations
- Bill Payments: Provider logos
- Airtime/Data: Network operator logos
- Features: App screenshots showing bill payment flow

## How to Add Images

### Using Next.js Image Component

```tsx
import Image from 'next/image';

// For local images
<Image
  src="/images/cards/virtual-card-mockup.png"
  alt="Kavipay Virtual Card"
  width={800}
  height={504}
  priority // Use for above-the-fold images
/>

// For responsive images
<Image
  src="/images/app/app-screenshot-1.png"
  alt="Kavipay App Dashboard"
  fill
  className="object-contain"
/>
```

### Replacing Emoji Placeholders

Current emoji placeholders to replace:
- 📱 → Real phone mockup images
- 💳 → Actual card design images
- 👤 → Real user testimonial photos
- ⚡, 💧, 📡 → Custom service icon illustrations

## Image Optimization Tips

1. **Use WebP format** where possible for better compression
2. **Lazy load** images below the fold
3. **Use responsive images** with srcset for different screen sizes
4. **Compress images** using tools like TinyPNG or ImageOptim
5. **Use CDN** for faster image delivery in production

## Sourcing Images

### Free Stock Photos
- Unsplash (https://unsplash.com)
- Pexels (https://pexels.com)
- Pixabay (https://pixabay.com)

### Mockup Generators
- Figma (for card and phone mockups)
- Mockuuups Studio
- Smartmockups

### Icon Libraries
- Lucide Icons (already in use)
- Heroicons
- Font Awesome

### Illustration Libraries
- unDraw (https://undraw.co)
- Storyset (https://storyset.com)
- DrawKit (https://drawkit.com)

## Next Steps

1. Create actual card designs in Figma or Photoshop
2. Take screenshots of your app (or create mockups)
3. Generate QR code pointing to app download link
4. Get partner logos from brand guidelines
5. Take or source professional user testimonial photos
6. Create custom service category illustrations
7. Replace all emoji placeholders with real images
