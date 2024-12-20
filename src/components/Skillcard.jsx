import React from 'react'
import { motion } from 'motion/react'

function Skillcard(props) {
  return (
      <motion.div 
      whileHover={{scale:1.1}}
      className='flex flex-col items-center'>
        <img className='w-20 h-20 md:w-28 md:h-28 md:p-2 p-3' src={props.src} alt="" /> 
        <span className='md:text-2xl text-xs font-semibold text-pink-600'>{props.text}</span>
      </motion.div>
  )
}

export default Skillcard
