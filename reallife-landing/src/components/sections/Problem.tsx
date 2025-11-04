'use client';

import { motion } from 'framer-motion';
import StatCard from '@/components/shared/StatCard';
import PhoneMockup from '@/components/shared/PhoneMockup';
import { Users, Eye, Clock } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ColourfulText } from '@/components/ui/shadcn-io/colourful-text';

export default function Problem() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="problem" className="min-h-screen py-24 relative bg-gradient-to-b from-white via-gray-50 to-white" ref={ref}>
      {/* Subtle accent glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
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
            number={inView ? <CountUp end={4.5} decimals={1} duration={2} /> : 0}
            label="hours lost per day to mindless scrolling"
            icon={<Clock className="w-12 h-12" />}
            gradient="from-orange-500 to-red-500"
            suffix=" hrs"
          />
        </div>

        {/* Animated phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-sm mx-auto"
        >
          <PhoneMockup>
            <div className="h-full bg-gradient-to-b from-gray-100 to-gray-200 p-4 overflow-hidden">
              {/* Simulate endless scroll */}
              <motion.div
                animate={{ y: [0, -1000, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="space-y-4"
              >
                {Array.from({ length: 10 }).map((_, i) => (
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

              {/* Time overlay */}
              <div className="absolute top-8 right-8 bg-red-500 text-white px-4 py-2 rounded-full font-mono font-bold shadow-lg">
                <CountUp end={15} duration={3} /> min
              </div>
            </div>
          </PhoneMockup>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-8 text-base md:text-lg max-w-lg mx-auto"
          >
            This digital drain leads to loss of ambition, declining focus,
            <br />
            and fuels anxiety and low self-worth.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
