import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'motion/react'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

function Project() {



  return (
    <div id='PROJECT' className='h-auto bg-[#00021a]'>
      <div className='lg:w-[80%] w-full m-auto pb-10'>
        <motion.h1 initial={{scale:0, opacity: 0 }}
            whileInView={{ scale:1, opacity: 1,transition: { duration: 1 } }} viewport={{ once: true }}
            className='text-center text-5xl pt-10 text-white'>My Projects</ motion.h1>
      </div>

        <div className='flex flex-wrap justify-center gap-3 p-6'>
            <ProjectCard src='../assets/TaskManager-project.png' title='Task Manager' desc='React JS, Tailwind CSS' link='https://task-manager-gamma-seven.vercel.app/' />
            <ProjectCard src='../assets/Drumkit-project.png' title='DrumKit' desc='HTML, CSS, GSAP, JS' link='https://drum-kit-theta-beryl.vercel.app/'/>
            <ProjectCard src='../assets/TwoGoodCo.png' title='Two Good Co' desc='HTML, Tailwind CSS, GSAP' link='https://two-good-co-steel.vercel.app/' />
            <ProjectCard src='../assets/netflix-project.png' title='Netflix Clone' desc='HTML, CSS' link='https://netflix-henna-nine.vercel.app/' />
            <ProjectCard src='../assets/x-project.png' title='X Clone' desc='HTML, Tailwind CSS' link='https://krishnax.freewebhostmost.com/' />
            <ProjectCard src='../assets/Spotify-project.jpg' title='Music Player' desc='HTML, CSS, JS' link='https://github.com/KrishnaxVerma/Spotify' />
        </div>
    </div>
  )
}

export default Project
