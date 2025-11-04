'use client';

import { ReactNode, memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatCardProps {
  number: string | ReactNode;
  label: string;
  icon: ReactNode;
  gradient: string;
  suffix?: string;
}

const StatCard = memo(function StatCard({ number, label, icon, gradient, suffix = '' }: StatCardProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
      className="relative group"
    >
      {/* Background card with glass effect */}
      <div className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-gray-200 shadow-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-gray-300 group-hover:-translate-y-2 gpu-accelerated h-full min-h-[400px] flex flex-col">
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

        {/* Decorative corner element */}
        <div className={`absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br ${gradient} rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon container with gradient background */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.5 }}
            className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
          >
            <div className="text-white text-4xl">{icon}</div>
          </motion.div>

          {/* Number with animated underline */}
          <div className="mb-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent inline-block"
            >
              {number}
              {suffix}
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`h-1.5 w-20 bg-gradient-to-r ${gradient} rounded-full mt-2 origin-left`}
            />
          </div>

          {/* Label with better typography */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-gray-700 leading-relaxed font-medium mt-auto"
          >
            {label}
          </motion.p>
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Bottom glow effect */}
      <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r ${gradient} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30`} />
    </motion.div>
  );
});

export default StatCard;
