'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Mission() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-purple-900/60 to-dark" />

      {/* Animated orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto text-center px-8"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
          This Isn&apos;t Just an App.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
            It&apos;s a Movement.
          </span>
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-gray-200 leading-relaxed">
          <p>
            Traditional screen-time apps <strong className="text-white">shame you</strong>. We <strong className="text-white">empower you</strong>.
          </p>
          <p>
            We&apos;re starting with HK university students—the generation that deserves better than dopamine traps designed to steal your potential.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-white">
            Together, we&apos;re building a future where technology serves life, not replaces it.
          </p>
        </div>

        {/* Stats ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {inView && <CountUp end={12847} duration={2.5} separator="," />}
            </div>
            <div className="text-sm text-gray-400">Hours Reclaimed</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {inView && <CountUp end={3291} duration={2.5} separator="," />}
            </div>
            <div className="text-sm text-gray-400">Goals Achieved</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {inView && <CountUp end={587} duration={2.5} separator="," />}
            </div>
            <div className="text-sm text-gray-400">Lives Changed</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
