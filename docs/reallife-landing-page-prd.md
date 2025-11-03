# RealLife Landing Page - Product Requirements Document (PRD)

**Project**: RealLife/Scrollless Landing Page for ZPIRE Jumpstarter Competition  
**Team**: Chan Chun Ho Spencer, Ng Tsz Hin Ryan, Ho Sze Yuen Tino  
**Deadline**: November 12, 2025  
**Purpose**: Vibe Coding Challenge submission (25% bonus scoring)  
**Tech Stack**: React + Next.js + TypeScript  

---

## Executive Summary

Build a desktop-first, visually stunning landing page that showcases RealLife's mission to combat social media addiction through emotional storytelling and impressive technical execution. Priority is visual wow-factor with smooth animations throughout while maintaining clean, performant code.

**Key Success Criteria**:
- Judges are immediately impressed by visual design and animations
- Problem → Solution narrative flows naturally through scroll experience
- Technical execution demonstrates advanced React/Next.js capabilities
- Mobile responsive (secondary priority)

---

## Tech Stack & Tools

### Core Technologies
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (TSX)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion + GSAP (for complex scroll effects)
- **Component Library**: shadcn/ui (for form elements, cards)
- **Deployment**: Vercel

### Additional Libraries
```json
{
  "framer-motion": "^10.x",
  "gsap": "^3.x",
  "react-intersection-observer": "^9.x",
  "lucide-react": "^0.x" // for icons
}
```

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: 90+ (Performance, Accessibility)

---

## Design System

### Color Palette (from pitch deck)
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

### Typography
```css
/* Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Hierarchy */
--h1: 4.5rem / 1.1 / 700 (Hero headline)
--h2: 3rem / 1.2 / 700 (Section headlines)
--h3: 2rem / 1.3 / 600 (Subsections)
--body: 1.125rem / 1.7 / 400
--small: 0.875rem / 1.5 / 400
```

### Spacing System
```css
--spacing-xs: 0.5rem;   // 8px
--spacing-sm: 1rem;     // 16px
--spacing-md: 2rem;     // 32px
--spacing-lg: 4rem;     // 64px
--spacing-xl: 6rem;     // 96px
--spacing-2xl: 8rem;    // 128px
```

### Animation Timing
```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--duration-fast: 0.3s;
--duration-normal: 0.6s;
--duration-slow: 1s;
```

---

## Page Structure & Sections

### Section 0: Navigation Bar (Sticky)
**Height**: 80px  
**Position**: Fixed top, backdrop blur

**Components**:
```tsx
<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-dark/80">
  <div className="container mx-auto flex justify-between items-center py-4">
    {/* Logo with gradient text */}
    <Logo text="RealLife" gradient />
    
    {/* Nav Links */}
    <NavLinks>
      <Link href="#problem">The Problem</Link>
      <Link href="#solution">Our Solution</Link>
      <Link href="#how-it-works">How It Works</Link>
    </NavLinks>
    
    {/* CTA Button */}
    <Button variant="gradient">Join Waitlist</Button>
  </div>
</nav>
```

**Animations**:
- Fade in on page load (delay 0.5s)
- Background blur intensifies on scroll past 100px
- Logo scales slightly on hover

---

### Section 1: Hero / Above the Fold
**Height**: 100vh  
**Background**: Dark gradient with animated particle system

**Layout Structure**:
```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ┌────────────────┐    ┌────────────────┐     │
│  │                │    │                │     │
│  │  LEFT SPLIT    │    │  RIGHT SPLIT   │     │
│  │  (Scrolling)   │    │  (Achieving)   │     │
│  │                │    │                │     │
│  │  Dark, lifeless│    │  Bright, alive │     │
│  │                │    │                │     │
│  └────────────────┘    └────────────────┘     │
│                                                 │
│         ┌──────────────────────┐               │
│         │  HEADLINE + CTA      │               │
│         └──────────────────────┘               │
│                                                 │
│              Scroll indicator ↓                 │
└─────────────────────────────────────────────────┘
```

**Content**:
```tsx
<section className="min-h-screen flex items-center justify-center relative overflow-hidden">
  {/* Animated particle background */}
  <ParticleBackground />
  
  {/* Split screen comparison */}
  <div className="grid grid-cols-2 gap-8 max-w-6xl">
    {/* Left: Trapped */}
    <div className="relative grayscale opacity-60">
      <video autoPlay loop muted playsInline>
        <source src="/videos/scrolling-trap.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80" />
      <p className="absolute bottom-8 left-8 text-2xl">Trapped in the scroll</p>
    </div>
    
    {/* Right: Free */}
    <div className="relative">
      <video autoPlay loop muted playsInline>
        <source src="/videos/achieving-goals.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-dark/40" />
      <p className="absolute bottom-8 right-8 text-2xl">Living your real life</p>
    </div>
  </div>
  
  {/* Center overlay with headline */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
    <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
      Break Free from<br />Endless Scrolling
    </h1>
    <p className="text-2xl text-secondary mb-8 max-w-2xl">
      RealLife helps you reclaim your time, focus, and ambition—one notification at a time.
    </p>
    <div className="flex gap-4 pointer-events-auto">
      <Button size="lg" variant="gradient">See How It Works</Button>
      <Button size="lg" variant="outline">Join the Beta</Button>
    </div>
  </div>
  
  {/* Scroll indicator */}
  <ScrollIndicator className="absolute bottom-8" />
</section>
```

