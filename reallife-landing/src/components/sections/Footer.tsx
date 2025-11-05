'use client';

import { Instagram, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-lighter border-t border-white/10">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section - Takes more space */}
            <div className="lg:col-span-5">
                <div className="text-4xl font-bold gradient-text mb-4">
                  ReaLife
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                  Breaking free from endless scrolling. Building a future where technology serves life, not replaces it.
                </p>

                {/* Newsletter Signup */}
                <div className="mb-8">
                  <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none transition text-sm text-white placeholder:text-gray-500"
                    />
                    <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500 flex items-center justify-center transition-all group"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                    </a>
                    <a
                      href="#"
                      className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500 flex items-center justify-center transition-all group"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                    </a>
                    <a
                      href="#"
                      className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500 flex items-center justify-center transition-all group"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                    </a>
                    <a
                      href="mailto:hello@reallife.app"
                      className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500 flex items-center justify-center transition-all group"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                    </a>
                  </div>
                </div>
            </div>

            {/* Links Section - Organized in 3 columns */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Product */}
              <div>
                <h4 className="font-bold text-white mb-4">Product</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a href="#problem" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                      The Problem
                    </a>
                  </li>
                  <li>
                    <a href="#solution" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                      Our Solution
                    </a>
                  </li>
                 
                  <li>
                    <a href="#how-it-works" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                      How It Works
                    </a>
                  </li>
                   <li>
                    <a href="#mission" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                      Our Mission
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-bold text-white mb-4">Company</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                      About ZPIRE
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="#waitlist" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                      Join Beta
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-bold text-white mb-4">Legal</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2025 ReaLife. Made with <span className="text-purple-400">💜</span> for ZPIRE Jumpstarter Competition
            </p>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500 text-gray-400 hover:text-white transition-all group"
              aria-label="Back to top"
            >
              <span className="text-sm font-medium">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
