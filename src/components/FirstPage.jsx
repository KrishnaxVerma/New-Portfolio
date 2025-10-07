import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Navbar from './Navbar';

function FirstPage() {
  const [Navshow, setNavshow] = useState(false)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const titleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const name = "Krishna Verma".split("")

  return (
    <>  
      <Navbar className='z-30' show={Navshow} />
      
      {/* Background with gradient overlay */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110"
          style={{ backgroundImage: `url('../assets/firstpage.jpg')` }}
        />
        
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950/90 via-dark-900/85 to-primary-900/80" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Navigation Controls */}
        <AnimatePresence>
          {!Navshow ? (
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setNavshow(!Navshow)}
              className="material-symbols-outlined fixed z-50 top-6 right-6 text-white/90 hover:text-white p-3 text-4xl rounded-2xl cursor-pointer backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              menu
            </motion.button>
          ) : (
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setNavshow(!Navshow)}
              className="material-symbols-outlined fixed z-50 top-6 right-6 text-white/90 hover:text-white p-3 text-4xl rounded-2xl cursor-pointer backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              close
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating scroll to top button */}
        <motion.a
          href="#title"
          variants={floatingVariants}
          animate="animate"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed z-50 bottom-6 right-6 text-white p-3 text-3xl rounded-2xl cursor-pointer backdrop-blur-md bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="material-symbols-outlined">arrow_upward</span>
        </motion.a>

        {/* Main Content */}
        <motion.div
          id='title'
          className='absolute inset-0 h-screen flex flex-col justify-center items-center z-20 text-center px-4'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Glassmorphism card container */}
          <motion.div
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto"
            variants={titleVariants}
          >
            {/* Animated name */}
            <motion.div className='text-4xl md:text-6xl lg:text-7xl uppercase font-bold mb-6'>
              {name.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={`inline-block ${letter === ' ' ? 'w-4' : ''} bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Subtitle with typing effect */}
            <motion.div 
              className='text-xl md:text-2xl text-white/90 mb-8 font-light'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                Crafting Digital Experiences with Code
              </span>
            </motion.div>

            {/* Action buttons */}
            <motion.div 
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'
              variants={containerVariants}
            >
              <motion.a
                variants={buttonVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                href='https://www.linkedin.com/in/krishna-verma-04a78929a/'
                className='group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.a>

              <motion.a
                variants={buttonVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                href='../assets/resume.pdf'
                download
                className='group relative px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-white font-semibold rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3'
              >
                <span className="relative z-10">Download Resume</span>
                <motion.img 
                  src="../assets/download.svg" 
                  alt="download"
                  className="w-5 h-5 relative z-10"
                  whileHover={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-accent-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default FirstPage
