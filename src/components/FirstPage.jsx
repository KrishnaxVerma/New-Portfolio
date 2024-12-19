import React, {useState} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react"

import img from "../assets/firstpage.jpg"
import resume from "../assets/resume.pdf"

import Navbar from './Navbar';
import { delay } from 'motion';

// gsap.registerPlugin(ScrollTrigger);

function FirstPage() {

  useGSAP(()=>{
    const t1 = gsap.timeline();
    t1.from("#title",{
      scale:0,
      opacity:0,
      duration:1,
      delay:1,
    })
    t1.from("#resbtn",{
      opacity:0,
      y:100,
      duration:0.5
    })
    t1.from("#hamburger",{
      y:-100,
      scale:0,
      rotate:720,
      duration:2
    })
  })

  const [Navshow, setNavshow] = useState(false)

  return (
    <>  
        <Navbar className='z-30' show={Navshow} />
        <div className="bg-fixed z-0 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}></div>
        
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

        { !Navshow && 
          <span onClick={()=>{setNavshow(!Navshow)}} id='hamburger' className="material-symbols-outlined fixed z-30 text-white top-0 right-0 m-6 p-2 text-5xl bg-blue-500 rounded-full cursor-pointer">menu</span>
        }
        { Navshow &&
          <span onClick={()=>{setNavshow(!Navshow)}} className="material-symbols-outlined fixed z-30 text-white top-0 right-0 m-6 p-2 text-5xl bg-blue-500 rounded-full cursor-pointer">close</span>
        }

        <div id='title' className='absolute inset-0 h-screen flex flex-col justify-center items-center z-20 text-center'>
            <div className='text-5xl uppercase font-bold text-[#149ddd]'>Krishna Verma</div>
            <div className='mt-5 text-2xl text-white'>I am learning Web Development .</div>
            <motion.a whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            id='resbtn' href={resume} download className='text-[#149ddd] font-semibold border-[#145edd] border-2 p-3 mt-10 rounded-lg hover:bg-[#145edd] hover:text-white'>Download Resume</motion.a>
        </div>
    </>
  )
}

export default FirstPage