**Animations**:
1. **On Load**:
   - Particle system fades in (0-1s)
   - Split videos fade in from sides (0.5s delay)
   - Headline animates up with fade (1s delay)
   - CTAs pop in with bounce (1.5s delay)

2. **Continuous**:
   - Particles drift slowly
   - Gradient text shimmer effect
   - Scroll indicator pulses

3. **Interactive**:
   - Mouse parallax on headline (subtle movement)
   - Button hover states with gradient shift

**Technical Notes**:
```tsx
// Framer Motion variants
const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

// Video fallback
<video poster="/images/scrolling-trap-poster.jpg">
```

---

### Section 2: The Problem
**Height**: Auto (min 100vh)  
**Background**: Darker gradient, slightly lit from bottom

**Layout Structure**:
```
┌─────────────────────────────────────────────────┐
│                  HEADLINE                       │
│       "You're Not Weak. You're Trapped."        │
│                                                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │  STAT 1 │  │  STAT 2 │  │  STAT 3 │        │
│  │  210M   │  │  200B   │  │  X hrs  │        │
│  │ addicted│  │  views  │  │  lost   │        │
│  └─────────┘  └─────────┘  └─────────┘        │
│                                                 │
│         ┌──────────────────────┐               │
│         │   ANIMATED PHONE     │               │
│         │   showing endless    │               │
│         │   scroll + anxiety   │               │
│         └──────────────────────┘               │
└─────────────────────────────────────────────────┘
```

**Content**:
```tsx
<section className="min-h-screen py-24 relative">
  {/* Background glow effect */}
  <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent" />
  
  <div className="container mx-auto text-center">
    <h2 className="text-6xl font-bold mb-16">
      You're Not Weak.<br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">
        You're Trapped.
      </span>
    </h2>
    
    {/* Stat Cards */}
    <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
      <StatCard
        number="210M"
        label="people worldwide addicted to social media"
        icon={<UsersIcon />}
        gradient="from-purple-500 to-pink-500"
      />
      <StatCard
        number="200B"
        label="daily views on YouTube Shorts alone"
        icon={<EyeIcon />}
        gradient="from-pink-500 to-orange-500"
      />
      <StatCard
        number={<CountUp end={4.5} decimals={1} duration={2} />}
        label="hours lost per day to mindless scrolling"
        icon={<ClockIcon />}
        gradient="from-orange-500 to-red-500"
        suffix=" hrs"
      />
    </div>
    
    {/* Animated phone mockup */}
    <div className="max-w-sm mx-auto">
      <PhoneMockup>
        <InfiniteScrollAnimation />
        <UserFaceOverlay emotion="anxious" />
      </PhoneMockup>
      <p className="text-secondary mt-8 text-lg">
        This digital drain leads to loss of ambition, declining focus,<br />
        and fuels anxiety and low self-worth.
      </p>
    </div>
  </div>
</section>
```

**Components Detail**:

**StatCard Component**:
```tsx
interface StatCardProps {
  number: string | ReactNode;
  label: string;
  icon: ReactNode;
  gradient: string;
  suffix?: string;
}

const StatCard: FC<StatCardProps> = ({ number, label, icon, gradient }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "backOut" }}
      className={`relative p-8 rounded-2xl bg-gradient-to-br ${gradient} bg-opacity-10 border border-white/10 backdrop-blur`}
    >
      <div className="text-6xl mb-4">{icon}</div>
      <div className="text-5xl font-bold mb-2">{number}</div>
      <p className="text-sm text-secondary">{label}</p>
      
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 blur-xl transition-opacity hover:opacity-20`} />
    </motion.div>
  );
};
```

**Animations**:
1. **Scroll-triggered**:
   - Headline fades in from bottom
   - Stat cards pop in sequentially (stagger 0.2s each)
   - Numbers count up when cards appear
   - Phone mockup slides up with fade

2. **Continuous**:
   - Phone screen shows endless scroll loop
   - User face animation cycles through emotions (neutral → engaged → tired → anxious)
   - Subtle floating animation on stat cards

3. **Interactive**:
   - Stat cards glow on hover
   - Phone tilts slightly on mouse move (parallax)

**Technical Notes**:
```tsx
// CountUp animation
import CountUp from 'react-countup';

