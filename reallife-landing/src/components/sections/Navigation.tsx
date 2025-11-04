'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-dark/80 border-b border-white/10' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold gradient-text cursor-pointer"
        >
          RealLife
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#problem"
            className="text-gray-300 hover:text-white transition-colors"
          >
            The Problem
          </a>
          <a
            href="#solution"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Our Solution
          </a>
          <a
            href="#how-it-works"
            className="text-gray-300 hover:text-white transition-colors"
          >
            How It Works
          </a>
        </div>

        {/* CTA Button */}
        <Button
          className="bg-gradient-to-r from-purple-deep to-pink-bright hover:opacity-90 transition-opacity"
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join Waitlist
        </Button>
      </div>
    </motion.nav>
  );
}
