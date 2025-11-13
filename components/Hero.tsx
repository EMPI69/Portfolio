'use client'

import { motion } from 'framer-motion'
import TypingEffect from './TypingEffect'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-blue-900/50 to-black -z-10" />
      
      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 self-start md:ml-20 font-semibold"
      >
        Hello! I Am Aditya Mishra
      </motion.p>

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mb-8"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full glow-purple bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center animate-float">
          {/* Avatar placeholder - replace with actual avatar image */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border-2 border-purple-500/50">
            <svg className="w-24 h-24 md:w-32 md:h-32 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 px-4"
      >
        A Developer who{' '}
        <span className="relative inline-block">
          <span className="text-glow">builds</span>
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
        </span>
        {' '}digital experiences...
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-sm md:text-lg text-white/70 text-center mb-8 px-4"
      >
        Transforming ideas into interactive, user-friendly web applications that make a difference.
      </motion.p>

      {/* Role Statement with Typing Effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6"
      >
        <TypingEffect text="I'm a Software Engineer." speed={100} />
      </motion.div>

      {/* Current Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-white/80"
      >
        <span className="text-base md:text-lg">Currently, I'm a Software Engineering student.</span>
      </motion.div>
    </section>
  )
}
