import React from 'react';
import { motion } from 'framer-motion';

function Separator() {
  return (
    <div className="relative w-full h-16 flex items-center justify-center py-8">
      {/* Subtle animated gradient line */}
      <motion.div 
        className="w-full max-w-2xl h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      
      {/* Central dot */}
      <motion.div 
        className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      
      {/* Subtle glow effect */}
      <motion.div 
        className="absolute w-16 h-16 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export default Separator;
