import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

function Navbar(props) {
  const navVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }
  }

  const menuItems = [
    { href: "#title", label: "Home", icon: "home" },
    { href: "#ABOUT", label: "About", icon: "person" },
    { href: "#SKILLS", label: "Skills", icon: "code" },
    { href: "#PROJECT", label: "Projects", icon: "work" },
    { href: "#CONTACT", label: "Contact", icon: "mail" }
  ]

  const socialLinks = [
    { href: 'https://wa.me/7477000978', icon: "../assets/whatsapp.svg", label: "WhatsApp" },
    { href: 'https://www.instagram.com/krishnaxverma05/', icon: "../assets/instagram.svg", label: "Instagram" },
    { href: 'https://www.linkedin.com/in/krishna-verma-04a78929a/', icon: "../assets/linkedin.svg", label: "LinkedIn" }
  ]

  return (
    <AnimatePresence>
      {props.show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            onClick={() => props.onClose && props.onClose()}
          />
          
          {/* Sidebar */}
          <motion.div
            id="navbar"
            className='h-screen fixed z-40 top-0 w-80 sm:w-96 flex flex-col backdrop-blur-xl bg-gradient-to-b from-dark-900/95 via-dark-800/90 to-dark-900/95 border-r border-white/10 shadow-2xl'
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Profile Section */}
            <motion.div 
              className="flex flex-col items-center pt-8 pb-6 px-6"
              variants={itemVariants}
            >
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-md opacity-75"></div>
                <img 
                  className='relative border-4 border-white/20 rounded-full w-32 h-32 object-cover shadow-xl' 
                  src="../assets/profile.jpg" 
                  alt="Krishna Verma" 
                />
              </motion.div>
              
              <motion.h2 
                className='text-white text-2xl font-bold mb-2 text-center'
                variants={itemVariants}
              >
                Krishna Verma
              </motion.h2>
              
              <motion.p 
                className='text-white/70 text-sm text-center mb-6'
                variants={itemVariants}
              >
                Full Stack Developer
              </motion.p>
              
              {/* Social Links */}
              <motion.div 
                className='flex gap-4'
                variants={itemVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    variants={socialVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img className='w-6 h-6' src={social.icon} alt={social.label} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Navigation Menu */}
            <motion.nav 
              className='flex-1 px-6'
              variants={itemVariants}
            >
              <ul className='space-y-2'>
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.a
                      href={item.href}
                      className='group flex items-center gap-4 px-4 py-3 rounded-xl text-white/80 hover:text-white transition-all duration-300 hover:bg-white/10 border border-transparent hover:border-white/20'
                      whileHover={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderColor: "rgba(255, 255, 255, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="material-symbols-outlined text-xl group-hover:text-primary-400 transition-colors duration-300">
                        {item.icon}
                      </span>
                      <span className="text-lg font-medium group-hover:text-white transition-colors duration-300">
                        {item.label}
                      </span>
                      <motion.div
                        className="ml-auto w-2 h-2 rounded-full bg-accent-500 opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            {/* Footer */}
            <motion.div 
              className="p-6 border-t border-white/10"
              variants={itemVariants}
            >
              <div className="text-center text-white/50 text-sm">
                <p>© 2024 Krishna Verma</p>
                <p className="text-xs mt-1">Crafted with ❤️</p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Navbar
