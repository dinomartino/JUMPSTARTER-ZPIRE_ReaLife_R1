'use client';

import { ReactNode, memo } from 'react';
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

const FeatureCard = memo(function FeatureCard({
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
      className="relative group"
    >
      {/* Card with white background and glass effect */}
      <div className="relative p-8 rounded-3xl bg-white/90 backdrop-blur-xl border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300">
        {/* Decorative gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 rounded-3xl`} />

        {/* Corner gradient glow */}
        <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${gradient} rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />

        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Number and Icon in a unified header */}
          <div className="flex items-center gap-3 mb-6">
            {/* Number badge */}
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 font-semibold text-xs text-gray-600">
              {number}
            </div>

            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 text-gray-700">
              {icon}
            </div>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        </div>
    </motion.div>
  );
});

export default FeatureCard;