// Intersection Observer for scroll triggers
const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3
});

// Infinite scroll animation in phone
// Use Lottie or CSS animation with gradient overlay
```

---

### Section 3: The Solution (Scrollless Features)
**Height**: Auto (min 120vh)  
**Background**: Gradual transition from dark to slightly lighter

**Layout Structure**:
```
┌─────────────────────────────────────────────────┐
│              HEADLINE                           │
│    "Meet Scrollless: Your AI-Powered            │
│     Digital Wellness Coach"                     │
│                                                 │
│  ┌──────────────────────────────────────┐      │
│  │                                       │      │
│  │      LARGE PHONE MOCKUP (Center)     │      │
│  │      showing "My Goals" screen       │      │
│  │                                       │      │
│  │  ┌────┐                       ┌────┐ │      │
│  │  │ F1 │                       │ F2 │ │      │
│  │  └────┘                       └────┘ │      │
│  │                                       │      │
│  │  ┌────┐                       ┌────┐ │      │
│  │  │ F3 │                       │ F4 │ │      │
│  │  └────┘                       └────┘ │      │
│  │                                       │      │
│  └──────────────────────────────────────┘      │
│                                                 │
│  F1-F4: Feature cards positioned around phone  │
└─────────────────────────────────────────────────┘
```

**Content**:
```tsx
<section className="min-h-screen py-24 relative">
  <div className="container mx-auto">
    <h2 className="text-6xl font-bold text-center mb-8">
      Meet Scrollless
    </h2>
    <p className="text-2xl text-secondary text-center mb-24 max-w-3xl mx-auto">
      Your AI-powered digital wellness coach that identifies, notifies, and helps you modify habits for a healthier digital life.
    </p>
    
    {/* Main feature showcase */}
    <div className="relative max-w-7xl mx-auto">
      {/* Center phone mockup */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <PhoneMockup size="large" interactive>
          <AppScreen screen="goals" />
        </PhoneMockup>
      </div>
      
      {/* Feature cards positioned around phone */}
      <div className="grid grid-cols-2 gap-x-[600px] gap-y-16">
        {/* Top Left */}
        <FeatureCard
          position="top-left"
          number="01"
          title="Identify"
          description="Tracks time on distracting apps (TikTok, Instagram) and gives you clear, non-judgmental data. You set your own limits."
          icon={<ChartBarIcon />}
          gradient="from-purple-500 to-blue-500"
        />
        
        {/* Top Right */}
        <FeatureCard
          position="top-right"
          number="02"
          title="Notify"
          description='Instead of harsh alerts, get helpful prompts like "You\'ve been scrolling for 15 minutes. Ready to work on your goal?"'
          icon={<BellIcon />}
          gradient="from-blue-500 to-cyan-500"
        />
        
        {/* Bottom Left */}
        <FeatureCard
          position="bottom-left"
          number="03"
          title="Modify"
          description='Give the AI a big task like "Write final essay" and it breaks it down into simple, actionable SMART goals you can actually complete.'
          icon={<SparklesIcon />}
          gradient="from-cyan-500 to-green-500"
        />
        
        {/* Bottom Right */}
        <FeatureCard
          position="bottom-right"
          number="04"
          title="Gamify"
          description="After finishing tasks, earn tokens as positive feedback. Build momentum and replace anxiety with achievement."
          icon={<TrophyIcon />}
          gradient="from-green-500 to-yellow-500"
        />
      </div>
    </div>
    
    {/* Key differentiators */}
    <div className="mt-32 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
      <DifferentiatorCard
        icon={<BrainIcon />}
        text="AI-Powered Breakdown"
        subtext="Lowers cognitive load"
      />
      <DifferentiatorCard
        icon={<HeartIcon />}
        text="Builds Action Inertia"
        subtext="Focuses on the first step"
      />
      <DifferentiatorCard
        icon={<SmileIcon />}
        text="Positive Feedback Loop"
        subtext="Replaces anxiety with achievement"
      />
    </div>
  </div>
</section>
```

**FeatureCard Component**:
```tsx
interface FeatureCardProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ 
  position, 
  number, 
  title, 
  description, 
  icon, 
  gradient 
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  
  // Animation direction based on position
  const getInitialPosition = () => {
    switch(position) {
      case 'top-left': return { x: -100, y: -50 };
      case 'top-right': return { x: 100, y: -50 };
      case 'bottom-left': return { x: -100, y: 50 };
      case 'bottom-right': return { x: 100, y: 50 };
    }
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative p-8 rounded-2xl bg-dark-lighter border border-white/10 backdrop-blur"
    >
      {/* Number badge */}
      <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center font-bold text-lg`}>
        {number}
      </div>
      
      {/* Icon */}
      <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20 flex items-center justify-center`}>
        <div className="text-3xl">{icon}</div>
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-secondary leading-relaxed">{description}</p>
      
      {/* Connecting line to phone (decorative) */}
      <svg className="absolute opacity-20" style={{ 
        // Position based on card location
        // Draws curved line toward center
      }}>
        <path d="..." stroke="url(#gradient)" />
      </svg>
    </motion.div>
  );
};
```

**Interactive Phone Mockup**:
```tsx
const InteractivePhoneMockup = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  return (
    <div className="relative w-[320px] h-[680px]">
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[50px] border-8 border-gray-800 bg-black shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl" />
        
        {/* Screen content */}
        <div className="absolute inset-4 rounded-[42px] overflow-hidden bg-white">
          <AnimatePresence mode="wait">
            {activeFeature === null ? (
              <AppScreen key="goals" screen="goals" />
            ) : (
              <AppScreen key={`feature-${activeFeature}`} screen={`feature-${activeFeature}`} />
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl -z-10" />
      
      {/* Hotspots for features (invisible triggers) */}
      {[1, 2, 3, 4].map(num => (
        <Hotspot
          key={num}
          position={getHotspotPosition(num)}
          onHover={() => setActiveFeature(num)}
          onLeave={() => setActiveFeature(null)}
        />
      ))}
    </div>
  );
};
```

**Animations**:
1. **Scroll-triggered**:
   - Phone mockup scales up and fades in (center stage)
   - Feature cards fly in from their respective corners sequentially
   - Connecting lines draw from cards to phone
   - Differentiator cards fade in at bottom

2. **Interactive**:
   - Hovering over feature cards highlights corresponding area on phone screen
   - Phone screen transitions to show that specific feature in action
   - Card glows and lifts slightly on hover
   - Phone tilts toward hovered card (subtle 3D effect)

3. **Continuous**:
   - Phone screen cycles through features every 5s if no interaction
   - Gradient glow pulses gently around phone

**Technical Notes**:
```tsx
// 3D tilt effect on phone
import { motion, useMotionValue, useTransform } from 'framer-motion';

const rotateX = useTransform(mouseY, [0, window.innerHeight], [10, -10]);
const rotateY = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);

