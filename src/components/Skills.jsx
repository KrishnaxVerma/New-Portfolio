import React from 'react'
import Skillcard from './Skillcard'
import { motion } from 'framer-motion'

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  const gridVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    }
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { src: '../assets/c.svg', text: "C", level: 85 },
        { src: '../assets/cplusplus.svg', text: "C++", level: 90 },
        { src: '../assets/js.svg', text: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { src: '../assets/html.svg', text: "HTML", level: 95 },
        { src: '../assets/css.svg', text: "CSS", level: 90 },
        { src: '../assets/react.svg', text: "React JS", level: 40 },
        { src: '../assets/tailwind.svg', text: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { src: '../assets/github.svg', text: "Github", level: 70 },
        { src: '../assets/git.svg', text: "Git", level: 70 }
      ]
    },
    {
      title: "Database & Others",
      skills: [
        { src: '../assets/mysql.svg', text: "MySQL", level: 50 },
        { src: '../assets/mongo.svg', text: "MongoDB", level: 50 },
        { src: '../assets/cp.svg', text: "Competitive Programming", level: 90 }
      ]
    }
  ]

  return (
    <div id='SKILLS' className='min-h-screen bg-gradient-to-br from-dark-800 via-dark-900 to-dark-950 relative overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 9,
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
                My Skills
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="space-y-12"
            variants={gridVariants}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
                variants={gridVariants}
              >
                <motion.h3 
                  className="text-2xl font-bold text-white mb-8 text-center"
                  variants={titleVariants}
                >
                  {category.title}
                </motion.h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={gridVariants}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -10,
                        boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                      }}
                      className="group"
                    >
                      <Skillcard 
                        src={skill.src} 
                        text={skill.text}
                        level={skill.level}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div 
            className="mt-16 text-center"
            variants={titleVariants}
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
                I'm constantly expanding my skill set and staying updated with the latest technologies. 
                My passion for learning drives me to explore new frameworks, tools, and best practices 
                in software development.
              </p>
              
              <div className="flex justify-center mt-8 space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    12+
                  </div>
                  <div className="text-white/70">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    1+
                  </div>
                  <div className="text-white/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    ∞
                  </div>
                  <div className="text-white/70">Learning Mindset</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
