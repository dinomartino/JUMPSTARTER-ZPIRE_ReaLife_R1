'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SparklesCore } from '@/components/ui/shadcn-io/sparkles';
import { ColourfulText } from '@/components/ui/shadcn-io/colourful-text';
import PhoneMockup from '@/components/shared/PhoneMockup';

export default function Solution() {
  return (
    <section id="solution" className="min-h-screen py-24 relative overflow-hidden">
      {/* Purple/Pink gradient background like Hero */}
      <div className="absolute inset-0 bg-dark" />

      {/* Sparkles filling entire section - Reduced density for performance */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="solution-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Main heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white relative z-20 mb-8 pt-12">
        OUR SOLUTION
      </h1>

      {/* Gradients centered under heading */}
      <div className="relative z-20 w-full mb-16">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] max-w-]">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-400 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-400 to-transparent h-px w-1/4" />
        </div>

      </div>

      {/* Hero tagline */}
      <div className="text-center mb-8 max-w-3xl mx-auto relative z-20 px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Your Personal Activation Engine
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          <ColourfulText
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
          /> breaks down overwhelming goals into 5-minute actions you can take right now.
        </p>
      </div>

      {/* Main solution showcase with phone mockup */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20 mb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Phone Mockup with actual screenshot */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup size="large">
              <img
                src="/screenshots/first-step.png"
                alt="Scrolless app showing first step"
                className="w-full h-full object-cover object-top"
              />
            </PhoneMockup>
          </div>

          {/* Right: Explanation boxes */}
          <div className="space-y-6">
            {/* Problem box */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-3">⚡ The Problem</h4>
              <p className="text-gray-300 leading-relaxed">
                Big goals have <span className="text-red-400 font-semibold">HIGH activation energy</span>. Your brain chooses the path of least resistance—scrolling instead of starting.
              </p>
            </div>

            {/* Solution box */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <h4 className="text-lg font-bold text-white mb-3">🚀 Our Solution</h4>
              <p className="text-gray-300 leading-relaxed mb-3">
                We don't give you another to-do list. <span className="text-white font-semibold">We launch you.</span>
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our AI identifies the perfect 5-minute first step—easy to start, meaningful enough to build momentum.
              </p>
            </div>

            {/* How it works mini */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4">💡 How It Works</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🗑️</span>
                  <div>
                    <div className="font-semibold text-white">Dump your anxiety</div>
                    <div className="text-sm text-gray-400">Type your overwhelming goal</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <div className="font-semibold text-white">AI deconstructs it</div>
                    <div className="text-sm text-gray-400">Get the perfect first step in 3s</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <div className="font-semibold text-white">Launch into action</div>
                    <div className="text-sm text-gray-400">Complete & build momentum</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits - 3 Column Layout */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center">Key Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="relative group">
            <Card className="relative p-8 text-center bg-white/90 backdrop-blur-xl border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-5" />

              {/* Icon/Emoji */}
              <div className="relative z-10 text-5xl mb-4">🚀</div>

              <h3 className="relative z-10 font-bold text-xl mb-3 text-gray-900">Zero Friction Starting</h3>
              <p className="relative z-10 text-base text-gray-600 leading-relaxed">
                No more staring at blank pages. Get the exact action to take in 3 seconds—small enough to start, big enough to matter.
              </p>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </Card>
          </div>

          <div className="relative group">
            <Card className="relative p-8 text-center bg-white/90 backdrop-blur-xl border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-500 opacity-5" />

              {/* Icon/Emoji */}
              <div className="relative z-10 text-5xl mb-4">🧠</div>

              <h3 className="relative z-10 font-bold text-xl mb-3 text-gray-900">AI-Powered Psychology</h3>
              <p className="relative z-10 text-base text-gray-600 leading-relaxed">
                Our AI applies behavioral science to find the first step your brain won't resist—calibrated to your energy, context, and past patterns.
              </p>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </Card>
          </div>

          <div className="relative group">
            <Card className="relative p-8 text-center bg-white/90 backdrop-blur-xl border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-5" />

              {/* Icon/Emoji */}
              <div className="relative z-10 text-5xl mb-4">💪</div>

              <h3 className="relative z-10 font-bold text-xl mb-3 text-gray-900">Real Achievement, Real Dopamine</h3>
              <p className="relative z-10 text-base text-gray-600 leading-relaxed">
                Trade cheap likes for actual progress. Every micro-win builds momentum, replacing anxiety with the satisfaction of getting shit done.
              </p>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </Card>
          </div>
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