// Screen transition animations
const screenVariants = {
  enter: { opacity: 0, scale: 0.95 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 }
};
```

---

### Section 4: How It Works (User Journey)
**Height**: Auto (min 100vh)  
**Background**: Darker section with subtle grid pattern

**Layout Structure**:
```
┌─────────────────────────────────────────────────┐
│              HEADLINE                           │
│    "From Scrolling to Succeeding in 4 Steps"   │
│                                                 │
│  ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐     │
│  │  1  │───▶│  2  │───▶│  3  │───▶│  4  │     │
│  │Phone│    │Alert│    │AI   │    │Token│     │
│  │Icon │    │Icon │    │Icon │    │Icon │     │
│  └─────┘    └─────┘    └─────┘    └─────┘     │
│                                                 │
│         [Large animated demo area]             │
│         Shows each step with transitions       │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Content**:
```tsx
<section className="min-h-screen py-24 relative overflow-hidden">
  {/* Background grid pattern */}
  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
  
  <div className="container mx-auto">
    <h2 className="text-6xl font-bold text-center mb-8">
      From Scrolling to Succeeding
    </h2>
    <p className="text-2xl text-secondary text-center mb-24">
      Watch how RealLife transforms your digital habits in real-time
    </p>
    
    {/* Step navigator */}
    <div className="flex justify-center items-center gap-4 mb-16">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <StepIndicator
            number={index + 1}
            label={step.label}
            active={activeStep === index}
            onClick={() => setActiveStep(index)}
          />
          {index < steps.length - 1 && (
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeStep > index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
    
    {/* Animated demo area */}
    <div className="max-w-6xl mx-auto bg-dark-lighter rounded-3xl border border-white/10 p-12 min-h-[600px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-16 items-center"
        >
          {/* Left: Visual */}
          <div className="relative">
            {renderStepVisual(activeStep)}
          </div>
          
          {/* Right: Description */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-sm font-semibold mb-4">
              Step {activeStep + 1}
            </span>
            <h3 className="text-4xl font-bold mb-6">{steps[activeStep].title}</h3>
            <p className="text-xl text-secondary leading-relaxed mb-8">
              {steps[activeStep].description}
            </p>
            <ul className="space-y-3">
              {steps[activeStep].details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-secondary">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Auto-play progress bar */}
      <div className="mt-12 flex items-center gap-4">
        <button 
          onClick={handlePrevStep}
          className="p-2 rounded-full hover:bg-white/10 transition"
        >
          <ChevronLeftIcon />
        </button>
        
        <div className="flex-1 h-2 bg-dark rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            initial={{ width: "0%" }}
            animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <button 
          onClick={handleNextStep}
          className="p-2 rounded-full hover:bg-white/10 transition"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
    
    {/* Mood comparison */}
    <div className="mt-24 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-8">
        <MoodCard
          title="Before RealLife"
          mood="anxious"
          indicators={["😰 Anxious", "😵‍💫 Overwhelmed", "😞 Unproductive"]}
          color="red"
        />
        <MoodCard
          title="After RealLife"
          mood="accomplished"
          indicators={["😊 Focused", "✨ Accomplished", "🚀 Motivated"]}
          color="green"
        />
      </div>
    </div>
  </div>
</section>
```

