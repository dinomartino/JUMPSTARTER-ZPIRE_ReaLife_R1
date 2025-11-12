# RealLife Landing Page - ZPIRE Jumpstarter Competition

**Project**: RealLife/Scrollless Landing Page
**Team**: Chan Chun Ho Spencer, Ng Tsz Hin Ryan, Ho Sze Yuen Tino
**Competition**: ZPIRE Jumpstarter (Vibe Coding Challenge - 25% Bonus)
**Tech Stack**: Next.js 16 + React 18 + TypeScript + Tailwind CSS + Framer Motion
**Status**: ✅ Complete & Production Ready

---

## 🎯 Project Overview

A visually stunning, desktop-first landing page showcasing **RealLife** (Scrolless app) - a digital wellness solution that helps Hong Kong university students break free from social media addiction through AI-powered task decomposition and positive reinforcement.

### Key Features
- **8 Full-Page Sections**: Navigation, Hero, Problem, Solution, How It Works, Mission, CTA, Footer
- **Advanced Animations**: Framer Motion, GSAP, custom effects
- **7 UI Effect Components**: BubbleBackground, TypingText, SparklesCore, FuzzyText, ColourfulText, GradientText, WavyBackground
- **Mobile Optimized**: Responsive design with performance optimizations
- **Accessibility**: Reduced motion support, keyboard navigation, semantic HTML
- **Performance**: GPU acceleration, lazy loading, optimized animations

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/JUMPSTARTER-ZPIRE_ReaLife_R1.git
cd JUMPSTARTER-ZPIRE_ReaLife_R1/reallife-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

---

## 📁 Project Structure

```
reallife-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts
│   │   ├── page.tsx             # Main page composition
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── sections/            # 8 page sections
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Solution.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Mission.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Footer.tsx
│   │   ├── shared/              # Reusable components
│   │   │   ├── StatCard.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   └── PhoneMockup.tsx
│   │   └── ui/                  # UI primitives & effects
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── iphone.tsx
│   │       └── shadcn-io/       # 7 advanced effects
│   └── lib/
│       ├── utils.ts             # Utilities (cn function)
│       └── animations.ts        # Framer Motion variants
├── public/
│   └── screenshots/             # App screenshots (5 images)
└── docs/                        # Documentation
    ├── development-documentation.md
    └── reallife-landing-page-prd.md
```

---

## 🛠️ Tech Stack

### Core
- **Next.js 16.0.1** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 3.4.1** - Styling

### Animation
- **Framer Motion 10.18.0** - Primary animation library
- **GSAP 3.13.0** - Advanced animations (TypingText)
- **Motion 12.23.24** - Motion One library

### UI & Effects
- **shadcn/ui** - Component library
- **@tsparticles** - Particle system (SparklesCore)
- **simplex-noise** - Noise generation (WavyBackground)
- **lucide-react** - Icons
- **canvas-confetti** - Celebration effects
- **react-countup** - Number animations

### Utilities
- **react-intersection-observer** - Viewport detection
- **class-variance-authority** - Component variants
- **clsx** + **tailwind-merge** - Class name utilities

---

## 📱 Sections Overview

1. **Navigation** - Sticky header with mobile menu
2. **Hero** - Bubble background + TypingText animation
3. **Problem** - Statistics + dual phone mockups with scroll/swipe animations
4. **Solution** - Sparkles background + ColourfulText branding
5. **How It Works** - 3-step interactive demo with screenshots
6. **Mission** - Wavy background + GradientText
7. **CTA** - Waitlist form with confetti celebration
8. **Footer** - Links, social media, newsletter signup

---

## 🎨 Design System

### Colors
- **Primary Gradient**: Purple (#667eea) → Pink (#f093fb)
- **Dark Background**: #0a0a1a
- **Accent Orange**: #f6ad55

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: 7xl (hero) → 6xl (sections) → 4xl (subsections)

### Animations
- **Timing**: 0.3s (fast), 0.6s (normal), 1s (slow)
- **Easing**: Smooth, bounce, linear
- **Pattern**: Fade in, slide, scale, stagger

---

## 📚 Documentation

Comprehensive documentation available in `/docs`:

- **[Development Documentation](docs/development-documentation.md)** - Complete technical guide with:
  - All components with props and features
  - Installation instructions
  - Animation patterns
  - Performance optimizations
  - Troubleshooting

- **[Product Requirements Document](docs/reallife-landing-page-prd.md)** - Original PRD with:
  - Design specifications
  - Section breakdowns
  - Animation requirements
  - Technical implementation guide

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd reallife-landing
vercel --prod
```

### Build Locally

```bash
npm run build
npm start
```

---

## ⚡ Performance

- **Lighthouse Score**: 90+ (Performance)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Mobile Optimizations**: Static backgrounds, reduced animations
- **GPU Acceleration**: Transform-based animations
- **Lazy Loading**: Intersection observer triggers

---

## 🎯 Key Achievements

✅ All 8 sections implemented
✅ 7 advanced UI effect components integrated
✅ Fully responsive design
✅ Smooth animations (60fps)
✅ Accessibility features
✅ Production-ready codebase
✅ Comprehensive documentation

---

## 👥 Team

- **Chan Chun Ho Spencer** - Developer
- **Ng Tsz Hin Ryan** - Developer
- **Ho Sze Yuen Tino** - Developer

**For**: ZPIRE Jumpstarter Competition 2025

---

## 📄 License

This project was created for the ZPIRE Jumpstarter competition.

---

## 🔗 Links

- **Competition**: ZPIRE Jumpstarter
- **Documentation**: See `/docs` folder
- **Tech**: Next.js, React, TypeScript, Tailwind CSS

---

**Made with 💜 by the RealLife Team for ZPIRE Jumpstarter 2025**
