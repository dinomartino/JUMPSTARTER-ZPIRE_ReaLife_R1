# RealLife Landing Page - Development Documentation

**Project**: RealLife/Scrollless Landing Page for ZPIRE Jumpstarter Competition
**Tech Stack**: Next.js 16 + React 18 + TypeScript + Tailwind CSS + Framer Motion
**Last Updated**: 2025-01-04 (Updated with Bubble Background)

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

### Installation Commands

```bash
# Initialize project
npx create-next-app@latest reallife-landing --typescript --tailwind --app

# Install dependencies
npm install framer-motion gsap react-intersection-observer lucide-react react-countup canvas-confetti

# Initialize shadcn/ui
npx shadcn@latest init --yes --defaults

# Add shadcn UI components
npx shadcn@latest add button card input --yes

# Add shadcn registry components (backgrounds, effects, etc.)
npx shadcn@latest add https://www.shadcn.io/registry/bubble-background.json
```

### Adding shadcn Registry Components

shadcn.io provides additional components beyond the standard UI library:

**Available Registries**:
- Backgrounds: `bubble-background`, `gradient-background`, etc.
- Effects: Various visual effects and animations
- Layouts: Advanced layout components

**How to Add**:
```bash
# Generic format
npx shadcn@latest add https://www.shadcn.io/registry/[component-name].json

# Example: Bubble background
npx shadcn@latest add https://www.shadcn.io/registry/bubble-background.json
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
**Height**: 100vh

**Key Features**:
- **Bubble Background Animation** - Liquid-like metaball effect with SVG filters
- Split-screen comparison (trapped vs. free) with dramatic styling
- Center overlay with gradient headline + CTAs
- Scroll indicator at bottom

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

**Animation Timeline**:
1. Bubble background starts flowing immediately
2. Split screens slide in from sides (0.5-1.5s)
3. Headline fades up with gradient pulse (1-2s)
4. CTAs pop in with scale effect (1.6-2.2s)
5. Scroll indicator pulses (2s+)

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

**Future Enhancements**:
- [ ] Replace emojis with actual video loops or images
- [ ] Add parallax mouse tracking on headline
- [ ] Enable interactive mode for mouse-following bubble
- [ ] Add more bubble color variations

---

### Section 2: Problem
**File**: `src/components/sections/Problem.tsx`
**Height**: min-100vh

#### Visual Theme (Updated Nov 2024)
- **Color Scheme:** Red/Orange warning theme
- **Background:** `bg-gradient-to-b from-red-50/30 via-orange-50/20 to-red-50/30`
- **Glow Effects:** Red and orange pulsing blurs
- **Decorative Icon:** Warning triangle (top-right, 5% opacity)
- **Psychology:** Conveys danger, urgency, caution

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
**Height**: min-120vh

#### Visual Theme (Updated Nov 2024)
- **Color Scheme:** Emerald/Green success theme
- **Background:** `bg-gradient-to-b from-emerald-50/30 via-green-50/20 to-emerald-50/30`
- **Glow Effects:** Emerald and green pulsing blurs
- **Decorative Icon:** Checkmark circle (top-left, 5% opacity)
- **Psychology:** Conveys success, growth, healing

**Key Features**:
- Large centered phone mockup showing app interface
- 4 feature cards positioned around phone
- 3 key differentiator cards at bottom
- **ChevronDown navigation** to How It Works section (emerald color)

**Layout Strategy**:
```tsx
// Feature cards positioned around phone on desktop
<div className="grid grid-cols-2 gap-x-[600px]">
  {/* Creates space for centered phone */}
</div>
```

**Phone Screen Content**:
Shows "My Goals" interface with:
- 3 goal items with progress bars
- Token counter
- Time saved stats

**Scroll Navigation:**
```tsx
<ChevronDown className="w-8 h-8 text-emerald-400" />
```

**Future Enhancements**:
- [ ] Interactive phone screen (hover over features to change content)
- [ ] Connecting lines from cards to phone
- [ ] 3D tilt effect on phone

---

### Section 4: How It Works
**File**: `src/components/sections/HowItWorks.tsx`
**Height**: min-100vh

**Key Features**:
- 4-step interactive demo
- Auto-cycling every 5 seconds
- Manual navigation (prev/next buttons)
- Progress bar indicator

**Step Structure**:
```tsx
const steps = [
  {
    id: 1,
    label: 'Detect',
    title: "You're scrolling on TikTok",
    description: "...",
    details: ["...", "...", "..."],
    icon: Smartphone
  },
  // ... 3 more steps
];
```

**Phone Content by Step**:
1. **Detect**: Infinite scroll with timer
2. **Notify**: Notification card sliding down
3. **Break Down**: AI task breakdown animation
4. **Complete**: Token reward with confetti

**Future Enhancements**:
- [ ] Keyboard arrow key navigation
- [ ] Touch/swipe support on mobile
- [ ] More elaborate animations per step
- [ ] Sound effects on transitions

---

### Section 5: Mission
**File**: `src/components/sections/Mission.tsx`
**Height**: 80vh

**Key Features**:
- Gradient background with animated orbs
- Mission statement text
- 3 stat tickers (hours reclaimed, goals achieved, lives changed)

**Animation Pattern**:
```tsx
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3]
  }}
  transition={{ duration: 8, repeat: Infinity }}
  className="bg-purple-500/30 rounded-full blur-3xl"
/>
```

**Future Enhancements**:
- [ ] Replace gradient with actual video background
- [ ] Real-time stats from backend
- [ ] Testimonial carousel

---

### Section 6: CTA / Waitlist
**File**: `src/components/sections/CTA.tsx`
**Height**: 100vh

**Key Features**:
- Email input form
- Confetti celebration on submit
- Trust indicators (privacy, student-built, AI-powered)
- Alternative CTAs (Watch Pitch, Learn About ZPIRE)

**Form Handling**:
```tsx
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  setSubmitted(true);

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
};
```

**Future Enhancements**:
- [ ] Actual backend integration (email collection)
- [ ] Form validation with error states
- [ ] Social proof (number of signups)
- [ ] Email validation

---

### Section 7: Footer
**File**: `src/components/sections/Footer.tsx`
**Height**: Auto

**Key Features**:
- Brand section with social links
- Quick links to sections
- Resources links
- Copyright notice

**Future Enhancements**:
- [ ] Newsletter signup
- [ ] Language selector
- [ ] Legal pages (Privacy, Terms)

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

### Version 1.1.0 (2025-01-04) - Hero Section Enhancement
- ✨ Added **Bubble Background** component with metaball liquid effects
- 🎨 Enhanced Hero section with dramatic split-screen styling
- 💫 Implemented SVG filters for realistic color blending
- 🚀 Updated to Next.js 16.0.1 with Turbopack
- 🔒 Fixed security vulnerabilities
- 📦 Added shadcn registry component support
- 🎯 Removed borders from split-screen cards for cleaner design
- ✅ All builds passing successfully

### Version 1.0.0 (2025-01-04)
- ✅ Initial landing page implementation
- ✅ All 7 sections completed
- ✅ Responsive design (desktop-first)
- ✅ Animation system implemented
- ✅ Shared component library created
- ✅ Design system established

---

**Document Maintained By**: Development Team
**Last Review**: 2025-01-04 (Hero Section Update)
**Next Review**: Before Phase 2 Implementation