**Steps Data Structure**:
```tsx
const steps = [
  {
    id: 1,
    label: "Detect",
    title: "You're scrolling on TikTok",
    description: "RealLife monitors your screen time in real-time, detecting when you've been on distracting apps like TikTok or Instagram.",
    details: [
      "Non-invasive background tracking",
      "Respects your privacy - data stays on device",
      "You control which apps to monitor"
    ],
    visual: <ScrollingAnimation />
  },
  {
    id: 2,
    label: "Notify",
    title: "Get a gentle reminder",
    description: 'After 15 minutes, you receive a thoughtful prompt: "You\'ve been scrolling. Ready to tackle that essay?"',
    details: [
      "Encouraging tone, never shaming",
      "Contextual to your current goals",
      "Customizable timing thresholds"
    ],
    visual: <NotificationAnimation />
  },
  {
    id: 3,
    label: "Break Down",
    title: "AI creates your action plan",
    description: "The overwhelming task 'Write final essay' becomes: Step 1 - Research 3 sources (15 min). Suddenly, it's doable.",
    details: [
      "SMART goal methodology",
      "Time estimates for each step",
      "Prioritization based on deadlines"
    ],
    visual: <AIBreakdownAnimation />
  },
  {
    id: 4,
    label: "Complete",
    title: "Earn your achievement token",
    description: "You complete the first step, earn a token, and see your progress bar grow. Dopamine, but from real accomplishment.",
    details: [
      "Visual progress tracking",
      "Collectible achievement tokens",
      "Builds positive momentum"
    ],
    visual: <TokenRewardAnimation />
  }
];
```

**Visual Components**:

Each step has a custom animated visual:

```tsx
// Step 1: Scrolling Animation
const ScrollingAnimation = () => (
  <PhoneMockup>
    <div className="relative h-full overflow-hidden">
      {/* Infinite scroll of TikTok-style cards */}
      <motion.div
        className="space-y-4"
        animate={{ y: [0, -2000] }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {mockTikTokCards.map(card => (
          <TikTokCard key={card.id} {...card} />
        ))}
      </motion.div>
      
      {/* Timer overlay */}
      <div className="absolute top-4 right-4 bg-red-500/90 px-4 py-2 rounded-full font-mono">
        <CountUp start={0} end={15} duration={3} /> min
      </div>
    </div>
  </PhoneMockup>
);

// Step 2: Notification Animation
const NotificationAnimation = () => (
  <PhoneMockup>
    <div className="relative h-full bg-gray-100">
      {/* Phone home screen */}
      <HomeScreen />
      
      {/* Notification slides down */}
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ delay: 1, type: "spring", bounce: 0.4 }}
        className="absolute top-0 left-4 right-4"
      >
        <NotificationCard
          app="RealLife"
          title="Gentle Reminder"
          message="You've been scrolling for 15 minutes. Ready to work on your goal?"
          actions={["Maybe Later", "Let's Go!"]}
        />
      </motion.div>
    </div>
  </PhoneMockup>
);

// Step 3: AI Breakdown Animation
const AIBreakdownAnimation = () => {
  const [showBreakdown, setShowBreakdown] = useState(false);
  
  return (
    <PhoneMockup>
      <div className="p-6 bg-white h-full">
        {/* Original overwhelming task */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: showBreakdown ? 0.8 : 1, opacity: showBreakdown ? 0.3 : 1 }}
          className="p-4 bg-red-50 border-2 border-red-200 rounded-xl mb-4"
        >
          <h4 className="font-bold text-lg">Write final essay</h4>
          <p className="text-sm text-gray-600">Due in 5 days</p>
        </motion.div>
        
        {/* AI thinking animation */}
        <AnimatePresence>
          {showBreakdown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 mb-4"
            >
              <SparklesIcon className="animate-pulse" />
              <span className="text-sm">AI breaking down task...</span>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Broken down tasks appear */}
        <AnimatePresence>
          {showBreakdown && (
            <motion.div className="space-y-2">
              {[
                { task: "Research 3 sources", time: "15 min" },
                { task: "Create outline", time: "20 min" },
                { task: "Write introduction", time: "30 min" },
                { task: "Draft body paragraphs", time: "1 hr" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="p-3 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Step {i + 1}: {item.task}</span>
                    <span className="text-sm text-gray-600">~{item.time}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PhoneMockup>
  );
};

// Step 4: Token Reward Animation
const TokenRewardAnimation = () => {
  const [completed, setCompleted] = useState(false);
  
  return (
    <PhoneMockup>
      <div className="p-6 bg-white h-full flex flex-col">
        {/* Task being completed */}
        <motion.div
          className="p-4 bg-green-50 border-2 border-green-500 rounded-xl mb-4"
          animate={{ scale: completed ? 0.95 : 1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold">Research 3 sources</h4>
              <p className="text-sm text-gray-600">~15 min</p>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setCompleted(true)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              {completed ? "✓ Done" : "Mark Complete"}
            </motion.button>
          </div>
        </motion.div>
        
        {/* Token reward animation */}
        <AnimatePresence>
          {completed && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="flex-1 flex flex-col items-center justify-center"
            >
              {/* Large token */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-6xl shadow-2xl"
              >
                🏆
              </motion.div>
              
              {/* Confetti */}
              <Confetti />
              
              <h3 className="text-2xl font-bold mt-6">Achievement Unlocked!</h3>
              <p className="text-gray-600 mt-2">+1 Token earned</p>
              
              {/* Progress bar */}
              <div className="w-full mt-8 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Essay Progress</span>
                  <span>1/4 steps</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "25%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-green-400 to-blue-500"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PhoneMockup>
  );
};
```

