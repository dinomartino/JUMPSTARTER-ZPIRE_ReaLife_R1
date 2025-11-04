'use client';

import { ReactNode, memo } from 'react';
import { motion } from 'framer-motion';
import { Iphone } from '@/components/ui/iphone';

interface PhoneMockupProps {
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const PhoneMockup = memo(function PhoneMockup({ children, size = 'medium', className = '' }: PhoneMockupProps) {
  const sizeClasses = {
    small: 'h-[400px]',
    medium: 'h-[600px]',
    large: 'h-[700px]'
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative inline-block">
        <Iphone className={`${sizeClasses[size]} w-auto`}>
          {children}
        </Iphone>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl -z-10 scale-90" />
    </motion.div>
  );
});

export default PhoneMockup;
