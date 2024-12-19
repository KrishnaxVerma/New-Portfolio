import React from 'react'
import Skillcard from './skillcard'

import { motion } from 'motion/react'

import c from "../assets/c.svg"
import cpp from "../assets/cplusplus.svg"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import js from "../assets/js.svg"
import react from "../assets/react.svg"
import tailwind from "../assets/tailwind.svg"
import github from "../assets/github.svg"
import git from "../assets/git.svg"
import cp from "../assets/cp.svg"
function Skills() {
  return (
    <div className='h-auto bg-[#00021a]'>
      <div className='lg:w-[80%] w-[95%] m-auto pb-10'>
            <motion.h1 initial={{scale:0, opacity: 0 }}
            whileInView={{ scale:1, opacity: 1,transition: { duration: 1 } }} viewport={{ once: true }}
            className='text-center text-5xl pt-10 text-white'>My Skills</ motion.h1>

            <motion.div initial={{opacity:0, y: 100 }}
            whileInView={{opacity:1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1 }} 
            className="items grid grid-cols-4 gap-4 pt-10">
              <Skillcard src={c} text="C" />
              <Skillcard src={cpp} text="C++" />
              <Skillcard src={html} text="HTML" />
              <Skillcard src={css} text="CSS" />
              <Skillcard src={js} text="JS" />
              <Skillcard src={react} text="React JS" />
              <Skillcard src={tailwind} text="Tailwind CSS" />
              <Skillcard src={github} text="Github" />
              <Skillcard src={git} text="Git" />
              <Skillcard src={cp} text="CP" />
            </motion.div>
      </div>
    </div>
  )
}

export default Skills