**Animations**:
1. **Auto-play**: Steps auto-advance every 8 seconds with smooth transitions
2. **Interactive**: Click step indicators to jump to specific steps
3. **Visual transitions**: Each step's visual animates independently (scrolling, notifications, breakdowns, rewards)
4. **Progress bar**: Fills as user progresses through steps

**Technical Notes**:
```tsx
// Auto-advance steps
useEffect(() => {
  const interval = setInterval(() => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  }, 8000);
  
  return () => clearInterval(interval);
}, []);

// Keyboard navigation
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNextStep();
    if (e.key === 'ArrowLeft') handlePrevStep();
  };
  
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, []);
```

---

### Section 5: Mission Statement
**Height**: 80vh  
**Background**: Video background with gradient overlay

**Layout Structure**:
```
┌─────────────────────────────────────────────────┐
│                                                 │
│        [Full-width video background]            │
│        Students achieving, socializing, etc.    │
│                                                 │
│  ┌──────────────────────────────────────┐      │
│  │                                       │      │
│  │    CENTERED TEXT OVERLAY              │      │
│  │    "This Isn't Just an App.           │      │
│  │     It's a Movement."                 │      │
│  │                                       │      │
│  │    Mission paragraph                  │      │
│  │                                       │      │
│  └──────────────────────────────────────┘      │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Content**:
```tsx
<section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
  {/* Video background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/mission-background.mp4" type="video/mp4" />
  </video>
  
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-purple-900/60 to-dark/80" />
  
  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    className="relative z-10 max-w-4xl mx-auto text-center px-8"
  >
    <h2 className="text-6xl font-bold mb-12 leading-tight">
      This Isn't Just an App.
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
        It's a Movement.
      </span>
    </h2>
    
    <div className="space-y-6 text-xl text-gray-200 leading-relaxed">
      <p>
        Traditional screen-time apps <strong>shame you</strong>. We <strong>empower you</strong>.
      </p>
      <p>
        We're starting with HK university students—the generation that deserves better than dopamine traps designed to steal your potential.
      </p>
      <p className="text-2xl font-semibold text-white">
        Together, we're building a future where technology serves life, not replaces it.
      </p>
    </div>
    
    {/* Stats ticker */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-16 flex justify-center gap-16"
    >
      <StatTicker label="Hours Reclaimed" value={12847} />
      <StatTicker label="Goals Achieved" value={3291} />
      <StatTicker label="Lives Changed" value={587} />
    </motion.div>
  </motion.div>
</section>
```

**Animations**:
- Text fades in on scroll with upward motion
- Stats counter animates when visible
- Video plays with subtle ken burns effect (slow zoom)
- Gradient overlay pulses gently

---

### Section 6: CTA / Waitlist
**Height**: 100vh  
**Background**: Solid dark with radial gradient from center

**Layout Structure**:
```
┌─────────────────────────────────────────────────┐
│                                                 │
│                 HEADLINE                        │
│          "Ready to Reclaim Your Life?"          │
│                                                 │
│            ┌──────────────────┐                 │
│            │                  │                 │
│            │  EMAIL FORM      │                 │
│            │  + CTA BUTTON    │                 │
│            │                  │                 │
│            └──────────────────┘                 │
│                                                 │
│         Trust indicators / social proof         │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Content**:
```tsx
<section className="min-h-screen flex items-center justify-center relative overflow-hidden">
  {/* Radial gradient background */}
  <div className="absolute inset-0 bg-gradient-radial from-purple-900/40 via-dark to-dark" />
  
  {/* Animated orbs */}
  <div className="absolute inset-0">
    <motion.div
      animate={{ 
        x: [0, 100, 0],
        y: [0, -100, 0],
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
    />
    <motion.div
      animate={{ 
        x: [0, -100, 0],
        y: [0, 100, 0],
      }}
      transition={{ 
        duration: 25, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
    />
  </div>
  
  <div className="relative z-10 max-w-2xl mx-auto text-center px-8">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-7xl font-bold mb-6">
        Ready to Reclaim
        <br />
        Your Life?
      </h2>
      <p className="text-2xl text-secondary mb-12">
        Join 100+ students in our beta program launching Q4 2025
      </p>
      
      {/* Waitlist form */}
      <WaitlistForm />
      
      {/* Trust indicators */}
      <div className="mt-16 flex items-center justify-center gap-12 text-sm text-secondary">
        <div className="flex items-center gap-2">
          <ShieldCheckIcon className="w-5 h-5 text-green-400" />
          <span>Privacy-first design</span>
        </div>
        <div className="flex items-center gap-2">
          <UsersIcon className="w-5 h-5 text-blue-400" />
          <span>Built by students</span>
        </div>
        <div className="flex items-center gap-2">
          <SparklesIcon className="w-5 h-5 text-purple-400" />
          <span>AI-powered</span>
        </div>
      </div>
      
      {/* Alternative CTAs */}
      <div className="mt-12 flex items-center justify-center gap-6">
        <button className="text-secondary hover:text-white transition underline">
          Watch Our Pitch
        </button>
        <span className="text-secondary">•</span>
        <button className="text-secondary hover:text-white transition underline">
          Learn More About ZPIRE
        </button>
      </div>
    </motion.div>
  </div>
</section>
```

**WaitlistForm Component**:
```tsx
const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission (no actual backend needed for competition)
    setSubmitted(true);
    
    // Confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };
  
  return (
    <AnimatePresence mode="wait">
      {!submitted ? (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="flex gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-4 rounded-xl bg-dark-lighter border border-white/20 focus:border-purple-500 outline-none transition text-lg"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition"
          >
            Join Beta
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/50"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-3xl font-bold mb-2">You're on the list!</h3>
          <p className="text-lg text-secondary">
            We'll notify you when RealLife launches. Get ready to reclaim your time!
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

---

### Section 7: Footer
**Height**: Auto  
**Background**: Solid dark

**Content**:
```tsx
<footer className="bg-dark-lighter border-t border-white/10 py-16">
  <div className="container mx-auto px-8">
    <div className="grid grid-cols-4 gap-12 mb-12">
      {/* Brand */}
      <div className="col-span-2">
        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          RealLife
        </div>
        <p className="text-secondary max-w-sm">
          Breaking free from endless scrolling. Building a future where technology serves life.
        </p>
        
        {/* Social links */}
        <div className="flex gap-4 mt-6">
          <SocialLink href="#" icon={<InstagramIcon />} label="Instagram" />
          <SocialLink href="#" icon={<LinkedInIcon />} label="LinkedIn" />
          <SocialLink href="#" icon={<GithubIcon />} label="GitHub" />
        </div>
      </div>
      
      {/* Quick Links */}
      <div>
        <h4 className="font-bold mb-4">Product</h4>
        <ul className="space-y-2 text-secondary">
          <li><a href="#problem" className="hover:text-white transition">The Problem</a></li>
          <li><a href="#solution" className="hover:text-white transition">Our Solution</a></li>
          <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
        </ul>
      </div>
      
      {/* Resources */}
      <div>
        <h4 className="font-bold mb-4">Resources</h4>
        <ul className="space-y-2 text-secondary">
          <li><a href="#" className="hover:text-white transition">Our Pitch Deck</a></li>
          <li><a href="#" className="hover:text-white transition">About ZPIRE</a></li>
          <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
        </ul>
      </div>
    </div>
    
    {/* Bottom bar */}
    <div className="pt-8 border-t border-white/10 flex justify-between items-center text-sm text-secondary">
      <p>© 2025 RealLife. Made with 💜 for ZPIRE Jumpstarter</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
```

---

## Technical Implementation Guide

### Project Structure
```
reallife-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Mission.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── animations/
│   │   ├── ScrollingAnimation.tsx
│   │   ├── NotificationAnimation.tsx
│   │   ├── AIBreakdownAnimation.tsx
│   │   └── TokenRewardAnimation.tsx
│   └── shared/
│       ├── PhoneMockup.tsx
│       ├── StatCard.tsx
│       ├── FeatureCard.tsx
│       └── ParticleBackground.tsx
├── lib/
│   ├── animations.ts
│   └── utils.ts
├── public/
│   ├── videos/
│   ├── images/
│   └── fonts/
└── styles/
    └── tailwind.config.ts
```

### Key Dependencies Installation
```bash
npm install framer-motion gsap
npm install react-intersection-observer
npm install lucide-react
npm install react-countup
npm install canvas-confetti
npm install @types/canvas-confetti
```

### Global Styles Setup
```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 10 10 26;
    --foreground: 255 255 255;
  }
  
  body {
    @apply bg-[rgb(var(--background))] text-[rgb(var(--foreground))];
    font-family: 'Inter', sans-serif;
  }
  
  /* Smooth scroll */
  html {
    scroll-behavior: smooth;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
}

