import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const projects = [
    {
      src: '../assets/ManitMart-project.png',
      title: 'Manit Mart',
      desc: 'Full-stack e-commerce platform with modern UI',
      tech: ['React JS', 'Tailwind CSS', 'Node JS', 'MongoDB', 'Express JS'],
      link: 'https://manit-mart-frontend.onrender.com/',
      category: 'Full Stack'
    },
    {
      src: '../assets/ChatApp-project.png',
      title: 'Chat App',
      desc: 'Real-time chat application with authentication',
      tech: ['React JS', 'Tailwind CSS', 'Node JS', 'MongoDB', 'Socket IO', 'JWT'],
      link: 'https://chat-app-w0oa.onrender.com/',
      category: 'Full Stack'
    },
    {
      src: '../assets/TaskManager-project.png',
      title: 'Task Manager',
      desc: 'Productivity app for managing daily tasks',
      tech: ['React JS', 'Tailwind CSS'],
      link: 'https://task-manager-gamma-seven.vercel.app/',
      category: 'Frontend'
    },
    {
      src: '../assets/netflix-project.png',
      title: 'Netflix Clone',
      desc: 'Streaming platform UI clone',
      tech: ['HTML', 'CSS'],
      link: 'https://netflix-henna-nine.vercel.app/',
      category: 'Frontend'
    },
    {
      src: '../assets/x-project.png',
      title: 'X Clone',
      desc: 'Social media platform interface',
      tech: ['HTML', 'Tailwind CSS'],
      link: 'https://krishnax.freewebhostmost.com/',
      category: 'Frontend'
    },
    {
      src: '../assets/Spotify-project.jpg',
      title: 'Music Player',
      desc: 'Interactive music streaming interface',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/KrishnaxVerma/Spotify',
      category: 'Frontend'
    },
    {
      src: '../assets/Drumkit-project.png',
      title: 'DrumKit',
      desc: 'Interactive drum kit with animations',
      tech: ['HTML', 'CSS', 'GSAP', 'JavaScript'],
      link: 'https://drum-kit-theta-beryl.vercel.app/',
      category: 'Interactive'
    },
    {
      src: '../assets/TwoGoodCo.png',
      title: 'Two Good Co',
      desc: 'Modern business website with animations',
      tech: ['HTML', 'Tailwind CSS', 'GSAP'],
      link: 'https://two-good-co-steel.vercel.app/',
      category: 'Frontend'
    }
  ]

  return (
    <div id='PROJECT' className='min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-32 left-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"
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
                My Projects
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              A showcase of my development journey through various web applications and interactive experiences
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={gridVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={gridVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <ProjectCard 
                  src={project.src}
                  title={project.title}
                  desc={project.desc}
                  tech={project.tech}
                  link={project.link}
                  category={project.category}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="mt-16 text-center"
            variants={titleVariants}
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                I'm always excited to take on new challenges and create amazing digital experiences. 
                Let's discuss your next project!
              </p>
              
              <motion.a
                href="#CONTACT"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Project
