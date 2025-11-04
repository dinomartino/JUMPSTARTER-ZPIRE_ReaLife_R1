'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShieldCheck, Users, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simulate submission
    setSubmitted(true);

    // Confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Reset after 5 seconds for demo purposes
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 5000);
  };

  return (
    <section id="waitlist" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
            ease: 'easeInOut'
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
            ease: 'easeInOut'
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
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Ready to Reclaim
            <br />
            Your Life?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            Join 100+ students in our beta program launching Q4 2025
          </p>

          {/* Waitlist form */}
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-16"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-6 rounded-xl bg-dark-lighter border-2 border-white/20 focus:border-purple-500 outline-none transition text-lg"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="px-8 py-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
                >
                  Join Beta
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/50 mb-16"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-3xl font-bold mb-2">You&apos;re on the list!</h3>
                <p className="text-lg text-gray-300">
                  We&apos;ll notify you when RealLife launches. Get ready to reclaim your time!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 text-sm text-gray-400 mb-12">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span>Privacy-first design</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>Built by students</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>AI-powered</span>
            </div>
          </div>

          {/* Alternative CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="text-gray-400 hover:text-white transition underline">
              Watch Our Pitch
            </button>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <button className="text-gray-400 hover:text-white transition underline">
              Learn More About ZPIRE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
