'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="py-20 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Contact
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-white/90 text-base md:text-lg mb-8 max-w-3xl"
      >
        I'm currently looking to join a cross-functional team that values building innovative web solutions, or have a project in mind? Let's connect and build something amazing together.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        href="mailto:brhimoonswork@gmail.com"
        className="text-purple-400 hover:text-purple-300 text-lg md:text-xl mb-8 inline-block transition-colors"
      >
        brhimoonswork@gmail.com
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex gap-4 mt-8"
      >
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-glow flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        >
          <FaLinkedin className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-glow flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        >
          <FaGithub className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-glow flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        >
          <FaInstagram className="w-6 h-6 text-white" />
        </a>
      </motion.div>
    </section>
  )
}
