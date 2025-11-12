'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneMockup from '@/components/shared/PhoneMockup';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    label: 'DUMP',
    title: 'DUMP Your Anxiety',
    emoji: '🗑️',
    description: 'Type (or speak) whatever big, scary, overwhelming goal is making you procrastinate.',
    whatYouDo: 'Type (or speak) whatever big, scary, overwhelming goal is making you procrastinate.',
    examples: [
      'Run a full marathon by summer',
      'Finish my final year project',
      'Win this startup competition',
      'Finally learn Spanish'
    ],
    whatHappens: 'No judgment. No organization. Just get it out of your head and into the app. Takes 10 seconds.'
  },
  {
    id: 2,
    label: 'DECONSTRUCT',
    title: 'AI DECONSTRUCTS It',
    emoji: '🤖',
    description: 'Our specialized AI analyzes your goal and identifies the perfect first step.',
    whatHappens: 'Our specialized AI—trained on applied psychology and thousands of successful task completions—analyzes your goal and identifies the perfect first step.',
    criteria: [
      '✅ Completable in 5 minutes or less',
      '✅ Requires zero preparation',
      '✅ Creates tangible progress',
      '✅ Designed to break your specific procrastination pattern',
      '✅ Makes the next step obvious'
    ],
    processingTime: 'Less than 3 seconds'
  },
  {
    id: 3,
    label: 'LAUNCH',
    title: 'LAUNCH Into Action',
    emoji: '🎯',
    description: 'Tap "Start Now" and do the thing. That\'s it.',
    whatYouDo: 'Tap "Start Now" and do the thing. That\'s it.',
    features: [
      'Optional 5-minute countdown timer',
      'Distraction-free focus mode',
      'No other tasks visible—just this one action',
      'Complete it and tap "Done"'
    ],
    magic: [
      '✨ Instant celebration animation',
      '📊 See your progress toward the main goal',
      '🎨 Unlock a shareable "Proof of Work" card',
      '➡️ Get your next step automatically (if you want to keep going)'
    ],
    result: 'You\'ve broken the inertia. The hardest part is over. Your brain has tasted real achievement dopamine, and suddenly continuing feels easy.'
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
    // Disable auto-advance for better performance - user can manually navigate
    return;
  }, [isMobile]);

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const currentStep = steps[activeStep];

  return (
    <section id="how-it-works" className="min-h-screen py-16 md:py-20 lg:py-24 relative overflow-hidden bg-white">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-pink-50" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header with enhanced visibility */}
        <div className="text-center mb-12 md:mb-16 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            HOW IT WORKS
          </h2>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-purple-200">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 mb-2 md:mb-3 font-bold">
              From Stuck to Started in 60 Seconds
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              The 1-Minute Anxiety-to-Action Loop
            </p>
          </div>
        </div>

        {/* Step navigator */}
        <div className="w-full mb-12 md:mb-16">
          <div className="flex justify-start md:justify-center items-center gap-2 md:gap-4 overflow-x-auto py-6 px-4 -mx-4 md:mx-0 scrollbar-hide">
            {steps.map((step, index) => {
              return (
                <div key={step.id} className="flex items-center flex-shrink-0 first:ml-4 last:mr-4 md:first:ml-0 md:last:mr-0">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`flex flex-col items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-2xl transition-all border-2 ${
                      activeStep === index
                        ? 'bg-purple-600 border-purple-600 scale-110 text-white shadow-lg'
                        : 'bg-white border-gray-300 hover:border-purple-400 hover:shadow-md text-gray-700'
                    }`}
                  >
                    <span className="text-2xl sm:text-2xl md:text-3xl">{step.emoji}</span>
                    <span className={`text-xs sm:text-sm font-bold whitespace-nowrap ${activeStep === index ? 'text-white' : 'text-gray-900'}`}>{step.label}</span>
                  </button>
                  {index < steps.length - 1 && (
                    <motion.div
                      className="w-8 sm:w-10 md:w-12 lg:w-24 h-1 mx-1 sm:mx-1.5 md:mx-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex-shrink-0"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeStep > index ? 1 : 0.3, opacity: activeStep > index ? 1 : 0.3 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Animated demo area */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl md:rounded-3xl border-2 border-purple-200 p-4 sm:p-6 md:p-8 lg:p-12 min-h-[500px] md:min-h-[600px] shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center"
            >
              {/* Left: Visual */}
              <div className="relative flex justify-center">
                <PhoneMockup size="medium">
                  {/* Step-specific screenshots */}
                  {activeStep === 0 && (
                    <img
                      src="/screenshots/dump-it-out.png"
                      alt="Dump It Out - Enter your overwhelming goal"
                      className="w-full h-full object-cover object-top"
                    />
                  )}

                  {activeStep === 1 && (
                    <img
                      src="/screenshots/first-step.png"
                      alt="AI-generated first step"
                      className="w-full h-full object-cover object-top"
                    />
                  )}

                  {activeStep === 2 && (
                    <img
                      src="/screenshots/completion.png"
                      alt="Task completion celebration"
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </PhoneMockup>
              </div>

              {/* Right: Description */}
              <div>
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs sm:text-sm font-bold mb-3 sm:mb-4 border border-purple-200">
                  Step {activeStep + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-900">
                  {currentStep.emoji} {currentStep.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                  {currentStep.description}
                </p>

                {/* Step 1: DUMP */}
                {activeStep === 0 && (
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">What You Do:</h4>
                      <p className="text-sm sm:text-base text-gray-700">{currentStep.whatYouDo}</p>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Examples:</h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {currentStep.examples?.map((example, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3">
                            <span className="text-purple-500 text-lg sm:text-xl flex-shrink-0">•</span>
                            <span className="text-sm sm:text-base text-gray-700">&quot;{example}&quot;</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">What Happens:</h4>
                      <p className="text-sm sm:text-base text-gray-700">{currentStep.whatHappens}</p>
                    </div>
                  </div>
                )}

                {/* Step 2: DECONSTRUCT */}
                {activeStep === 1 && (
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">What Happens:</h4>
                      <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{currentStep.whatHappens}</p>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Not just any first step. The optimal one:</h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {currentStep.criteria?.map((criterion, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-sm sm:text-base text-gray-700">{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-purple-100 border-2 border-purple-300 rounded-xl p-3 sm:p-4">
                      <p className="text-purple-900 font-bold text-sm sm:text-base">
                        ⚡ Processing Time: {currentStep.processingTime}
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 3: LAUNCH */}
                {activeStep === 2 && (
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">What You Do:</h4>
                      <p className="text-sm sm:text-base text-gray-700">{currentStep.whatYouDo}</p>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">What Happens:</h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {currentStep.features?.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3">
                            <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Then the Magic:</h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {currentStep.magic?.map((magic, i) => (
                          <li key={i} className="text-sm sm:text-base text-gray-700">{magic}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-xl p-3 sm:p-4">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">The Result:</h4>
                      <p className="text-sm sm:text-base text-gray-700">{currentStep.result}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex items-center gap-3 sm:gap-4">
            <button
              onClick={handlePrevStep}
              className="p-2 sm:p-3 rounded-full hover:bg-white/20 bg-white/10 transition border border-purple-200"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </button>

            <div className="flex-1 h-2 bg-white/50 rounded-full overflow-hidden border border-purple-200">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <button
              onClick={handleNextStep}
              className="p-2 sm:p-3 rounded-full hover:bg-white/20 bg-white/10 transition border border-purple-200"
              aria-label="Next step"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
