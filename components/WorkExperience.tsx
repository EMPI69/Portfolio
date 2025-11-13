'use client'

import { motion } from 'framer-motion'
import { FaStar, FaLightbulb, FaMountain, FaNetworkWired } from 'react-icons/fa'

interface WorkCard {
  icon: React.ReactNode
  title: string
  role: string
  period: string
}

const workExperiences: WorkCard[] = [
  {
    icon: <FaStar className="w-8 h-8 text-purple-400" />,
    title: 'E-Commerce Platform',
    role: 'Full Stack Developer',
    period: '2023 - Present',
  },
  {
    icon: <FaLightbulb className="w-8 h-8 text-yellow-400" />,
    title: 'Task Management App',
    role: 'Frontend Developer',
    period: '2022 - 2023',
  },
  {
    icon: <FaMountain className="w-8 h-8 text-green-400" />,
    title: 'Weather Dashboard',
    role: 'Web Developer',
    period: '2022 - 2023',
  },
  {
    icon: <FaNetworkWired className="w-8 h-8 text-blue-400" />,
    title: 'Social Media API',
    role: 'Backend Developer',
    period: '2023 - Present',
  },
]

export default function WorkExperience() {
  return (
    <section className="py-20 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Work Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        {workExperiences.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-glow rounded-lg p-6 hover:from-purple-900/50 hover:to-blue-900/50 transition-all duration-300 cursor-pointer group"
          >
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
              {work.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{work.title}</h3>
            <p className="text-purple-300 mb-2">{work.role}</p>
            <p className="text-white/60 text-sm mb-4">{work.period}</p>
            <button className="text-purple-400 hover:text-purple-300 underline text-sm transition-colors">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
