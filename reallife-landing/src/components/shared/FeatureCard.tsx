'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeatureCardProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
}

export default function FeatureCard({
  position,
  number,
  title,
  description,
  icon,
  gradient
}: FeatureCardProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const getInitialPosition = () => {
    switch (position) {
      case 'top-left': return { x: -100, y: -50 };
      case 'top-right': return { x: 100, y: -50 };
      case 'bottom-left': return { x: -100, y: 50 };
      case 'bottom-right': return { x: 100, y: 50 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative p-8 rounded-2xl bg-dark-lighter border border-white/10 backdrop-blur group hover:border-white/20 transition-colors"
    >
      {/* Number badge */}
      <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center font-bold text-lg shadow-lg`}>
        {number}
      </div>

      {/* Icon */}
      <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20 flex items-center justify-center`}>
        <div className="text-3xl">{icon}</div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
