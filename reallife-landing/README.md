# RealLife Landing Page

A stunning, desktop-first landing page for RealLife - the AI-powered digital wellness app that helps you break free from endless scrolling.

Built for the ZPIRE Jumpstarter Competition 2025.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Additional Libraries**:
  - react-intersection-observer (scroll triggers)
  - react-countup (number animations)
  - canvas-confetti (celebrations)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies (if needed)
npm install --cache /tmp/npm-cache --legacy-peer-deps

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
reallife-landing/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout with fonts
│   │   ├── page.tsx           # Main landing page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── sections/          # Landing page sections
│   │   ├── animations/        # Custom animation components
│   │   └── shared/            # Shared components
│   └── lib/
│       ├── animations.ts      # Framer Motion variants
│       └── utils.ts           # Utility functions
├── public/
│   ├── videos/                # Video assets
│   ├── images/                # Image assets
│   └── fonts/                 # Custom fonts (if any)
└── docs/
    └── reallife-landing-page-prd.md  # Complete PRD

```

## Color Palette

```css
--purple-deep: #667eea
--purple-mid: #764ba2
--pink-bright: #f093fb
--orange-accent: #f6ad55
--bg-dark: #0a0a1a
--bg-dark-lighter: #1a1a2e
```

## Key Features

- 🎨 Beautiful gradient animations
- 📱 Desktop-first, mobile-responsive design
- ⚡ Optimized performance (Lighthouse 90+)
- 🎬 Scroll-triggered animations
- 🎯 Interactive phone mockups
- 🎉 Engaging micro-interactions

## Development

The project uses:
- ESLint for code quality
- TypeScript for type safety
- Tailwind CSS for utility-first styling
- Custom animation utilities for consistent motion design

## Deployment

Recommended deployment platform: **Vercel**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Team

- Chan Chun Ho Spencer
- Ng Tsz Hin Ryan
- Ho Sze Yuen Tino

## Competition

This landing page is created for the ZPIRE Jumpstarter Vibe Coding Challenge (25% bonus scoring).

**Deadline**: November 12, 2025

---

Built with 💜 for the ZPIRE Jumpstarter Competition
