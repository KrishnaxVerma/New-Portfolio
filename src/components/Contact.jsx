import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(import.meta.env.REACT_APP_FORMSPREE, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.ok) {
        setResult("✅ Form submitted successfully!");
        form.reset();
      } else {
        setResult("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setResult("❌ Something went wrong.");
    }
  };

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

  return (
    <div id="CONTACT" className="min-h-screen bg-gradient-to-br from-dark-800 via-dark-900 to-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                Get In Touch
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div variants={cardVariants} className="space-y-8">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-8">Let's Connect</h2>
                
                <div className="space-y-6">
                  <ContactInfo 
                    icon="person" 
                    label="Name" 
                    value="Krishna Verma"
                    gradient="from-primary-400 to-primary-600"
                  />
                  <ContactInfo 
                    icon="location_on" 
                    label="Location" 
                    value="Bhopal, Madhya Pradesh, India"
                    gradient="from-accent-400 to-accent-600"
                  />
                  <ContactInfo 
                    icon="mail" 
                    label="Email" 
                    value="kv7477000@gmail.com"
                    gradient="from-primary-400 to-accent-400"
                  />
                  <ContactInfo 
                    icon="phone" 
                    label="Phone" 
                    value="+91 7477000978"
                    gradient="from-accent-400 to-primary-400"
                  />
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    {[
                      { href: 'https://www.linkedin.com/in/krishna-verma-04a78929a/', icon: '../assets/linkedin.svg', label: 'LinkedIn' },
                      { href: 'https://github.com/KrishnaxVerma', icon: '../assets/github.svg', label: 'GitHub' },
                      { href: 'https://www.instagram.com/krishnaxverma05/', icon: '../assets/instagram.svg', label: 'Instagram' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.1, 
                          y: -2,
                          boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img className="w-6 h-6" src={social.icon} alt={social.label} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={cardVariants}>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-8">Send Message</h2>
                
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.input
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all duration-300"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.input
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all duration-300"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  
                  <motion.input
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all duration-300"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    whileFocus={{ scale: 1.02 }}
                  />
                  
                  <motion.textarea
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all duration-300 h-32 resize-none"
                    name="message"
                    placeholder="Your Message..."
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  
                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    disabled={result === "Sending..."}
                  >
                    {result === "Sending..." ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
                
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-xl text-center font-medium ${
                      result.includes('✅') 
                        ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                        : 'bg-red-500/20 border border-red-500/30 text-red-300'
                    }`}
                  >
                    {result}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const ContactInfo = ({ icon, label, value, gradient = "from-primary-400 to-accent-400" }) => (
  <motion.div 
    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
    whileHover={{ scale: 1.02, x: 5 }}
  >
    <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} bg-opacity-20`}>
      <span className={`material-symbols-outlined text-xl bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {icon}
      </span>
    </div>
    <div className="flex flex-col">
      <span className="text-white/60 text-sm font-medium">{label}</span>
      <span className="text-white text-lg font-semibold">{value}</span>
    </div>
  </motion.div>
);

export default Contact;
