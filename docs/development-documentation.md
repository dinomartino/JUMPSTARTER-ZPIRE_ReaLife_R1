# RealLife Landing Page - Development Documentation

**Project**: RealLife/Scrollless Landing Page for ZPIRE Jumpstarter Competition
**Tech Stack**: Next.js 16 + React 18 + TypeScript + Tailwind CSS + Framer Motion
**Last Updated**: 2025-01-12 (Comprehensive Update - All Components Documented)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Technology Stack](#technology-stack)
4. [Components Architecture](#components-architecture)
5. [Sections Breakdown](#sections-breakdown)
6. [Design System](#design-system)
7. [Animation Guidelines](#animation-guidelines)
8. [Development Workflow](#development-workflow)
9. [Future Enhancements](#future-enhancements)

---

## Project Overview

The RealLife landing page is a visually stunning, desktop-first web experience designed to showcase the RealLife/Scrollless app's mission to combat social media addiction. The page features:

- **7 Main Sections**: Navigation, Hero, Problem, Solution, How It Works, Mission, CTA/Waitlist, Footer
- **Smooth Animations**: Powered by Framer Motion with scroll-triggered effects
- **Interactive Elements**: Step-by-step demos, stat counters, form submissions
- **Responsive Design**: Desktop-first with mobile fallbacks

**Key Success Metrics**:
- Visual wow-factor with smooth animations
- Clear problem → solution narrative
- Professional code quality
- Performance optimization (Lighthouse 90+)

---

## Project Structure

```
reallife-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts & metadata
│   │   ├── page.tsx             # Main page integrating all sections
│   │   └── globals.css          # Global styles & design system
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── shadcn-io/
│   │   │       └── bubble-background/
│   │   │           └── index.tsx  # Animated bubble background
│   │   ├── sections/            # Page sections (main content)
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Solution.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Mission.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Footer.tsx
│   │   └── shared/              # Reusable components
│   │       ├── PhoneMockup.tsx
│   │       ├── StatCard.tsx
│   │       └── FeatureCard.tsx
│   └── lib/
│       ├── utils.ts             # Utility functions (cn, etc.)
│       └── animations.ts        # Animation variants & hooks
├── public/                      # Static assets (images, videos)
├── docs/                        # Documentation
│   ├── reallife-landing-page-prd.md
│   └── development-documentation.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## Technology Stack

### Core Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.0.1 | React framework with App Router (Turbopack) |
| `react` | ^18 | UI library |
| `typescript` | ^5 | Type safety |
| `tailwindcss` | ^3.4.1 | Utility-first CSS |
| `framer-motion` | ^10.16.16 | Animation library |
| `gsap` | ^3.12.5 | Advanced scroll animations (future use) |
| `react-intersection-observer` | ^9.5.3 | Scroll-triggered animations |
| `lucide-react` | ^0.294.0 | Icon library |
| `react-countup` | ^6.5.0 | Animated number counters |
| `canvas-confetti` | ^1.9.2 | Celebration effects |
| `shadcn/ui` | latest | Pre-built UI components |
| `@tsparticles/engine` | ^3.9.1 | Particle system engine |
| `@tsparticles/react` | ^3.0.0 | React wrapper for particles |
| `@tsparticles/slim` | ^3.9.1 | Slim particle build |
| `simplex-noise` | ^4.0.3 | Noise generation for waves |
| `motion` | ^12.23.24 | Motion One library |
| `class-variance-authority` | ^0.7.1 | Component variants |
| `clsx` | ^2.1.1 | Class name utility |
| `tailwind-merge` | ^3.3.1 | Tailwind class merging |

### Installation Commands

```bash
# Initialize project
npx create-next-app@latest reallife-landing --typescript --tailwind --app

# Install dependencies
npm install framer-motion gsap react-intersection-observer lucide-react react-countup canvas-confetti
npm install @tsparticles/engine @tsparticles/react @tsparticles/slim simplex-noise motion
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate

# Initialize shadcn/ui
npx shadcn@latest init --yes --defaults

# Add shadcn UI components
npx shadcn@latest add button card input --yes

# Add shadcn registry components (backgrounds, effects, etc.)
npx shadcn@latest add https://www.shadcn.io/registry/bubble-background.json

# Add Magic UI components (iPhone mockup)
npx shadcn@latest add @magicui/iphone
```

### Adding shadcn Registry Components

shadcn.io provides additional components beyond the standard UI library:

**Available Registries**:
- **Backgrounds**: `bubble-background`, `wavy-background`, `aurora-background`
- **Text Effects**: `typing-text`, `fuzzy-text`, `colourful-text`, `gradient-text`
- **Visual Effects**: `sparkles`
- **Layouts**: Advanced layout components

**How to Add**:
```bash
# Generic format
npx shadcn@latest add https://www.shadcn.io/registry/[component-name].json

# Currently used in project:
npx shadcn@latest add https://www.shadcn.io/registry/bubble-background.json
npx shadcn@latest add https://www.shadcn.io/registry/typing-text.json
npx shadcn@latest add https://www.shadcn.io/registry/sparkles.json
npx shadcn@latest add https://www.shadcn.io/registry/fuzzy-text.json
npx shadcn@latest add https://www.shadcn.io/registry/colourful-text.json
npx shadcn@latest add https://www.shadcn.io/registry/gradient-text.json
npx shadcn@latest add https://www.shadcn.io/registry/wavy-background.json
```

**Post-Installation Fixes**:
After adding registry components, you may need to fix imports:
```tsx
// Change from:
import { cn } from '@repo/shadcn-ui/lib/utils';
import { motion } from 'motion/react';

// To:
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
```

---

## Components Architecture

### Component Categories

#### 1. **UI Components** (`src/components/ui/`)
Pre-built components from shadcn/ui with consistent styling.

- **Button**: Primary CTA buttons with gradient variants
- **Card**: Container component with glassmorphism effects
- **Input**: Form input fields with focus states

**Usage Example**:
```tsx
import { Button } from '@/components/ui/button';

<Button
  className="bg-gradient-to-r from-purple-deep to-pink-bright"
  onClick={handleClick}
>
  Join Waitlist
</Button>
```

#### 2. **Section Components** (`src/components/sections/`)
Full-page sections that make up the landing page.

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `Navigation.tsx` | Fixed top navbar | Scroll-based backdrop blur, smooth scroll anchors |
| `Hero.tsx` | Above-the-fold hero | Split-screen comparison, animated gradients |
| `Problem.tsx` | Problem statement | Stat cards with counters, infinite scroll demo |
| `Solution.tsx` | Feature showcase | Interactive phone mockup, 4 feature cards |
| `HowItWorks.tsx` | Step-by-step demo | Auto-cycling steps, interactive navigation |
| `Mission.tsx` | Mission statement | Video background effect, stat tickers |
| `CTA.tsx` | Waitlist form | Email submission, confetti celebration |
| `Footer.tsx` | Site footer | Links, social media, copyright |

**Integration Pattern**:
```tsx
// src/app/page.tsx
import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
// ... other imports

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Problem />
      {/* ... other sections */}
    </main>
  );
}
```

#### 3. **Shared Components** (`src/components/shared/`)
Reusable components used across multiple sections.

##### **PhoneMockup.tsx**
Renders a realistic iPhone mockup with content.

```tsx
interface PhoneMockupProps {
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

// Usage
<PhoneMockup size="large">
  <AppScreen content={...} />
</PhoneMockup>
```

**Features**:
- Three size variants
- Animated glow effect
- Notch detail
- Scroll animations on appear

##### **StatCard.tsx**
Displays statistics with animated counters and icons.

```tsx
interface StatCardProps {
  number: string | ReactNode;
  label: string;
  icon: ReactNode;
  gradient: string;
  suffix?: string;
}

// Usage
<StatCard
  number={<CountUp end={4.5} decimals={1} />}
  label="hours lost per day"
  icon={<Clock />}
  gradient="from-orange-500 to-red-500"
  suffix=" hrs"
/>
```

**Features**:
- Scale-in animation with bounce
- Hover glow effect
- Supports CountUp for animated numbers

##### **FeatureCard.tsx**
Feature cards that appear from corners toward center.

```tsx
interface FeatureCardProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
}

// Usage
<FeatureCard
  position="top-left"
  number="01"
  title="Identify"
  description="Tracks time on distracting apps..."
  icon={<BarChart3 />}
  gradient="from-purple-500 to-blue-500"
/>
```

**Features**:
- Direction-based entrance animations
- Numbered badges
- Gradient icon backgrounds

---

## Sections Breakdown

### Section 0: Navigation
**File**: `src/components/sections/Navigation.tsx`
**Height**: 80px (fixed)

**Key Features**:
- Sticky positioning with `fixed top-0`
- Backdrop blur intensifies on scroll past 100px
- Gradient text logo
- Smooth scroll navigation to sections
- CTA button to waitlist

**State Management**:
```tsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**Future Enhancements**:
- [ ] Mobile hamburger menu
- [ ] Active section indicator
- [ ] Logo animation on scroll

---

### Section 1: Hero
**File**: `src/components/sections/Hero.tsx`
**Height**: min-h-screen
**Type**: Client component with responsive optimizations

**Key Features**:
- **Bubble Background Animation** (desktop only) - Liquid-like metaball effect with SVG filters
- **TypingText Animation** - Rotates through 4 words: "Scrolling", "Distractions", "Procrastination", "Social Media"
- **Mobile Optimizations**: Static gradient background, simple text (no typing animation)
- **Reduced Motion Support**: Detects `prefers-reduced-motion` setting
- Center overlay with gradient headline + CTAs
- Animated scroll indicator at bottom

**Bubble Background Component**:
Uses the shadcn bubble-background component with custom colors:
```tsx
import { BubbleBackground } from '@/components/ui/shadcn-io/bubble-background';

<BubbleBackground
  className="absolute inset-0"
  interactive={false}
  colors={{
    first: '102,126,234',     // purple-deep
    second: '118,75,162',      // purple-mid
    third: '240,147,251',      // pink-bright
    fourth: '246,173,85',      // orange-accent
    fifth: '139,92,246',       // violet
    sixth: '236,72,153',       // fuchsia
  }}
/>
```

**Technical Details**:
- **SVG Metaball Filter**: Uses `feGaussianBlur` + `feColorMatrix` for liquid merging effect
- **6 Animated Orbs**: Each with unique motion patterns (vertical, orbital, horizontal)
- **Mix-blend-hard-light**: Creates realistic color blending
- **GPU Accelerated**: Framer Motion transforms for 60fps performance

**Split-Screen Cards**:
- **Left (Trapped)**: Dark red gradient, pulsing warning glow, warning badge
- **Right (Free)**: Bright green gradient, animated success glow, success badge
- **Animations**: Pulsing icons, rotating effects, opacity transitions
- **No borders**: Clean design with shadow-only effects

**Text Hierarchy**:
- **Main Headline**: "Break Free from Endless"
- **Typing Animation**: Cycles through 4 trigger words
- **Subtitle**: "Scrolless helps you reclaim your time, focus, and ambition—one notification at a time."
- **Two CTA Buttons**:
  1. "See How It Works" (primary gradient button) - smooth scrolls to HowItWorks section
  2. "Join the Beta" (outline button) - smooth scrolls to CTA section

**Animation Timeline**:
1. Bubble background starts flowing immediately (desktop only)
2. Title section fades in with stagger (1s delay)
3. Subtitle fades in (1.3s delay)
4. CTAs scale in with bounce (1.6s delay)
5. Scroll indicator bounces infinitely (2s+ delay)

**Installation**:
```bash
npx shadcn@latest add https://www.shadcn.io/registry/bubble-background.json
```

**Customization Points**:
```tsx
// Enable mouse-following bubble
<BubbleBackground interactive={true} />

// Adjust spring physics
transition={{ stiffness: 100, damping: 20 }}

// Change colors (RGB format)
colors={{ first: '255,0,0', ... }}
```

**Mobile Optimizations**:
```typescript
const isMobile = useMediaQuery('(max-width: 768px)');
const prefersReducedMotion = useReducedMotion();

// Conditional rendering:
{!isMobile && !prefersReducedMotion && <BubbleBackground />}
{(isMobile || prefersReducedMotion) && <StaticGradient />}
```

**Future Enhancements**:
- [ ] Enable interactive mode for mouse-following bubble
- [ ] Add more bubble color variations
- [ ] Parallax effect on scroll

---

### Section 2: Problem
**File**: `src/components/sections/Problem.tsx`
**Height**: min-h-screen
**Type**: Client component with animations

#### Visual Theme
- **Color Scheme:** Dark background with red/orange accents
- **Background:** Gradient from dark to darker with static gradient overlays
- **Headline with FuzzyText:** "You're Not Weak. You're Trapped." (hover effect on "Trapped")
- **Psychology:** Conveys urgency and empathy without shame

#### Key Features

**1. Enhanced Statistics Display**
- **Premium StatCard Design:** Glass morphism with gradient-filled icon containers
- **Fixed Height:** All cards same height (`min-h-[400px]`) for consistency
- **Multi-layer Animations:** Icon spin, number slide, underline scale, label fade
- **Interactive Hover:** Lift, shine sweep, and bottom glow effects

**Updated StatCard Structure**:
```tsx
<StatCard
  number="210M"
  label="people worldwide addicted to social media"
  icon={<Users className="w-12 h-12" />}
  gradient="from-purple-500 to-pink-500"
/>
<StatCard
  number="200B"
  label="daily views on YouTube Shorts alone"
  icon={<Eye className="w-12 h-12" />}
  gradient="from-pink-500 to-orange-500"
/>
<StatCard
  number={inView ? <CountUp end={4.5} decimals={1} duration={2} preserveValue={true} redraw={false} /> : 0}
  label="hours lost per day to mindless scrolling"
  icon={<Clock className="w-12 h-12" />}
  gradient="from-orange-500 to-red-500"
  suffix=" hrs"
/>
```

**2. Dual Phone Mockup Comparison (Side-by-Side)**

**Layout:**
- Responsive: Vertical stack on mobile, horizontal on desktop
- Gap: `gap-8 md:gap-12`
- Max-width: `max-w-4xl`
- Entrance: Slides from left/right with stagger

**Phone 1: Endless Scrolling**
- **Content:** Social media feed mockup
- **Animation:** Vertical infinite scroll
- **Items:** 10 cards desktop, 5 on mobile
- **Duration:** 15s desktop, 10s mobile
- **Style:** Gray gradient background with social posts
- **Label:** "Endless Scrolling"
- **Optimization:** GPU accelerated, `will-change-transform`

```tsx
<motion.div
  animate={{ y: [0, isMobile ? -500 : -1000, 0] }}
  transition={{
    duration: isMobile ? 10 : 15,
    repeat: Infinity,
    ease: 'linear'
  }}
  className="space-y-4 gpu-accelerated will-change-transform"
>
```

**Phone 2: Compulsive Swiping** (New Feature)
- **Content:** Instagram/TikTok Stories style interface
- **Animation:** Horizontal infinite swipe
- **Cards:** 3 gradient cards (Pink→Purple, Blue→Cyan, Orange→Red) + 1 duplicate for seamless loop
- **Duration:** 16s desktop, 12s mobile
- **Features:**
  - Progress bars at top (3 bars showing active story)
  - Animated swipe indicator (pulsing right arrow)
  - Full-screen gradient backgrounds
  - Profile placeholder and text mockups
- **Label:** "Compulsive Swiping"
- **Optimization:** Linear easing, percentage-based transforms

```tsx
<motion.div
  animate={{ x: ['0%', '-100%', '-200%', '-300%'] }}
  transition={{
    duration: isMobile ? 12 : 16,
    repeat: Infinity,
    ease: 'linear',
    repeatType: 'loop'
  }}
  className="absolute inset-0 flex gpu-accelerated will-change-transform"
>
```

**Swipe Indicator Animation:**
```tsx
<motion.div
  animate={{ opacity: [0.5, 1, 0.5] }}
  transition={{ duration: 2, repeat: Infinity }}
  className="absolute bottom-8 right-8"
>
  <svg> {/* Right-pointing chevron */} </svg>
</motion.div>
```

**3. iPhone 15 Pro Mockups (Updated)**
- **Component:** Magic UI iPhone component (`@magicui/iphone`)
- **Location:** `src/components/ui/iphone.tsx`
- **Color:** Space Black titanium finish
- **Features:**
  - Authentic Dynamic Island
  - Black edges and frame (`#0a0a0a` to `#1a1a1a`)
  - Hardware buttons visible
  - SVG-based crisp rendering
  - Children content support

**Installation:**
```bash
npx shadcn@latest add @magicui/iphone
```

**PhoneMockup Wrapper:**
```tsx
// src/components/shared/PhoneMockup.tsx
<Iphone className="h-[600px] w-auto">
  {children}  {/* Content renders inside screen area */}
</Iphone>
```

**4. Scroll Navigation**
- **ChevronDown Icon:** Red color (`text-red-400`)
- **Animation:** Bouncing motion (`y: [0, 10, 0]`)
- **Action:** Smooth scrolls to Solution section
- **Position:** Bottom center

```tsx
<motion.div
  animate={{ opacity: 1, y: [0, 10, 0] }}
  transition={{
    opacity: { delay: 2, duration: 0.5 },
    y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
  }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
  onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })}
>
  <ChevronDown className="w-8 h-8 text-red-400" />
</motion.div>
```

**5. Performance Optimizations**

**Mobile-Specific:**
- Reduced scroll items: 10 → 5
- Reduced animation distance: -1000px → -500px
- Reduced scroll duration: 15s → 10s
- Reduced swipe items: 4 → 4 (already optimized)
- Reduced swipe duration: 16s → 12s

**GPU Acceleration:**
- Applied `gpu-accelerated` class to all animations
- Uses `will-change-transform` for browser optimization
- Transform-based animations (not position)
- Linear easing for constant performance

**Component Memoization:**
- PhoneMockup: `memo()` wrapper
- StatCard: `memo()` wrapper
- Prevents unnecessary re-renders

**CountUp Optimization:**
- `preserveValue={true}` - No recalculation on re-render
- `redraw={false}` - No redraw unless value changes

#### Data Structure

```tsx
const stats = [
  {
    number: "210M",
    label: "people worldwide addicted to social media",
    icon: <Users />,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    number: "200B",
    label: "daily views on YouTube Shorts alone",
    icon: <Eye />,
    gradient: "from-pink-500 to-orange-500"
  },
  {
    number: <CountUp end={4.5} decimals={1} duration={2} preserveValue={true} redraw={false} />,
    label: "hours lost per day to mindless scrolling",
    icon: <Clock />,
    gradient: "from-orange-500 to-red-500",
    suffix: " hrs"
  }
];
```

#### Performance Metrics

| Metric | Desktop | Mobile |
|--------|---------|--------|
| Frame Rate | Smooth 60fps | 45-60fps |
| Scroll Items | 10 | 5 (optimized) |
| Swipe Duration | 16s | 12s (faster) |
| GPU Usage | Moderate | Light |
| Memory | ~15MB | ~8MB |

**Future Enhancements**:
- [ ] Real-time stat updates from API
- [ ] Add more swipe card variations
- [ ] Implement pause on hover for mockups
- [ ] Add touch/drag interaction for manual swiping
- [ ] Connect to backend for actual usage data

---

### Section 3: Solution
**File**: `src/components/sections/Solution.tsx`
**Height**: min-h-screen
**Type**: Client component

#### Visual Theme
- **Color Scheme:** Dark background with sparkles effect
- **Background:** Black with SparklesCore particle animation (30 particles, reduced for performance)
- **Typography**:
  - "OUR SOLUTION" with animated gradient underlines
  - "Your Personal Activation Engine"
  - ColourfulText effect on "Scrolless"
- **Psychology:** Conveys innovation, technology, transformation

**Key Features**:
- **SparklesCore background**: Lightweight particle effect (30 particles)
- **Two-column layout**: Phone mockup (left) + explanation text (right)
- **ColourfulText animation**: "Scrolless" with color-changing effect
- **3 explanation boxes**: The Problem, Our Solution, How It Works Mini
- **Key benefits section**: 3 cards with hover effects
  1. Zero Friction Starting
  2. AI-Powered Psychology
  3. Real Achievement, Real Dopamine
- **ChevronDown navigation** to How It Works section

**Layout Strategy**:
```tsx
// Two-column layout: Phone + Text
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  {/* Left: Phone mockup with screenshot */}
  <PhoneMockup size="large">
    <img src="/screenshots/dump-it-out.png" />
  </PhoneMockup>

  {/* Right: Explanation sections */}
  <div className="space-y-8">
    {/* The Problem, Our Solution, How It Works Mini */}
  </div>
</div>
```

**Phone Screen Content**:
Shows actual app screenshot: `/public/screenshots/dump-it-out.png`
- "Dump It Out" interface
- Text input area
- AI processing visualization
- Clean, modern UI design

**Planned: Real Prototype Video Integration**

To replace the static mockup with an actual prototype video, follow these steps:

**1. Video Preparation:**
```bash
# Recommended specifications:
- Format: MP4 (H.264 codec) + WebM (VP9) for browser compatibility
- Resolution: 1080x2340 (vertical phone aspect ratio) or your prototype's native resolution
- File size: <50MB (ideally 10-20MB after optimization)
- Duration: 10-30 seconds looping demo
- Frame rate: 30fps
```

**2. Video Optimization (Optional but Recommended):**
```bash
# Using ffmpeg to optimize video:

# For MP4 (H.264 - best compatibility):
ffmpeg -i prototype-original.mov -vcodec h264 -crf 23 -preset slow -vf "scale=1080:2340" -an prototype-demo.mp4

# For WebM (VP9 - smaller file size):
ffmpeg -i prototype-original.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -vf "scale=1080:2340" -an prototype-demo.webm

# Flags explained:
# -crf 23: Constant Rate Factor (lower = better quality, 18-28 recommended)
# -preset slow: Better compression (slow/medium/fast)
# -vf "scale=1080:2340": Resize to phone dimensions
# -an: Remove audio (not needed for silent demos)
```

**3. File Placement:**
```bash
# Place optimized video in public folder:
/public/videos/prototype-demo.mp4
/public/videos/prototype-demo.webm  # Optional fallback
```

**4. Code Integration:**

Replace the current static phone mockup content (lines 82-134 in `Solution.tsx`) with:

```tsx
<PhoneMockup size="large">
  <div className="h-full w-full overflow-hidden bg-black relative">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="h-full w-full object-cover"
      poster="/videos/prototype-thumbnail.jpg"  // Optional: first frame preview
    >
      <source src="/videos/prototype-demo.webm" type="video/webm" />
      <source src="/videos/prototype-demo.mp4" type="video/mp4" />
      {/* Fallback for browsers that don't support video */}
      <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-6">
        <p className="text-gray-600 text-center">
          Video not supported in your browser. Please use a modern browser.
        </p>
      </div>
    </video>
  </div>
</PhoneMockup>
```

**5. Performance Optimization:**

Add lazy loading for better initial page load:

```tsx
'use client';
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Solution() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      setShouldLoadVideo(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <PhoneMockup size="large">
        {shouldLoadVideo ? (
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src="/videos/prototype-demo.webm" type="video/webm" />
            <source src="/videos/prototype-demo.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="h-full bg-gray-200 animate-pulse" />
        )}
      </PhoneMockup>
    </div>
  );
}
```

**6. Additional Video Options:**

```tsx
// Auto-pause when not in viewport (save resources):
const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {
  if (videoRef.current) {
    if (inView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }
}, [inView]);

<video ref={videoRef} loop muted playsInline>
  <source src="/videos/prototype-demo.mp4" type="video/mp4" />
</video>
```

**7. Deployment Checklist:**

- [ ] Video file is <50MB (Vercel file size limit)
- [ ] Video is in `/public/videos/` directory
- [ ] Video has `autoPlay`, `loop`, `muted`, and `playsInline` attributes
- [ ] Multiple formats provided (MP4 + WebM) for compatibility
- [ ] Fallback content provided for unsupported browsers
- [ ] Video loads lazily (only when section is in view)
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Verify video loops seamlessly

**8. Alternative: If Video File is Too Large**

Consider using external hosting:

```tsx
// Option A: Vimeo embed (professional, no branding on paid plans)
<iframe
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID?autoplay=1&loop=1&muted=1&background=1"
  className="h-full w-full"
  allow="autoplay; fullscreen"
/>

// Option B: YouTube embed (free, shows branding)
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&loop=1&muted=1&controls=0&showinfo=0&playlist=YOUR_VIDEO_ID"
  className="h-full w-full"
  allow="autoplay"
/>

// Option C: Cloudinary (automatic optimization)
// 1. Upload to Cloudinary
// 2. Use video transformation URL
<video autoPlay loop muted playsInline>
  <source src="https://res.cloudinary.com/YOUR_CLOUD/video/upload/q_auto/prototype-demo.mp4" />
</video>
```

**Performance Impact on Vercel:**
- ✅ Videos in `/public/` are served via Vercel Edge Network (CDN)
- ✅ Fast global delivery with automatic caching
- ✅ No additional configuration needed
- ✅ Free on all Vercel plans
- ⚠️ 50MB file limit per deployment
- ⚠️ Large videos may slow initial page load (use lazy loading)

**Scroll Navigation:**
```tsx
<ChevronDown className="w-8 h-8 text-emerald-400" />
```

**Future Enhancements**:
- [x] Replace static mockup with real prototype video (documented)
- [ ] Interactive phone screen (hover over features to change content)
- [ ] Connecting lines from cards to phone
- [ ] 3D tilt effect on phone

---

### Section 4: How It Works
**File**: `src/components/sections/HowItWorks.tsx`
**Height**: min-h-screen
**Type**: Client component with interactive step navigation

**Key Features**:
- **3-step process**: DUMP → DECONSTRUCT → LAUNCH
- **White background**: Contrast with other sections
- **Interactive step navigator**: Click buttons to jump to steps
- **Manual navigation**: Prev/Next buttons with progress bar
- **Phone mockup per step**: Shows actual app screenshots
- **Animations**: Slide transitions between steps (AnimatePresence)

**Step Structure**:
```tsx
const steps = [
  {
    id: 1,
    label: 'DUMP',
    title: "Tell us what's overwhelming you",
    emoji: '💭',
    description: "...",
    examples: ["Write my final essay", "Clean my entire room", ...],
    screenshot: "/screenshots/dump-it-out.png"
  },
  {
    id: 2,
    label: 'DECONSTRUCT',
    title: "AI finds your actual first step",
    emoji: '🔬',
    description: "...",
    criteria: ["Takes 2-15 minutes", "Zero prep needed", ...],
    screenshot: "/screenshots/first-step.png"
  },
  {
    id: 3,
    label: 'LAUNCH',
    title: "Take action immediately",
    emoji: '🚀',
    description: "...",
    features: ["One-tap launch", "Progress tracking", ...],
    screenshot: "/screenshots/completion.png"
  }
];
```

**Phone Content by Step**:
1. **DUMP**: Input interface screenshot (`dump-it-out.png`)
2. **DECONSTRUCT**: AI breakdown UI (`first-step.png`)
3. **LAUNCH**: Action and completion screens (`completion.png`, `achievement.png`, `cta-action.png`)

**Future Enhancements**:
- [ ] Keyboard arrow key navigation
- [ ] Touch/swipe support on mobile
- [ ] More elaborate animations per step
- [ ] Sound effects on transitions

---

### Section 5: Mission
**File**: `src/components/sections/Mission.tsx`
**Height**: min-h-screen
**Type**: Client component with animated background

**Key Features**:
- **WavyBackground component**: Animated wave effect with 5 colors
- **Animated badge**: "OUR MISSION" with pulse indicator
- **Two-part headline**:
  - "This Isn't Just an App."
  - "It's a Movement." (uses GradientText with infinite scroll animation)
- **3 description paragraphs**: Traditional apps vs. our approach
- **Vision cards**: 3 cards with hover effects
  1. Reclaim Your Time (⏰)
  2. Achieve Your Goals (🎯)
  3. Transform Your Life (✨)

**WavyBackground Configuration**:
```tsx
<WavyBackground
  colors={['#8B5CF6', '#EC4899', '#F97316', '#A78BFA', '#DB2777']}
  waveWidth={80}
  backgroundFill="#0a0a0a"
  blur={12}
  speed="slow"
  waveOpacity={0.3}
>
  {/* Content */}
</WavyBackground>
```

**Card Design**:
- Glass morphism effect (white/5% background with backdrop blur)
- Gradient text on titles (purple to pink)
- Hover effects: scale, lift, glow
- Corner gradient accents
- Emoji icons

**Future Enhancements**:
- [ ] Add testimonial cards
- [ ] Include team member photos
- [ ] Add video about the movement

---

### Section 6: CTA / Waitlist
**File**: `src/components/sections/CTA.tsx`
**Height**: min-h-screen
**Type**: Client component with form submission

**Key Features**:
- **Background**: Lightweight gradient with animated pulse overlay (replaced Aurora for performance)
- **Two-column layout** (desktop): Form content (left) + Phone mockup (right)
- **Badge**: "Beta Launching Q4 2025" with pulse animation
- **Headline**: "Ready to Reclaim Your Life?"
- **Subtext**: "Join 100+ HK university students in our beta program"
- **Email form** with success state and confetti
- **Trust indicators**: 3 icons
  1. 🎉 Free beta access
  2. 🔒 Privacy-first design
  3. 🤖 AI-powered insights
- **Phone mockup**: Shows CTA action screenshot (hidden on mobile)

**Form Handling**:
```tsx
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  setSubmitted(true);

  // Confetti celebration
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Auto-reset after 5 seconds
  setTimeout(() => {
    setSubmitted(false);
    setEmail('');
  }, 5000);
};
```

**Form Validation**:
- Email type input (built-in browser validation)
- Required field
- Success state with AnimatePresence transition
- Auto-reset to allow multiple submissions

**Performance Notes**:
- Aurora background component was replaced with static gradient + pulse animation
- Significantly improved mobile performance
- Phone mockup hidden on mobile for faster load

**Future Enhancements**:
- [ ] Backend integration (actual email collection)
- [ ] Custom form validation with error states
- [ ] Social proof counter (number of signups)
- [ ] Mailchimp/ConvertKit integration

---

### Section 7: Footer
**File**: `src/components/sections/Footer.tsx`
**Height**: Auto
**Type**: Client component

**Key Features**:
- **Two-section layout**: Main content + bottom bar
- **Brand section** (left):
  - Logo with gradient text
  - Tagline: "Breaking free from endless scrolling..."
  - Newsletter signup (input + button)
  - Social links: Instagram, LinkedIn, GitHub, Email
- **Link columns** (right):
  1. **Product**: Problem, Solution, How It Works, Mission
  2. **Company**: About, Team, Join Beta, Contact
  3. **Legal**: Privacy Policy, Terms of Service, Cookie Policy
- **Bottom bar**:
  - Copyright: "© 2025 ReaLife. Made with 💜 for ZPIRE Jumpstarter"
  - "Back to top" button with smooth scroll

**Social Link Styling**:
- Glass effect background (white/10%)
- Backdrop blur
- Hover: Border color change, scale effect
- Icons from lucide-react

**Grid Layout**:
- Desktop: 5 columns (brand) + 7 columns (links in 3 columns)
- Mobile: Stacked single column

**Future Enhancements**:
- [ ] Newsletter signup backend integration
- [ ] Language selector
- [ ] Create actual Privacy Policy and Terms pages
- [ ] Add sitemap
- [ ] Add RSS feed

---

## Design System

### Color Palette

Defined in `src/app/globals.css` and `tailwind.config.ts`:

```css
/* Primary Gradient */
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);

/* Base Colors */
--purple-deep: #667eea;
--purple-mid: #764ba2;
--pink-bright: #f093fb;
--orange-accent: #f6ad55;

/* Backgrounds */
--bg-dark: #0a0a1a;
--bg-dark-lighter: #1a1a2e;

/* Text */
--text-primary: #ffffff;
--text-secondary: #a0aec0;
```

**Usage in Tailwind**:
```tsx
<div className="bg-dark text-white">
<div className="bg-dark-lighter border-white/10">
<h1 className="gradient-text">  {/* Uses .gradient-text utility */}
```

### Typography

**Font Family**: Inter (from Google Fonts)

**Hierarchy**:
```tsx
// Headings
<h1 className="text-5xl md:text-7xl font-bold">      // Hero headline
<h2 className="text-5xl md:text-6xl font-bold">      // Section headlines
<h3 className="text-3xl md:text-4xl font-bold">      // Subsection headlines

// Body
<p className="text-lg md:text-xl">                   // Large body text
<p className="text-base">                             // Regular body text
<p className="text-sm text-gray-400">                 // Small secondary text
```

### Spacing System

Based on Tailwind's default spacing scale:

```tsx
// Section padding
py-24        // 96px vertical padding for sections

// Component padding
p-8          // 32px for cards
p-6          // 24px for smaller cards
p-4          // 16px for tight spacing

// Gaps
gap-8        // 32px between grid items
gap-4        // 16px for tighter grids
```

### Animation Timing

```css
/* Duration */
--duration-fast: 0.3s;
--duration-normal: 0.6s;
--duration-slow: 1s;

/* Easing */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**Common Framer Motion Transitions**:
```tsx
// Fade in from bottom
transition={{ duration: 0.8, ease: 'easeOut' }}

// Bounce scale in
transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}

// Smooth slide
transition={{ duration: 0.5 }}
```

### Advanced UI Effects (shadcn.io registry components)

The project uses several advanced effect components from the shadcn.io registry:

#### 1. BubbleBackground (`ui/shadcn-io/bubble-background`)
**Purpose**: Animated liquid gradient background with SVG metaball effect

**Props**:
- `interactive?: boolean` - Enable mouse-following bubble
- `transition?: Spring` - Spring physics configuration
- `colors?: { first, second, third, fourth, fifth, sixth }` - RGB color strings

**Features**:
- 6 animated bubble layers with different motion patterns
- SVG gooey filter effect (Gaussian blur + color matrix)
- Blend mode: hard-light for realistic color mixing
- GPU accelerated transforms
- useMotionValue + useSpring for smooth mouse tracking

**Usage**: Hero section background (desktop only)

#### 2. TypingText (`ui/shadcn-io/typing-text`)
**Purpose**: Typewriter effect with character-by-character reveal

**Props**:
- `text: string | string[]` - Text to type (array cycles through)
- `typingSpeed?: number` - Milliseconds per character (default 100)
- `deletingSpeed?: number` - Backspace speed (default 50)
- `loop?: boolean` - Continuous cycle (default true)
- `showCursor?: boolean` - Blinking cursor (default true)
- `cursorCharacter?: string | ReactNode` - Custom cursor (default "|")
- `textColors?: string[]` - Different color per text
- `variableSpeed?: { min, max }` - Random delay range
- `startOnVisible?: boolean` - Wait for viewport (default false)
- `reverseMode?: boolean` - Type backwards (default false)

**Features**:
- GSAP-powered cursor blink
- Variable typing speed for realism
- Intersection observer support
- Color cycling
- Respects prefers-reduced-motion

**Usage**: Hero section - cycles through "Scrolling", "Distractions", "Procrastination", "Social Media"

#### 3. SparklesCore (`ui/shadcn-io/sparkles`)
**Purpose**: Particle effect using tsparticles

**Props**:
- `id?: string` - Unique particle system ID
- `background?: string` - Background color
- `minSize?: number` - Minimum particle size (default 0.4)
- `maxSize?: number` - Maximum particle size (default 1)
- `speed?: number` - Movement speed (default 1)
- `particleColor?: string` - Particle color (default #FFF)
- `particleDensity?: number` - Particles per area (default 100)

**Features**:
- Circle-shaped particles
- Opacity animation (0.1-1)
- Click: Push 4 new particles
- FPS limit: 120
- Slim build for performance
- Fade-in on load

**Usage**: Solution section background (30 particles for performance)

#### 4. FuzzyText (`ui/shadcn-io/fuzzy-text`)
**Purpose**: Glitch/fuzzy text effect rendered on canvas

**Props**:
- `children: ReactNode` - Text content
- `fontSize?: number | string` - Font size
- `fontWeight?: string | number` - Font weight
- `fontFamily?: string` - Font family
- `color?: string` - Text color
- `enableHover?: boolean` - Enable hover effect (default true)
- `baseIntensity?: number` - Base displacement (default 3)
- `hoverIntensity?: number` - Hover displacement (default 15)

**Features**:
- Canvas-based rendering with scanline effect
- Horizontal displacement per line
- Hover intensity boost
- Touch support
- requestAnimationFrame loop
- Waits for web fonts to load

**Usage**: Problem section - "Trapped" word with hover effect

#### 5. ColourfulText (`ui/shadcn-io/colourful-text`)
**Purpose**: Color-morphing text effect

**Props**:
- `text: string` - Text content
- `interval?: number` - Color change interval (ms, default 3000)
- `colors?: string[]` - Color palette (default 10-color rainbow)
- `animationDuration?: number` - Morph duration (default 2)
- `staggerDelay?: number` - Delay between chars (default 0.1)

**Features**:
- Character-by-character animation
- Staggered delays create wave effect
- Color shuffling every interval
- Multi-property animation: color, y-position, scale, blur, opacity

**Usage**: Solution section - "Scrolless" brand name

#### 6. GradientText (`ui/shadcn-io/gradient-text`)
**Purpose**: Animated gradient text with optional glow

**Props**:
- `text: string` - Text content
- `gradient?: string` - CSS gradient (default blue→purple→pink)
- `neon?: boolean` - Duplicate with blur for glow (default false)
- `transition?: Transition` - Motion transition config

**Features**:
- Background-clip text technique
- 200% width gradient scrolls horizontally
- Infinite animation (3s default)
- Neon mode: Blurred duplicate with mix-blend-plus-lighter

**Usage**: Mission section - "It's a Movement"

#### 7. WavyBackground (`ui/shadcn-io/wavy-background`)
**Purpose**: Animated wave background with Simplex noise

**Props**:
- `children?: ReactNode` - Content overlay
- `colors?: string[]` - Wave colors (default cyan/indigo/fuchsia)
- `waveWidth?: number` - Wave width (default 50)
- `backgroundFill?: string` - Background color (default white)
- `blur?: number` - Blur amount (default 10)
- `speed?: 'slow' | 'fast'` - Animation speed (default slow)
- `waveOpacity?: number` - Wave opacity (default 0.5)

**Features**:
- 5 canvas-rendered wave layers
- Simplex noise for smooth curves
- Different phase offsets per wave
- Safari-specific filter handling
- Responsive canvas sizing
- requestAnimationFrame loop

**Usage**: Mission section background

### Custom CSS Utilities

Defined in `src/app/globals.css`:

```css
/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glass morphism */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Grid pattern */
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
}
```

---

## Animation Guidelines

### Scroll-Triggered Animations

Using `react-intersection-observer`:

```tsx
import { useInView } from 'react-intersection-observer';

const [ref, inView] = useInView({
  triggerOnce: true,   // Animate only once
  threshold: 0.3       // Trigger when 30% visible
});

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

### Common Animation Patterns

#### 1. Fade In from Bottom
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
```

#### 2. Scale In with Bounce
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
>
```

#### 3. Slide In from Side
```tsx
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
```

#### 4. Staggered Children
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={{
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
  ))}
</motion.div>
```

#### 5. Infinite Loop Animations
```tsx
<motion.div
  animate={{
    y: [0, -2000, 0],
    // or rotate: [0, 360]
    // or scale: [1, 1.1, 1]
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
    ease: 'linear'
  }}
>
```

### Performance Optimization

1. **Use `viewport={{ once: true }}`** to prevent re-triggering
2. **Avoid animating width/height** - use `scale` instead
3. **Use `transform` and `opacity`** for GPU acceleration
4. **Lazy load heavy components**:
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  { ssr: false }
);
```

---

## Development Workflow

### Running the Project

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `PhoneMockup.tsx`)
- **Utilities**: camelCase (e.g., `animations.ts`)
- **CSS files**: kebab-case (e.g., `globals.css`)

### Component Structure Template

```tsx
'use client';  // If using hooks or client-side features

import { useState } from 'react';
import { motion } from 'framer-motion';
// ... other imports

interface ComponentNameProps {
  // Props with types
}

export default function ComponentName({ props }: ComponentNameProps) {
  // State and hooks

  // Event handlers

  // Render
  return (
    <section className="...">
      {/* Content */}
    </section>
  );
}
```

### Git Workflow

```bash
# Feature development
git checkout -b feature/section-name
# ... make changes
git add .
git commit -m "feat: add section-name component"
git push origin feature/section-name

# Bug fixes
git checkout -b fix/issue-description
git commit -m "fix: resolve issue-description"

# Documentation
git commit -m "docs: update development guide"
```

---

## Future Enhancements

### Phase 1: Content Enhancement (Week 1)
- [ ] Replace emoji placeholders with actual images/videos
- [ ] Add real prototype video to Solution section phone mockup (see Section 3 documentation)
- [ ] Add real video backgrounds to Hero and Mission sections
- [ ] Create custom illustrations for feature cards
- [ ] Add favicon and meta images

### Phase 2: Interaction Improvements (Week 2)
- [ ] Implement interactive phone mockup (hover to change content)
- [ ] Add keyboard navigation to How It Works section
- [ ] Create mobile hamburger menu
- [ ] Add touch/swipe gestures for mobile

### Phase 3: Backend Integration (Week 3)
- [ ] Set up backend API for email collection
- [ ] Implement form validation and error handling
- [ ] Add real-time waitlist counter
- [ ] Create admin dashboard for email management

### Phase 4: Advanced Animations (Week 4)
- [ ] GSAP scroll-triggered animations
- [ ] Mouse parallax effects on hero
- [ ] Custom particle system background
- [ ] Loading transitions between sections

### Phase 5: Optimization (Week 5)
- [ ] Image optimization with next/image
- [ ] Code splitting for heavy components
- [ ] Preload critical resources
- [ ] Add service worker for offline support

### Phase 6: Analytics & Testing (Week 6)
- [ ] Integrate Google Analytics / Plausible
- [ ] Add event tracking on CTAs
- [ ] A/B test different headlines
- [ ] User session recording (Hotjar)

### Phase 7: Accessibility & SEO (Week 7)
- [ ] Add ARIA labels to all interactive elements
- [ ] Keyboard-only navigation testing
- [ ] Screen reader optimization
- [ ] Structured data markup
- [ ] Open Graph tags

### Phase 8: Content Management (Week 8)
- [ ] Integrate with CMS (Sanity/Contentful)
- [ ] Make stats editable from CMS
- [ ] Dynamic testimonials section
- [ ] Blog integration

---

## Modular Development Guidelines

### Adding New Sections

1. **Create section component**:
```bash
src/components/sections/NewSection.tsx
```

2. **Follow section template**:
```tsx
'use client';

import { motion } from 'framer-motion';

export default function NewSection() {
  return (
    <section id="new-section" className="min-h-screen py-24">
      {/* Content */}
    </section>
  );
}
```

3. **Import in main page**:
```tsx
// src/app/page.tsx
import NewSection from '@/components/sections/NewSection';

export default function Home() {
  return (
    <main>
      {/* ... existing sections */}
      <NewSection />
    </main>
  );
}
```

4. **Update navigation**:
```tsx
// src/components/sections/Navigation.tsx
<a href="#new-section">New Section</a>
```

### Creating Reusable Components

1. **Identify common patterns** across sections
2. **Extract to shared component**:
```bash
src/components/shared/NewComponent.tsx
```

3. **Define clear interface**:
```tsx
interface NewComponentProps {
  title: string;
  description: string;
  // ... other props
}
```

4. **Document usage** in this file
5. **Create Storybook story** (if using Storybook)

### Extending Animation Library

1. **Add to animations file**:
```tsx
// src/lib/animations.ts
export const newAnimationVariant = {
  hidden: { /* initial state */ },
  visible: { /* animated state */ }
};
```

2. **Document in Animation Guidelines** section above
3. **Create example usage**

### Managing Design Tokens

All design tokens should be defined in:
- **Colors**: `tailwind.config.ts` and `globals.css`
- **Spacing**: Use Tailwind's default scale
- **Typography**: `tailwind.config.ts` (extend theme)
- **Animations**: `globals.css` and `src/lib/animations.ts`

**Never hardcode values** - always use design tokens.

---

## Troubleshooting

### Common Issues

**Issue**: Components not animating on scroll
**Solution**: Ensure `viewport={{ once: true }}` is set and `useInView` is configured correctly

**Issue**: Gradient text not displaying
**Solution**: Check that `.gradient-text` utility is defined in `globals.css`

**Issue**: Icons not showing
**Solution**: Verify `lucide-react` is installed and icons are imported correctly

**Issue**: Type errors with Framer Motion
**Solution**: Ensure `motion` components are used instead of regular HTML elements

### Getting Help

1. Check this documentation
2. Review PRD at `docs/reallife-landing-page-prd.md`
3. Check official docs:
   - [Next.js Docs](https://nextjs.org/docs)
   - [Framer Motion Docs](https://www.framer.com/motion/)
   - [Tailwind CSS Docs](https://tailwindcss.com/docs)
   - [shadcn/ui Docs](https://ui.shadcn.com)

---

## Changelog

### Version 1.2.0 (2025-01-12) - Comprehensive Documentation Update
- 📚 **Complete codebase documentation**: All components, props, and features documented
- 🎨 **Advanced UI effects documented**: All 7 shadcn.io registry components (BubbleBackground, TypingText, SparklesCore, FuzzyText, ColourfulText, GradientText, WavyBackground)
- 📱 **Mobile optimizations**: Hero section static gradient fallback, reduced animations
- ⚡ **Performance enhancements**: CTA section Aurora background replaced with lightweight gradient
- 🖼️ **Screenshot integration**: 5 app screenshots added to HowItWorks and CTA sections
- 🔄 **Actual implementation sync**: Documentation now reflects actual codebase structure
- 📦 **Updated dependencies**: Complete dependency list with all tsparticles, motion, and utility packages
- ✨ **Enhanced installation guide**: All shadcn registry components installation commands
- 🎯 **Accurate section descriptions**: All 8 sections (including Navigation) with actual features and props

### Version 1.1.0 (2025-01-04) - Hero Section Enhancement
- ✨ Added **Bubble Background** component with metaball liquid effects
- 🎨 Enhanced Hero section with TypingText animation
- 💫 Implemented SVG filters for realistic color blending
- 🚀 Updated to Next.js 16.0.1 with Turbopack
- 🔒 Fixed security vulnerabilities
- 📦 Added shadcn registry component support
- ✅ All builds passing successfully

### Version 1.0.0 (2025-01-04) - Initial Release
- ✅ Initial landing page implementation
- ✅ All 8 sections completed (Navigation, Hero, Problem, Solution, HowItWorks, Mission, CTA, Footer)
- ✅ Responsive design (desktop-first with mobile optimizations)
- ✅ Animation system implemented (Framer Motion + GSAP)
- ✅ Shared component library created (StatCard, FeatureCard, PhoneMockup)
- ✅ Design system established (Purple/Pink gradient theme)
- ✅ iPhone mockup component integration
- ✅ Accessibility features (reduced motion, keyboard navigation)

---

**Document Maintained By**: Development Team
**Last Review**: 2025-01-12 (Comprehensive Codebase Documentation Update)
**Next Review**: Before deployment or major feature additions
