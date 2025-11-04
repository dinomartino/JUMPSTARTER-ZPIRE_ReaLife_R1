'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatCardProps {
  number: string | ReactNode;
  label: string;
  icon: ReactNode;
  gradient: string;
  suffix?: string;
}

export default function StatCard({ number, label, icon, gradient, suffix = '' }: StatCardProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
      className={`relative p-8 rounded-2xl bg-gradient-to-br ${gradient} bg-opacity-10 border border-white/10 backdrop-blur group hover:scale-105 transition-transform`}
    >
      {/* Icon */}
      <div className="text-6xl mb-4 opacity-80">{icon}</div>

      {/* Number */}
      <div className="text-5xl font-bold mb-2">
        {number}
        {suffix}
      </div>

      {/* Label */}
      <p className="text-sm text-gray-400 leading-relaxed">{label}</p>

      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 blur-xl transition-opacity group-hover:opacity-20 pointer-events-none`} />
    </motion.div>
  );
}
