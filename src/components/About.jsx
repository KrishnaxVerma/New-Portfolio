import React from 'react'
import { motion } from "framer-motion"

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.2
      }
    }
  }

  const cardVariants = {
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

  const stats = [
    { number: "1+", label: "Years Learning" },
    { number: "10+", label: "Projects Built" },
    { number: "5+", label: "Technologies" },
    { number: "100%", label: "Dedication" }
  ]

  return (
    <div id="ABOUT" className='min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 -left-20 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 -right-20 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-16" variants={titleVariants}>
            <h1 className='text-5xl md:text-6xl font-bold mb-4'>
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Text Content */}
            <motion.div variants={textVariants} className="space-y-6">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
                <p className="text-lg leading-relaxed text-white/90 mb-6">
                  As a resident of <span className='text-primary-400 font-semibold'>Bhopal, Madhya Pradesh</span>, I developed an early passion for programming and technology during my schooling, which led me to pursue a 
                  <span className='text-accent-400 font-semibold'> B.Tech in Computer Science Engineering at Maulana Azad National Institute of Technology</span> (MANIT), Bhopal.
                </p>
                
                <p className="text-lg leading-relaxed text-white/90 mb-6">
                  I specialize in <span className='text-primary-400 font-semibold'>web development</span>, crafting responsive and dynamic sites using modern tools, and actively engage in competitive programming on platforms like 
                  <span className='text-accent-400 font-semibold'> Codeforces and Codechef</span> to enhance my problem-solving skills.
                </p>

                <p className="text-lg leading-relaxed text-white/90">
                  With a strong foundation in <span className='text-primary-400 font-semibold'>Data Structures and Algorithms</span>, I am committed to building efficient, scalable solutions and am eager to contribute meaningfully to the evolving tech landscape.
                </p>
              </div>

              {/* Skills Highlights */}
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {["Frontend Development", "Backend Development", "Problem Solving", "UI/UX Design"].map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <span className="text-white/90 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div variants={imageVariants} className="flex justify-center">
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl transform scale-110"></div>
                
                {/* Image container */}
                <motion.div
                  className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-2 shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-80 h-96 overflow-hidden rounded-2xl">
                    <img 
                      className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700" 
                      src='../assets/profile.jpg' 
                      alt="Krishna Verma" 
                    />
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-500 rounded-full"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About