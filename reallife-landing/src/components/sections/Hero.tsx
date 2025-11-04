"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { BubbleBackground } from "@/components/ui/shadcn-io/bubble-background";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { useEffect, useState } from "react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Optimized background for mobile */}
      {!isMobile ? (
        <BubbleBackground
          className="absolute inset-0"
          interactive={false}
          colors={{
            first: "102,126,234", // purple-deep
            second: "118,75,162", // purple-mid
            third: "240,147,251", // pink-bright
            fourth: "246,173,85", // orange-accent
            fifth: "139,92,246", // violet
            sixth: "236,72,153", // fuchsia
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900" />
      )}

      {/* Split screen comparison - Mobile optimized */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto px-4 md:px-8">
        {/* Left: Trapped - Dark and ominous */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 1, delay: shouldReduceMotion ? 0 : 0.5 }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[300px] md:h-[450px] shadow-2xl"
        >
          {/* Dark vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/80 via-gray-900/90 to-black" />

          {/* Animated warning glow - Disabled on mobile for performance */}
          {!isMobile && !shouldReduceMotion && (
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-transparent to-transparent"
            />
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4 md:p-8 relative">
              {/* Pulsing icon - Simpler animation on mobile */}
              <motion.div
                animate={!shouldReduceMotion ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl md:text-7xl mb-3 md:mb-6 filter drop-shadow-2xl drop-shadow-red-500"
              >
                📱
              </motion.div>
              <p className="text-xl md:text-3xl font-bold text-red-400 mb-2 md:mb-3">
                Trapped in the scroll
              </p>
              <p className="text-gray-300 text-sm md:text-lg">
                Hours wasted, goals forgotten
              </p>

              {/* Warning badge */}
              <div className="mt-3 md:mt-6 inline-block px-3 md:px-4 py-1.5 md:py-2 bg-red-500/20 border border-red-500/50 rounded-full">
                <span className="text-red-400 text-xs md:text-sm font-semibold">
                  ⚠ Average: 4.5 hrs/day
                </span>
              </div>
            </div>
          </div>

          {/* Corner accent - Smaller on mobile */}
          <div className="absolute top-0 left-0 w-16 h-16 md:w-32 md:h-32 bg-red-500/20 blur-2xl md:blur-3xl" />
        </motion.div>

        {/* Right: Free - Bright and inspiring */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 1, delay: shouldReduceMotion ? 0 : 0.7 }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[300px] md:h-[450px] shadow-2xl"
        >
          {/* Bright gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-green-900/70 to-teal-900/80" />

          {/* Animated glow effect - Disabled on mobile for performance */}
          {!isMobile && !shouldReduceMotion && (
            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-t from-green-400/30 via-transparent to-transparent"
            />
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4 md:p-8 relative">
              {/* Animated icon - Simpler animation on mobile */}
              <motion.div
                animate={!shouldReduceMotion ? {
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0],
                } : {}}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="text-4xl md:text-7xl mb-3 md:mb-6 filter drop-shadow-2xl drop-shadow-green-500"
              >
                🎯
              </motion.div>
              <p className="text-xl md:text-3xl font-bold text-green-400 mb-2 md:mb-3">
                Living your real life
              </p>
              <p className="text-gray-100 text-sm md:text-lg">
                Goals achieved, potential unlocked
              </p>

              {/* Success badge */}
              <div className="mt-3 md:mt-6 inline-block px-3 md:px-4 py-1.5 md:py-2 bg-green-400/20 border border-green-400/50 rounded-full">
                <span className="text-green-400 text-xs md:text-sm font-semibold">
                  ✓ Reclaim your time
                </span>
              </div>
            </div>
          </div>

          {/* Corner accent - Smaller on mobile */}
          <div className="absolute bottom-0 right-0 w-16 h-16 md:w-32 md:h-32 bg-green-400/20 blur-2xl md:blur-3xl" />
        </motion.div>
      </div>

      {/* Center overlay with headline - Mobile optimized */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4">
        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 1, delay: shouldReduceMotion ? 0 : 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-8 relative"
          style={{
            textShadow: isMobile
              ? "0 2px 20px rgba(0, 0, 0, 0.8)"
              : "0 0 80px rgba(168, 85, 247, 0.4), 0 0 40px rgba(236, 72, 153, 0.3)",
          }}
        >
          <span className="text-white">Break Free</span>
          <br />
          <span className="text-white">
            from Endless{" "}
            {!isMobile ? (
              <TypingText
                text={[
                  "Scrolling",
                  "Distractions",
                  "Procrastination",
                  "Social Media",
                ]}
                as="span"
                loop={true}
                showCursor={true}
                cursorCharacter=" "
                typingSpeed={100}
                initialDelay={2000}
                pauseDuration={2000}
                deletingSpeed={50}
                className="text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text leading-relaxed inline-block pb-2"
              />
            ) : (
              <span className="text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text">
                Scrolling
              </span>
            )}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 1, delay: shouldReduceMotion ? 0 : 1.3 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-medium mb-6 md:mb-12 max-w-3xl relative z-10 px-4"
          style={{
            textShadow: "0 2px 20px rgba(0, 0, 0, 0.8)",
          }}
        >
          RealLife helps you reclaim your time, focus, and ambition—one
          notification at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 1.6 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 pointer-events-auto relative z-10 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button
            size={isMobile ? "default" : "lg"}
            className="group relative border-2 border-black/50 hover:border-black/80 bg-white/5 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 font-semibold shadow-xl hover:shadow-2xl rounded-full will-change-transform w-full sm:w-auto"
            onClick={() =>
              document
                .getElementById("how-it-works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              See How It Works
              <span className="group-hover:translate-x-1 transition-transform duration-200 will-change-transform">
                →
              </span>
            </span>
          </Button>
          <Button
            size={isMobile ? "default" : "lg"}
            variant="outline"
            className="group relative border-2 border-white/50 hover:border-white/80 bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6 font-semibold shadow-xl hover:shadow-2xl rounded-full will-change-transform w-full sm:w-auto"
            onClick={() =>
              document
                .getElementById("waitlist")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Join the Beta
            </span>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() =>
          document
            .getElementById("problem")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </motion.div>
    </section>
  );
}
