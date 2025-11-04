'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PhoneMockupProps {
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function PhoneMockup({ children, size = 'medium', className = '' }: PhoneMockupProps) {
  const sizeClasses = {
    small: 'w-[240px] h-[480px]',
    medium: 'w-[320px] h-[680px]',
    large: 'w-[380px] h-[800px]'
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[50px] border-8 border-gray-800 bg-black shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-20" />

        {/* Screen content */}
        <div className="absolute inset-4 rounded-[42px] overflow-hidden bg-white">
          {children}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-purple-deep/30 to-pink-bright/30 blur-3xl -z-10" />
    </motion.div>
  );
}
