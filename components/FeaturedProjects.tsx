'use client'

import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  mockupPosition: 'left' | 'right'
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce web application built with Next.js and TypeScript. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Utilizes MongoDB for data storage and includes real-time inventory management and order tracking.',
    mockupPosition: 'right',
  },
  {
    title: 'Task Management App',
    description: 'A modern task management application built with React and Node.js. Features drag-and-drop functionality, real-time collaboration, task categorization, deadline tracking, and team workspace management. Includes user authentication, cloud storage, and responsive design for mobile and desktop.',
    mockupPosition: 'left',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-4 md:px-20">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`flex flex-col ${project.mockupPosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 mb-20`}
        >
          {/* Content */}
          <div className="flex-1">
            <p className="text-purple-400 text-sm mb-2">Featured Project</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex gap-2">
              <FaStar className="w-5 h-5 text-yellow-400" />
              <FaStar className="w-5 h-5 text-yellow-400" />
            </div>
          </div>

          {/* Mockup */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-2xl overflow-hidden border-glow"
            >
              {/* Browser Bar */}
              <div className="bg-gray-200 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 mx-4">
                  {index === 0 ? 'https://ecommerce-app.com' : 'https://taskmanager-app.com'}
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-8 bg-white min-h-[300px]">
                {index === 0 ? (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      E-Commerce Platform
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-lg font-semibold mb-2">Product Catalog</p>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="border border-gray-200 rounded p-3 bg-gray-50">
                          <div className="h-20 bg-gray-200 rounded mb-2"></div>
                          <p className="text-xs font-semibold">Product Card</p>
                        </div>
                        <div className="border border-gray-200 rounded p-3 bg-gray-50">
                          <div className="h-20 bg-gray-200 rounded mb-2"></div>
                          <p className="text-xs font-semibold">Product Card</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Task Management
                    </h3>
                    <div className="space-y-3">
                      <div className="border border-gray-300 rounded-lg p-4 bg-blue-50">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-semibold text-gray-800">Task Item</p>
                          <span className="text-xs text-gray-500">In Progress</span>
                        </div>
                        <p className="text-xs text-gray-600">Task description and details...</p>
                      </div>
                      <div className="border border-gray-300 rounded-lg p-4 bg-green-50">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-semibold text-gray-800">Task Item</p>
                          <span className="text-xs text-gray-500">Completed</span>
                        </div>
                        <p className="text-xs text-gray-600">Task description and details...</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
