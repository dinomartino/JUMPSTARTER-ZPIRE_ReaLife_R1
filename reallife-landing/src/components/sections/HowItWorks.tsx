'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneMockup from '@/components/shared/PhoneMockup';
import { Check, ChevronLeft, ChevronRight, Smartphone, Bell, Sparkles, Trophy } from 'lucide-react';
import CountUp from 'react-countup';

const steps = [
  {
    id: 1,
    label: 'Detect',
    title: "You're scrolling on TikTok",
    description: "ReaLife monitors your screen time in real-time, detecting when you've been on distracting apps like TikTok or Instagram.",
    details: [
      'Non-invasive background tracking',
      'Respects your privacy - data stays on device',
      'You control which apps to monitor'
    ],
    icon: Smartphone
  },
  {
    id: 2,
    label: 'Notify',
    title: 'Get a gentle reminder',
    description: "After 15 minutes, you receive a thoughtful prompt: 'You've been scrolling. Ready to tackle that essay?'",
    details: [
      'Encouraging tone, never shaming',
      'Contextual to your current goals',
      'Customizable timing thresholds'
    ],
    icon: Bell
  },
  {
    id: 3,
    label: 'Break Down',
    title: 'AI creates your action plan',
    description: "The overwhelming task 'Write final essay' becomes: Step 1 - Research 3 sources (15 min). Suddenly, it's doable.",
    details: [
      'SMART goal methodology',
      'Time estimates for each step',
      'Prioritization based on deadlines'
    ],
    icon: Sparkles
  },
  {
    id: 4,
    label: 'Complete',
    title: 'Earn your achievement token',
    description: 'You complete the first step, earn a token, and see your progress bar grow. Dopamine, but from real accomplishment.',
    details: [
      'Visual progress tracking',
      'Collectible achievement tokens',
      'Builds positive momentum'
    ],
    icon: Trophy
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Disable auto-advance on mobile for better performance
    if (isMobile) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const currentStep = steps[activeStep];
  const Icon = currentStep.icon;

  return (
    <section id="how-it-works" className="min-h-screen py-24 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-8"
        >
          From Scrolling to Succeeding
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-400 text-center mb-24"
        >
          Watch how ReaLife transforms your digital habits in real-time
        </motion.p>

        {/* Step navigator */}
        <div className="flex justify-center items-center gap-2 md:gap-4 mb-16 overflow-x-auto pb-4">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`flex flex-col items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-110'
                      : 'bg-dark-lighter hover:bg-white/10'
                  }`}
                >
                  <StepIcon className="w-6 h-6" />
                  <span className="text-sm font-semibold whitespace-nowrap">{step.label}</span>
                </button>
                {index < steps.length - 1 && (
                  <motion.div
                    className="w-12 md:w-24 h-1 mx-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeStep > index ? 1 : 0.3, opacity: activeStep > index ? 1 : 0.3 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Animated demo area */}
        <div className="max-w-6xl mx-auto bg-dark-lighter rounded-3xl border border-white/10 p-8 md:p-12 min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              {/* Left: Visual */}
              <div className="relative flex justify-center">
                <PhoneMockup size="medium">
                  {/* Step-specific content */}
                  {activeStep === 0 && (
                    <div className="h-full bg-black overflow-hidden relative">
                      <motion.div
                        animate={{ y: [0, isMobile ? -1000 : -2000, 0] }}
                        transition={{ duration: isMobile ? 8 : 10, repeat: Infinity, ease: 'linear' }}
                        className="space-y-2 p-2 gpu-accelerated will-change-transform"
                      >
                        {Array.from({ length: isMobile ? 10 : 20 }).map((_, i) => (
                          <div key={i} className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg h-96 flex items-center justify-center text-white font-bold">
                            Video {i + 1}
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="h-full bg-gray-100 relative">
                      <div className="absolute inset-4 bg-white rounded-lg shadow-lg p-4">
                        <div className="grid grid-cols-4 gap-3">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="aspect-square bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl" />
                          ))}
                        </div>
                      </div>
                      <motion.div
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 20, opacity: 1 }}
                        transition={{ delay: 0.5, type: 'spring', bounce: 0.4 }}
                        className="absolute top-0 left-4 right-4 bg-white rounded-2xl shadow-2xl p-4 border-2 border-purple-500"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                            RL
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-gray-800 mb-1">ReaLife</div>
                            <div className="text-sm text-gray-600">
                              You&apos;ve been scrolling for 15 minutes. Ready to work on your goal?
                            </div>
                            <div className="flex gap-2 mt-3">
                              <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-lg text-xs">
                                Maybe Later
                              </button>
                              <button className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-xs font-semibold">
                                Let&apos;s Go!
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="h-full bg-white p-6 overflow-y-auto">
                      <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                        <h4 className="font-bold text-lg text-gray-800">Write final essay</h4>
                        <p className="text-sm text-gray-600">Due in 5 days</p>
                      </div>

                      <div className="flex items-center gap-2 mb-4 text-purple-600">
                        <Sparkles className="w-5 h-5 animate-pulse" />
                        <span className="text-sm font-semibold">AI breaking down task...</span>
                      </div>

                      <div className="space-y-3">
                        {[
                          { task: 'Research 3 sources', time: '15 min' },
                          { task: 'Create outline', time: '20 min' },
                          { task: 'Write introduction', time: '30 min' },
                          { task: 'Draft body paragraphs', time: '1 hr' }
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.3 }}
                            className="p-3 bg-green-50 border border-green-200 rounded-lg"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-800 text-sm">
                                Step {i + 1}: {item.task}
                              </span>
                              <span className="text-xs text-gray-600">~{item.time}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="h-full bg-white p-6 flex flex-col">
                      <div className="p-4 bg-green-50 border-2 border-green-500 rounded-xl mb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-gray-800">Research 3 sources</h4>
                            <p className="text-sm text-gray-600">~15 min</p>
                          </div>
                          <div className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold">
                            ✓ Done
                          </div>
                        </div>
                      </div>

                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: 'spring' }}
                        className="flex-1 flex flex-col items-center justify-center"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-5xl shadow-2xl mb-4"
                        >
                          🏆
                        </motion.div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Achievement Unlocked!</h3>
                        <p className="text-gray-600 mb-4">+1 Token earned</p>

                        <div className="w-full space-y-2">
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>Essay Progress</span>
                            <span>1/4 steps</span>
                          </div>
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '25%' }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-gradient-to-r from-green-400 to-blue-500"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </PhoneMockup>
              </div>

              {/* Right: Description */}
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-sm font-semibold mb-4">
                  Step {activeStep + 1}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">{currentStep.title}</h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                  {currentStep.description}
                </p>
                <ul className="space-y-3">
                  {currentStep.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-400">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="mt-12 flex items-center gap-4">
            <button
              onClick={handlePrevStep}
              className="p-3 rounded-full hover:bg-white/10 transition"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 h-2 bg-dark rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <button
              onClick={handleNextStep}
              className="p-3 rounded-full hover:bg-white/10 transition"
              aria-label="Next step"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
