'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-purple-900/20 to-dark" />

      {/* Animated particles/orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-deep/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-bright/20 rounded-full blur-3xl"
        />
      </div>

      {/* Split screen comparison */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-8">
        {/* Left: Trapped */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative rounded-2xl overflow-hidden grayscale opacity-60 h-[400px]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-dark/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">📱</div>
              <p className="text-2xl font-semibold">Trapped in the scroll</p>
              <p className="text-gray-400 mt-2">Hours wasted, goals forgotten</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Free */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative rounded-2xl overflow-hidden h-[400px]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-dark/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-2xl font-semibold">Living your real life</p>
              <p className="text-gray-300 mt-2">Goals achieved, potential unlocked</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Center overlay with headline */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
        >
          Break Free from
          <br />
          Endless Scrolling
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
        >
          RealLife helps you reclaim your time, focus, and ambition—one notification at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-deep to-pink-bright hover:opacity-90 text-lg px-8"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See How It Works
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/20 hover:bg-white/10 text-lg px-8"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join the Beta
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </motion.div>
    </section>
  );
}
