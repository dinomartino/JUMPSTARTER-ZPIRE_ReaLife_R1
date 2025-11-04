'use client';

import { motion } from 'framer-motion';
import FeatureCard from '@/components/shared/FeatureCard';
import PhoneMockup from '@/components/shared/PhoneMockup';
import { BarChart3, Bell, Sparkles, Trophy, Brain, Heart, Smile, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Solution() {
  return (
    <section id="solution" className="min-h-screen py-24 relative bg-gradient-to-b from-emerald-50/30 via-green-50/20 to-emerald-50/30 overflow-hidden">
      {/* Positive themed accent glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-200/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-3xl" />

      {/* Success icon decoration */}
      <div className="absolute top-8 left-8 opacity-5">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-emerald-500">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-8"
        >
          Meet Scrollless
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-400 text-center mb-24 max-w-3xl mx-auto"
        >
          Your AI-powered digital wellness coach that identifies, notifies, and helps you modify habits for a healthier digital life.
        </motion.p>

        {/* Main feature showcase */}
        <div className="relative max-w-7xl mx-auto mb-32">
          {/* Center phone mockup */}
          <div className="flex justify-center mb-16 lg:mb-0">
            <PhoneMockup size="large">
              <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-6 overflow-hidden">
                <div className="bg-white rounded-t-3xl p-6 h-full shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">My Goals</h3>

                  {/* Goal items */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">Write final essay</span>
                        <Trophy className="w-5 h-5 text-yellow-500" />
                      </div>
                      <div className="h-2 bg-white rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-pink-500" />
                      </div>
                      <span className="text-xs text-gray-600 mt-1 block">3/4 steps complete</span>
                    </div>

                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">Gym routine</span>
                        <Trophy className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="h-2 bg-white rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-cyan-500" />
                      </div>
                      <span className="text-xs text-gray-600 mt-1 block">2/4 steps complete</span>
                    </div>

                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-4 opacity-60">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">Learn guitar</span>
                        <Trophy className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="h-2 bg-white rounded-full overflow-hidden">
                        <div className="h-full w-1/4 bg-gradient-to-r from-green-500 to-emerald-500" />
                      </div>
                      <span className="text-xs text-gray-600 mt-1 block">1/4 steps complete</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-purple-600">12</div>
                      <div className="text-xs text-gray-600">Tokens Earned</div>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-pink-600">2.5h</div>
                      <div className="text-xs text-gray-600">Time Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </div>

          {/* Feature cards positioned around phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-x-[600px] lg:absolute lg:inset-0 lg:top-0">
            <FeatureCard
              position="top-left"
              number="01"
              title="Identify"
              description="Tracks time on distracting apps (TikTok, Instagram) and gives you clear, non-judgmental data. You set your own limits."
              icon={<BarChart3 className="w-8 h-8" />}
              gradient="from-purple-500 to-blue-500"
            />

            <FeatureCard
              position="top-right"
              number="02"
              title="Notify"
              description="Instead of harsh alerts, get helpful prompts like 'You've been scrolling for 15 minutes. Ready to work on your goal?'"
              icon={<Bell className="w-8 h-8" />}
              gradient="from-blue-500 to-cyan-500"
            />

            <FeatureCard
              position="bottom-left"
              number="03"
              title="Modify"
              description="Give the AI a big task like 'Write final essay' and it breaks it down into simple, actionable SMART goals you can actually complete."
              icon={<Sparkles className="w-8 h-8" />}
              gradient="from-cyan-500 to-green-500"
            />

            <FeatureCard
              position="bottom-right"
              number="04"
              title="Gamify"
              description="After finishing tasks, earn tokens as positive feedback. Build momentum and replace anxiety with achievement."
              icon={<Trophy className="w-8 h-8" />}
              gradient="from-green-500 to-yellow-500"
            />
          </div>
        </div>

        {/* Key differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 text-center bg-dark-lighter border-white/10 hover:border-white/20 transition-colors">
              <Brain className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="font-bold text-lg mb-2">AI-Powered Breakdown</h3>
              <p className="text-sm text-gray-400">Lowers cognitive load</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 text-center bg-dark-lighter border-white/10 hover:border-white/20 transition-colors">
              <Heart className="w-12 h-12 mx-auto mb-4 text-pink-400" />
              <h3 className="font-bold text-lg mb-2">Builds Action Inertia</h3>
              <p className="text-sm text-gray-400">Focuses on the first step</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 text-center bg-dark-lighter border-white/10 hover:border-white/20 transition-colors">
              <Smile className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="font-bold text-lg mb-2">Positive Feedback Loop</h3>
              <p className="text-sm text-gray-400">Replaces anxiety with achievement</p>
            </Card>
          </motion.div>
        </div>
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
            .getElementById("how-it-works")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown className="w-8 h-8 text-emerald-400" />
      </motion.div>
    </section>
  );
}
