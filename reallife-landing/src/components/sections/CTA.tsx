'use client';

import { useState, FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import confetti from 'canvas-confetti';
import PhoneMockup from '@/components/shared/PhoneMockup';

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
    <section id="waitlist" className="relative min-h-screen overflow-hidden">
      {/* Lightweight gradient background instead of heavy Aurora canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Subtle animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 via-transparent to-blue-100/50 animate-pulse-slow" />
      </div>

      <div className="relative z-10 w-full py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Content */}
              <div className="text-left space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-300 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                    </span>
                    <span className="text-sm font-semibold text-purple-700">Beta Launching Q4 2025</span>
                  </div>

                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                    Ready to Reclaim
                    <br />
                    Your Life?
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-700">
                    Join <span className="text-gray-900 font-semibold">100+ HK university students</span> in our exclusive beta program.
                  </p>
                </div>

                {/* Email Signup */}
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4 max-w-lg"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your .edu email"
                          required
                          className="flex-1 px-6 py-6 rounded-xl bg-white/80 border-2 border-gray-300 focus:border-purple-500 outline-none transition text-lg text-gray-900 placeholder:text-gray-500"
                        />
                        <Button
                          type="submit"
                          size="lg"
                          className="px-8 py-6 rounded-xl bg-purple-600 hover:bg-purple-700 font-bold text-lg text-white transition-all hover:scale-105 whitespace-nowrap"
                        >
                          Join Waitlist
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">
                        <span className="text-purple-600">🎓</span> Priority access for HK university students • No credit card required
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 shadow-xl max-w-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div>
                          <h3 className="text-3xl font-bold mb-3 text-gray-900">You&apos;re on the waitlist!</h3>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Check your inbox for next steps. We&apos;ll notify you when ReaLife launches.
                          </p>
                        </div>
                      </div>

                      {/* Success indicator */}
                      <div className="mt-6 flex items-center gap-3 p-4 bg-white/60 rounded-xl border border-green-200">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-800">
                          Confirmation email sent to your inbox
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700 pt-4 border-t border-gray-300">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Free beta access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="font-medium">Privacy-first design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="font-medium">AI-powered insights</span>
                  </div>
                </div>
              </div>

              {/* Right side - Phone Mockup (hidden on mobile) */}
              <div className="hidden lg:flex justify-center lg:justify-end">
                <PhoneMockup size="large" className="transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/screenshots/cta-action.png"
                    alt="RealLife App - Turn anxiety into action"
                    className="w-full h-full object-cover object-top"
                  />
                </PhoneMockup>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
