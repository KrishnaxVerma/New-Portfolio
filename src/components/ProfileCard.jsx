import React from 'react'
import { motion } from 'framer-motion'

function ProfileCard(props) {
  const { link, img, text, desc } = props;

  return (
    <motion.a 
      href={link} 
      target='_blank' 
      rel="noopener noreferrer"
      className='block group'
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div 
        className='relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group overflow-hidden'
        whileHover={{ 
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.2)",
          scale: 1.02
        }}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon container */}
        <div className='relative flex flex-col items-center space-y-4'>
          <motion.div
            className="relative p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img 
              className='w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg filter drop-shadow-lg' 
              src={img} 
              alt={text}
            />
          </motion.div>
          
          {/* Platform name */}
          <h3 className='text-lg font-bold text-white group-hover:text-primary-300 transition-colors duration-300'>
            {text}
          </h3>
          
          {/* Description */}
          <p className='text-sm text-white/70 leading-relaxed'>
            {desc}
          </p>

          {/* Action indicator */}
          <motion.div 
            className="flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span>Visit Profile</span>
            <motion.svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </motion.svg>
          </motion.div>
        </div>

        {/* Floating particles effect */}
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{ 
            y: [-5, -15, -5],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{ 
            y: [5, 15, 5],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.div>
    </motion.a>
  )
}

export default ProfileCard
