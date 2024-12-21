import React from 'react'
import { motion } from 'motion/react'

function ProfileCard(props) {
  return (
    <motion.a whileHover={{scale:1.1}}
    href={props.link} target='_blank' className='flex flex-col justify-center items-center'>
        <img className='rounded-lg overflow-hidden w-6 md:w-12' src={props.img} alt="" />
        <span className='text-white'>{props.text}</span>
    </motion.a>
  )
}

export default ProfileCard
