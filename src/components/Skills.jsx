import React from 'react'
import Skillcard from './skillcard'

import { motion } from 'motion/react'

function Skills() {
  return (
    <div id='SKILLS' className='h-auto bg-[#00021a]'>
      <div className='lg:w-[80%] w-[95%] m-auto pb-10'>
            <motion.h1 initial={{scale:0, opacity: 0 }}
            whileInView={{ scale:1, opacity: 1,transition: { duration: 1 } }} viewport={{ once: true }}
            className='text-center text-5xl pt-10 text-white'>My Skills</ motion.h1>

            <motion.div initial={{opacity:0, y: 100 }}
            whileInView={{opacity:1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1 }} 
            className="items grid grid-cols-4 gap-4 pt-10">
              <Skillcard src='../assets/c.svg' text="C" />
              <Skillcard src='../assets/cplusplus.svg' text="C++" />
              <Skillcard src='../assets/html.svg' text="HTML" />
              <Skillcard src='../assets/css.svg' text="CSS" />
              <Skillcard src='../assets/js.svg' text="JS" />
              <Skillcard src='../assets/react.svg' text="React JS" />
              <Skillcard src='../assets/tailwind.svg' text="Tailwind CSS" />
              <Skillcard src='../assets/github.svg' text="Github" />
              <Skillcard src='../assets/git.svg' text="Git" />
              <Skillcard src='../assets/cp.svg' text="CP" />
            </motion.div>
      </div>
    </div>
  )
}

export default Skills
