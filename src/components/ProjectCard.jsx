import React from 'react'
import { motion } from 'framer-motion'

function ProjectCard(props) {
  const { src, title, desc, tech = [], link, category } = props;

  return (
    <motion.a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div 
        className='relative min-h-[400px] w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col'
        whileHover={{ 
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.2)",
          scale: 1.02
        }}
      >
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-md border border-white/20 rounded-full text-white">
            {category}
          </span>
        </div>

        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent z-10" />
          <motion.img 
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' 
            src={src} 
            alt={title}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7 }}
          />
          
          {/* Overlay with link icon */}
          <motion.div 
            className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.div
              className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow space-y-4">
          {/* Title */}
          <h2 className='text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300'>
            {title}
          </h2>
          
          {/* Description */}
          <p className='text-white/70 text-sm leading-relaxed flex-grow'>
            {desc}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {tech.slice(0, 3).map((technology, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-white/10 border border-white/20 rounded-lg text-white/80"
              >
                {technology}
              </span>
            ))}
            {tech.length > 3 && (
              <span className="px-2 py-1 text-xs bg-accent-500/20 border border-accent-500/30 rounded-lg text-accent-300">
                +{tech.length - 3} more
              </span>
            )}
          </div>

          {/* Action Button */}
          <motion.div 
            className="pt-3 mt-auto"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors duration-300">
              <span>View Project</span>
              <motion.svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </div>
          </motion.div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>
    </motion.a>
  )
}

export default ProjectCard
