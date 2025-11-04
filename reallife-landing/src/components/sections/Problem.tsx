'use client';

import { motion } from 'framer-motion';
import StatCard from '@/components/shared/StatCard';
import PhoneMockup from '@/components/shared/PhoneMockup';
import { Users, Eye, Clock, ChevronDown } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ColourfulText } from '@/components/ui/shadcn-io/colourful-text';
import { useState, useEffect } from 'react';

export default function Problem() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
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
    <section id="problem" className="min-h-screen py-24 md:py-32 relative bg-gradient-to-b from-red-50/30 via-orange-50/20 to-red-50/30 overflow-hidden" ref={ref}>
      {/* Warning themed accent glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/30 rounded-full blur-3xl" />

      {/* Warning icon decoration */}
      <div className="absolute top-8 right-8 opacity-5">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-red-500">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>

      <div className="container mx-auto text-center px-4 md:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-gray-900"
        >
          You&apos;re Not Weak.
          <br />
          <span>You're </span>
          <ColourfulText
            text="Trapped."
            colors={[
              'rgb(147, 51, 234)',  // purple-600
              'rgb(219, 39, 119)',  // pink-600
              'rgb(236, 72, 153)',  // pink-500
              'rgb(249, 115, 22)',  // orange-500
              'rgb(168, 85, 247)',  // purple-500
              'rgb(236, 72, 153)',  // pink-500
            ]}
            interval={3000}
            animationDuration={0.6}
            staggerDelay={0.08}
          />
        </motion.h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto mb-20">
          <StatCard
            number="210M"
            label="people worldwide addicted to social media"
            icon={<Users className="w-12 h-12" />}
            gradient="from-purple-500 to-pink-500"
          />
          <StatCard
            number="200B"
            label="daily views on YouTube Shorts alone"
            icon={<Eye className="w-12 h-12" />}
            gradient="from-pink-500 to-orange-500"
          />
          <StatCard
            number={inView ? <CountUp end={4.5} decimals={1} duration={2} preserveValue={true} redraw={false} /> : 0}
            label="hours lost per day to mindless scrolling"
            icon={<Clock className="w-12 h-12" />}
            gradient="from-orange-500 to-red-500"
            suffix=" hrs"
          />
        </div>

        {/* Animated phone mockups */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center max-w-4xl mx-auto">
          {/* Scrolling mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <PhoneMockup>
              <div className="h-full bg-gradient-to-b from-gray-100 to-gray-200 p-4 overflow-hidden">
                {/* Simulate endless scroll */}
                <motion.div
                  animate={{ y: [0, isMobile ? -500 : -1000, 0] }}
                  transition={{ duration: isMobile ? 10 : 15, repeat: Infinity, ease: 'linear' }}
                  className="space-y-4 gpu-accelerated will-change-transform"
                >
                  {Array.from({ length: isMobile ? 5 : 10 }).map((_, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
                        <div className="h-3 bg-gray-300 rounded w-24" />
                      </div>
                      <div className="h-48 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg mb-2" />
                      <div className="h-2 bg-gray-300 rounded w-full mb-1" />
                      <div className="h-2 bg-gray-300 rounded w-3/4" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </PhoneMockup>
            <p className="text-gray-600 mt-4 text-sm md:text-base text-center font-medium">
              Endless Scrolling
            </p>
          </motion.div>

          {/* Swiping mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <PhoneMockup>
              <div className="h-full bg-black overflow-hidden relative">
                {/* Simulate swipe-through stories/reels */}
                <motion.div
                  animate={{ x: ['0%', '-100%', '-200%', '-300%'] }}
                  transition={{
                    duration: isMobile ? 12 : 16,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop'
                  }}
                  className="absolute inset-0 flex gpu-accelerated will-change-transform"
                >
                  {/* Story/Reel cards - duplicated for seamless loop */}
                  {[
                    { from: 'from-pink-500', to: 'to-purple-600' },
                    { from: 'from-blue-500', to: 'to-cyan-600' },
                    { from: 'from-orange-500', to: 'to-red-600' },
                    { from: 'from-pink-500', to: 'to-purple-600' }, // Duplicate for seamless loop
                  ].map((colors, i) => (
                    <div
                      key={i}
                      className="min-w-full h-full flex items-center justify-center relative"
                    >
                      <div className={`w-full h-full bg-gradient-to-br ${colors.from} ${colors.to} flex flex-col items-center justify-center text-white p-8`}>
                        {/* Story content */}
                        <div className="absolute top-4 left-4 right-4 flex gap-1">
                          {[0, 1, 2].map((bar) => (
                            <div
                              key={bar}
                              className={`h-1 flex-1 rounded-full ${
                                bar <= (i % 3) ? 'bg-white' : 'bg-white/30'
                              }`}
                            />
                          ))}
                        </div>

                        <div className="text-center">
                          <div className="w-20 h-20 bg-white/20 rounded-full mb-4 mx-auto" />
                          <div className="h-4 bg-white/40 rounded w-32 mb-2 mx-auto" />
                          <div className="h-3 bg-white/30 rounded w-24 mx-auto" />
                        </div>

                        {/* Swipe indicator */}
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute bottom-8 right-8"
                        >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </PhoneMockup>
            <p className="text-gray-600 mt-4 text-sm md:text-base text-center font-medium">
              Compulsive Swiping
            </p>
          </motion.div>
        </div>

        {/* Description text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-12 text-base md:text-lg max-w-2xl mx-auto text-center"
        >
          This digital drain leads to loss of ambition, declining focus,
          and fuels anxiety and low self-worth.
        </motion.p>
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
            .getElementById("solution")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown className="w-8 h-8 text-red-400" />
      </motion.div>
    </section>
  );
}
