'use client';

import { motion } from 'framer-motion';
import StatCard from '@/components/shared/StatCard';
import PhoneMockup from '@/components/shared/PhoneMockup';
import { Users, Eye, Clock } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Problem() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="problem" className="min-h-screen py-24 relative" ref={ref}>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent" />

      <div className="container mx-auto text-center px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-16"
        >
          You&apos;re Not Weak.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">
            You&apos;re Trapped.
          </span>
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
            className="text-gray-400 mt-8 text-lg max-w-lg mx-auto"
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
