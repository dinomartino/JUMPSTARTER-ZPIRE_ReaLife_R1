'use client';

import { motion } from 'framer-motion';
import FeatureCard from '@/components/shared/FeatureCard';
import PhoneMockup from '@/components/shared/PhoneMockup';
import { BarChart3, Bell, Sparkles, Trophy, Brain, Heart, Smile, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SparklesCore } from '@/components/ui/shadcn-io/sparkles';
import { ColourfulText } from '@/components/ui/shadcn-io/colourful-text';

export default function Solution() {
  return (
    <section id="solution" className="min-h-screen py-24 relative overflow-hidden">
      {/* Purple/Pink gradient background like Hero */}
      <div className="absolute inset-0 bg-dark" />

      {/* Sparkles filling entire section */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="solution-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white relative z-20 mb-8 pt-12"
      >
        Meet <ColourfulText
          text="Scrolless"
          interval={3000}
          animationDuration={0.8}
          colors={[
            'rgb(196, 181, 253)', // purple-300
            'rgb(167, 139, 250)', // purple-400
            'rgb(252, 165, 165)', // red-300
            'rgb(251, 207, 232)', // pink-200
            'rgb(244, 114, 182)', // pink-400

          ]}
        />
      </motion.h1>

      {/* Gradients centered under heading */}
      <div className="relative z-20 w-full mb-16">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] max-w-]">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-400 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-400 to-transparent h-px w-1/4" />
        </div>

      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl text-gray-200 text-center mb-24 max-w-3xl mx-auto relative z-20 px-8"
      >
        Your AI-powered digital wellness coach that identifies, notifies, and helps you modify habits for a healthier digital life.
      </motion.p>

      <div className="container mx-auto px-8 relative z-10">

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-x-[480px] lg:absolute lg:inset-0 lg:top-0">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <Card className="relative p-8 text-center bg-white/90 backdrop-blur-xl border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-5" />

              {/* Icon with gradient background */}
              <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>

              <h3 className="relative z-10 font-bold text-xl mb-2 text-gray-900">AI-Powered Breakdown</h3>
              <p className="relative z-10 text-base text-gray-600">Lowers cognitive load</p>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <Card className="relative p-8 text-center bg-white/90 backdrop-blur-xl border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-500 opacity-5" />

              {/* Icon with gradient background */}
              <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>

              <h3 className="relative z-10 font-bold text-xl mb-2 text-gray-900">Builds Action Inertia</h3>
              <p className="relative z-10 text-base text-gray-600">Focuses on the first step</p>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <Card className="relative p-8 text-center bg-white/90 backdrop-blur-xl border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-5" />

              {/* Icon with gradient background */}
              <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                <Smile className="w-8 h-8 text-white" />
              </div>

              <h3 className="relative z-10 font-bold text-xl mb-2 text-gray-900">Positive Feedback Loop</h3>
              <p className="relative z-10 text-base text-gray-600">Replaces anxiety with achievement</p>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
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
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
}
