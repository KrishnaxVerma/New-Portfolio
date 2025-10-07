import React from 'react'
import { motion } from 'framer-motion'
import ProfileCard from './ProfileCard'

function Profiles() {
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

  const profiles = [
    { link: 'https://github.com/KrishnaxVerma', img: '../assets/github-logo.png', text: 'GitHub', desc: 'Open source contributions' },
    { link: 'https://www.linkedin.com/in/krishna-verma-04a78929a/', img: '../assets/linkedin-logo.png', text: 'LinkedIn', desc: 'Professional network' },
    { link: 'https://codeforces.com/profile/krishnaverma', img: '../assets/codeforces-logo.webp', text: 'Codeforces', desc: 'Competitive programming' },
    { link: 'https://www.codechef.com/users/krishna_verma1', img: '../assets/codechef-logo.jpeg', text: 'CodeChef', desc: 'Coding challenges' },
    { link: 'https://leetcode.com/u/Krishna__Verma/', img: '../assets/leetcode-logo.png', text: 'LeetCode', desc: 'Algorithm practice' }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden'>
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
                Connect & Code
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              Follow my journey across different platforms and see my coding progress
            </p>
          </motion.div>

          {/* Profiles Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
            variants={gridVariants}
          >
            {profiles.map((profile, index) => (
              <motion.div
                key={index}
                variants={gridVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <ProfileCard 
                  link={profile.link}
                  img={profile.img}
                  text={profile.text}
                  desc={profile.desc}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Profiles