/* Grid pattern utility */
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}
```

### Tailwind Config
```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0a1a',
        'dark-lighter': '#1a1a2e',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config
```

### Animation Utilities
```ts
// lib/animations.ts
import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'backOut' }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Scroll-triggered animation hook
export const useScrollAnimation = (threshold = 0.3) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold
  });
  
  return { ref, inView };
};
```

### Performance Optimizations

**Image Optimization**:
```tsx
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/images/hero-bg.jpg"
  alt="Background"
  fill
  priority
  quality={85}
  sizes="100vw"
/>
```

**Code Splitting**:
```tsx
// Lazy load heavy components
import dynamic from 'next/dynamic';

const ParticleBackground = dynamic(
  () => import('@/components/shared/ParticleBackground'),
  { ssr: false }
);
```

**Font Loading**:
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});
```

---

## Responsive Design Guidelines

While desktop-first, ensure basic mobile responsiveness:

### Breakpoints
```css
/* Tailwind default breakpoints */
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

### Mobile Adjustments
```tsx
// Example responsive classes
<h1 className="text-4xl md:text-6xl lg:text-7xl">
  Break Free from Endless Scrolling
</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Feature cards */}
</div>
```

### Touch Interactions
```tsx
// Add touch-friendly hover states
<button className="hover:scale-105 active:scale-95 transition">
  Join Beta
