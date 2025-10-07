import React from 'react'
import { motion } from 'framer-motion'

function Skillcard(props) {
  const { src, text, level = 80 } = props;

  return (
    <motion.div 
      className='relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group'
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.2)"
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon container */}
      <div className='relative flex flex-col items-center space-y-4'>
        <motion.div
          className="relative p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <img 
            className='w-12 h-12 md:w-16 md:h-16 object-contain filter drop-shadow-lg' 
            src={src} 
            alt={text}
          /> 
        </motion.div>
        
        {/* Skill name */}
        <span className='text-sm md:text-base font-semibold text-white/90 text-center leading-tight'>
          {text}
        </span>
        
        {/* Proficiency level */}
        <div className="w-full space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-white/60">Proficiency</span>
            <span className="text-xs font-semibold text-primary-400">{level}%</span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${level}%` }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
          </div>
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
      </div>
    </motion.div>
  )
}

export default Skillcard
