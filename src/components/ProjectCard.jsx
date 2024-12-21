import React from 'react'

import { motion } from 'motion/react'

function ProjectCard(props) {
  return (<a href={props.link} target="_blank">
    <motion.div initial={{opacity:0}}
    whileInView={{opacity:1, transition:{duration:1, delay:0.5}}}
    whileHover={{borderColor: "#db2777", y:-10}} viewport={{once: true}}
    className='md:h-80 md:w-[300px] h-60 sm:w-[200px] w-[150px] bg-[#00021a] border-white border-2 rounded-xl overflow-hidden flex flex-col justify-between'>
      <img className='object-cover p-2' src={props.src} alt="" />
      <div>
      <h2 className='text-center sm:text-2xl text-xl mt-2 text-white'>{props.title}</h2>
      <p className='text-center sm:text-xl text-lg mt-2 text-pink-600'>{props.desc}</p>
      </div>
    </motion.div>
    </a>
  )
}

export default ProjectCard
