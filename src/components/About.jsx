import React, { useEffect, useRef } from 'react'
import img from "../assets/profile.jpg"
import { motion } from "motion/react"

function About() {
    
  return (
    <>
    <div className='h-auto bg-[#00021a]'>
        <div className='lg:w-[80vw] w-[95vw] m-auto'>
            <motion.h1 initial={{scale:0, opacity: 0 }}
            whileInView={{ scale:1, opacity: 1,transition: { duration: 1 } }} viewport={{ once: true }}
            className='text-center text-5xl pt-10 text-white'>About Me</ motion.h1>

            <div className="flex lg:flex-row flex-col justify-between items-center gap-10 pb-20 pt-20">
                <motion.div initial={{opacity:0}}
                whileInView={{opacity:1, transition:{duration:2, delay:0.5}}} viewport={{ once: true }}
                className="desc text-justify lg:w-[70%] w-[90%] sm:text-xl text-sm leading-8 text-white">
                As a resident of Bhopal, Madhya Pradesh, I developed an early passion for programming and technology during my schooling, which led me to pursue a <span className='text-pink-600'> B.Tech in Computer Science Engineering at Maulana Azad National Institute of Technology</span> (MANIT), Bhopal. I specialize in web development, crafting responsive and dynamic sites using modern tools, and actively engage in competitive programming on platforms like Codeforces and Codechef to enhance my problem-solving skills. With a strong foundation in Data Structures and Algorithms, I am committed to building efficient, scalable solutions and am eager to contribute meaningfully to the evolving tech landscape.
                </motion.div>
                <motion.div initial={{rotateY:0, opacity:0}}
                whileHover={{scale:1.1}}
                whileInView={{rotateY:360, opacity:1, transition:{duration:1}}} viewport={{ once: true }}
                className="m-w-[300px] h-80 overflow-hidden rounded-xl">
                    <img className="w-full h-full object-cover object-center" src={img} alt="" />
                </motion.div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About