</button>
```

---

## Testing Checklist

### Before Submission
- [ ] Test on Chrome, Firefox, Safari (latest versions)
- [ ] Test on 1920x1080, 1366x768, 2560x1440 resolutions
- [ ] Verify all animations play smoothly (60fps)
- [ ] Check loading time < 3s on regular connection
- [ ] Ensure no console errors
- [ ] Test email form submission (even if mock)
- [ ] Verify all links work (or are intentionally #)
- [ ] Check accessibility (tab navigation, ARIA labels)
- [ ] Test scroll-triggered animations trigger correctly
- [ ] Verify videos load/autoplay properly
- [ ] Mobile check: ensure nothing breaks on phones

### Performance Targets
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

---

## Deployment

### Vercel Deployment (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Environment Variables
```env
# .env.local (if needed)
NEXT_PUBLIC_SITE_URL=https://reallife-app.vercel.app
```

### Custom Domain (Optional)
If buying domain for extra points:
1. Buy from Namecheap/GoDaddy (~$12/year)
2. Add to Vercel project settings
3. Configure DNS records

---

## Success Metrics

### What Judges Will Evaluate

**Creativity (30%)**:
- ✅ Unique visual storytelling (split-screen hero)
- ✅ Innovative animations (phone interactions)
- ✅ Compelling narrative flow

**Execution (40%)**:
- ✅ Clean, well-structured code
- ✅ Smooth animations (no jank)
- ✅ Professional polish
- ✅ Bug-free experience

**Presentation (20%)**:
- ✅ Clear problem-solution narrative
- ✅ Effective use of data/stats
- ✅ Emotional connection

**Mobile-Friendly (10%)**:
- ✅ Responsive layout
- ✅ Touch-friendly interactions
- ✅ Performance on mobile

---

## Additional Resources

### Animation Inspiration
- [Awwwards](https://awwwards.com) - Award-winning web design
- [Dribbble](https://dribbble.com) - UI/UX inspiration
- [CodePen](https://codepen.io) - Animation examples

### Tools
- [Figma](https://figma.com) - For quick mockups
- [Lottie Files](https://lottiefiles.com) - Free animations
- [Unsplash](https://unsplash.com) - Free stock photos/videos
- [Coolors](https://coolors.co) - Color palette generator

### Learning Resources
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [Next.js Docs](https://nextjs.org/docs)

---

## Appendix: Quick Reference

### Color Variables
```css
--purple-deep: #667eea
--purple-mid: #764ba2
--pink-bright: #f093fb
--orange-accent: #f6ad55
--bg-dark: #0a0a1a
```

### Key Animations
```tsx
fadeInUp, fadeInDown, scaleIn, staggerContainer
```

### Core Components
```
PhoneMockup, StatCard, FeatureCard, Button, WaitlistForm
```

### Section Heights
```
Hero: 100vh
Problem: min-100vh
Solution: min-120vh
HowItWorks: min-100vh
Mission: 80vh
CTA: 100vh
```

---

**Good luck with the competition! 🚀 Build something amazing!**
