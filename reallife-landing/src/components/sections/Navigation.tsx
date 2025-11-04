'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md bg-dark/80 border-b border-white/10' : ''
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-bold text-white cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ReaLife
          </motion.div>

          {/* Desktop Nav Links */}
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

          {/* Desktop CTA Button */}
          <Button
            className="hidden md:block bg-white/50 text-dark hover:bg-gray-200/50 transition-colors"
            onClick={() => handleNavClick('waitlist')}
          >
            Join Waitlist
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-dark/95 backdrop-blur-lg" />

            {/* Menu Content */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative flex flex-col items-center justify-center h-full gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href="#problem"
                onClick={() => handleNavClick('problem')}
                className="text-2xl text-gray-300 hover:text-white transition-colors"
              >
                The Problem
              </a>
              <a
                href="#solution"
                onClick={() => handleNavClick('solution')}
                className="text-2xl text-gray-300 hover:text-white transition-colors"
              >
                Our Solution
              </a>
              <a
                href="#how-it-works"
                onClick={() => handleNavClick('how-it-works')}
                className="text-2xl text-gray-300 hover:text-white transition-colors"
              >
                How It Works
              </a>

              {/* Mobile CTA Button */}
              <Button
                size="lg"
                className="mt-4 bg-white/50 text-dark hover:bg-gray-200/50 transition-colors px-8"
                onClick={() => handleNavClick('waitlist')}
              >
                Join Waitlist
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
