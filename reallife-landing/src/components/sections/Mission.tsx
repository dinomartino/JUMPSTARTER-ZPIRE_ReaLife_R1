'use client';

import { motion } from 'framer-motion';
import { WavyBackground } from '@/components/ui/shadcn-io/wavy-background';
import { GradientText } from '@/components/ui/shadcn-io/gradient-text';

export default function Mission() {

  return (
    <section id="mission" className="relative flex items-center justify-center overflow-hidden py-16 md:py-20">
      <WavyBackground
        containerClassName="absolute inset-0"
        className="absolute inset-0"
        colors={['#a855f7', '#ec4899', '#f97316', '#8b5cf6', '#d946ef']}
        waveWidth={80}
        backgroundFill="#0a0a0a"
        blur={12}
        speed="slow"
        waveOpacity={0.3}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark/80" />
      </WavyBackground>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-20 max-w-6xl mx-auto text-center px-6"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-sm font-medium text-purple-300">Our Mission</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
        >
          <span className="text-white">This Isn&apos;t Just an App.</span>
          <br />
          <GradientText
            text="It's a Movement."
            gradient="linear-gradient(90deg, #a855f7 0%, #ec4899 25%, #f97316 50%, #ec4899 75%, #a855f7 100%)"
            neon={false}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          />
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4 text-xl md:text-2xl text-gray-300 leading-relaxed mb-12"
        >
          <p className="font-medium">
            Traditional screen-time apps{' '}
            <span className="text-red-400 font-bold">shame you</span>. We{' '}
            <span className="text-green-400 font-bold">empower you</span>.
          </p>
          <p className="text-lg md:text-xl text-gray-400">
            We&apos;re starting with HK university students—the generation that deserves better than dopamine traps designed to steal your potential.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white mt-6">
            Together, we&apos;re building a future where technology serves life, not replaces it.
          </p>
        </motion.div>

        {/* Vision Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            {
              title: 'Reclaim Your Time',
              description: 'Take back hours from mindless scrolling',
              color: 'from-purple-500 to-pink-500'
            },
            {
              title: 'Achieve Your Goals',
              description: 'Turn intentions into real-world actions',
              color: 'from-pink-500 to-orange-500'
            },
            {
              title: 'Transform Your Life',
              description: 'Join a community reclaiming their potential',
              color: 'from-orange-500 to-purple-500'
            }
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${card.color} blur-2xl`} />

              <div className="relative z-10 flex flex-col items-center text-center">
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${card.color}`}>
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${card.color} opacity-10 blur-2xl rounded-full`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
