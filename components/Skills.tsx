'use client'

import { motion } from 'framer-motion'
import { 
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiCplusplus
} from 'react-icons/si'

const tools = [
  { icon: SiHtml5, name: 'HTML' },
  { icon: SiCss3, name: 'CSS' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiCplusplus, name: 'C++ (DSA)' },
]

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-20 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-white/90 text-lg md:text-xl mb-12 max-w-3xl mx-auto"
      >
        I'm currently looking to join a cross-functional team that values building innovative web solutions and improving people's lives through technology.
      </motion.p>

      {/* Tool Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6 mb-16"
      >
        {tools.map((tool, index) => {
          const Icon = tool.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-glow flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>
          )
        })}
      </motion.div>

      {/* Sigma Symbol with Orbits */}
      <div className="relative flex items-center justify-center my-16 h-96">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-80 h-80 md:w-96 md:h-96"
        >
          {/* Outer Orbit Ring - 3 dots */}
          <div className="absolute inset-0 border border-purple-500/20 rounded-full animate-spin-slow">
            <div className="orbit-dot"></div>
          </div>
          <div className="absolute inset-0 border-transparent rounded-full animate-spin-slow" style={{ transform: 'rotate(120deg)' }}>
            <div className="orbit-dot"></div>
          </div>
          <div className="absolute inset-0 border-transparent rounded-full animate-spin-slow" style={{ transform: 'rotate(240deg)' }}>
            <div className="orbit-dot"></div>
          </div>
          
          {/* Middle Orbit Ring - 2 dots */}
          <div 
            className="absolute border border-blue-500/20 rounded-full animate-spin-reverse"
            style={{ 
              width: '75%', 
              height: '75%', 
              top: '12.5%', 
              left: '12.5%',
            }}
          >
            <div className="orbit-dot bg-blue-400" style={{ boxShadow: '0 0 6px rgba(96, 165, 250, 0.6)' }}></div>
          </div>
          <div 
            className="absolute border-transparent rounded-full animate-spin-reverse"
            style={{ 
              width: '75%', 
              height: '75%', 
              top: '12.5%', 
              left: '12.5%',
              transform: 'rotate(180deg)',
            }}
          >
            <div className="orbit-dot bg-blue-400" style={{ boxShadow: '0 0 6px rgba(96, 165, 250, 0.6)' }}></div>
          </div>
          
          {/* Inner Orbit Ring - 1 dot */}
          <div 
            className="absolute border border-purple-500/30 rounded-full animate-spin-slow"
            style={{ 
              width: '50%', 
              height: '50%', 
              top: '25%', 
              left: '25%',
              animationDuration: '10s',
            }}
          >
            <div className="orbit-dot"></div>
          </div>
          
          {/* Sigma Symbol */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-7xl md:text-9xl font-bold text-purple-400 glow-purple">
              Σ
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
