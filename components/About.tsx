'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 px-4 md:px-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-white/90 text-base md:text-lg max-w-4xl leading-relaxed"
      >
        A passionate Software Engineering student specializing in web development. I build modern, responsive web applications using cutting-edge technologies. With a focus on clean code, user experience, and performance, I create digital solutions that solve real-world problems and deliver exceptional user experiences.
      </motion.p>
    </section>
  )
}
