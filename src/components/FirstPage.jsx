import React, {useState} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react"

import Navbar from './Navbar';
import { delay } from 'motion';

// gsap.registerPlugin(ScrollTrigger);

function FirstPage() {

  useGSAP(()=>{
    const t1 = gsap.timeline();
    t1.from("#title",{
      scale:0,
      opacity:0,
      duration:0.5,
      // delay:1,
    })
    t1.from("#name span",{
      opacity:0,
      x:-50,
      stagger:0.1,
      duration:0.5
    })
    t1.from(".resbtn",{
      opacity:0,
      y:100,
      duration:0.5
    })
    t1.from("#hamburger",{
      y:-100,
      scale:0,
      rotate:720,
      duration:1
    })
    t1.from("#uparr",{
      scale:0,
      duration:0.5
    })
  })

  const [Navshow, setNavshow] = useState(false)

  return (
    <>  
        <Navbar className='z-30' show={Navshow} />
        <div className="bg-fixed z-0 h-screen bg-cover bg-center" style={{ backgroundImage: `url('../assets/firstpage.jpg')` }}></div>
        
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

        { !Navshow && 
          <span onClick={()=>{setNavshow(!Navshow)}} id='hamburger' className="material-symbols-outlined fixed z-50 text-white top-0 right-0 m-6 p-2 text-5xl rounded-full cursor-pointer">menu</span>
        }
        { Navshow &&
          <span onClick={()=>{setNavshow(!Navshow)}} className="material-symbols-outlined fixed z-50 text-white top-0 right-0 m-6 p-2 text-5xl rounded-full cursor-pointer">close</span>
        }

        <a href="#title"><span id="uparr" className="material-symbols-outlined fixed z-50 text-white bottom-0 right-0 m-6 p-1 text-5xl bg-blue-500 rounded-full cursor-pointer">arrow_upward</span></a>

        <div id='title' className='absolute inset-0 h-screen flex flex-col justify-center items-center z-20 text-center'>
            <div id='name' className='sm:text-5xl text-3xl uppercase font-bold text-[#149ddd]'>
            <span>K</span>
            <span>r</span>
            <span>i</span>
            <span>s</span>
            <span>h</span>
            <span>n</span>
            <span>a</span>
            <span>&nbsp;</span>
            <span>V</span>
            <span>e</span>
            <span>r</span>
            <span>m</span>
            <span>a</span></div>
            <div className='mt-5 text-2xl text-white'>I am learning Web Development .</div>
            <div className='flex gap-3'>
              <motion.a whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href='https://www.linkedin.com/in/krishna-verma-04a78929a/' className='resbtn text-[#149ddd] font-semibold border-[#145edd] border-2 p-3 mt-2 rounded-lg hover:bg-[#145edd] hover:text-white'>Hire Me</motion.a>
              <motion.a whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href='../assets/resume.pdf' download className='resbtn text-[#149ddd] font-semibold border-[#145edd] border-2 p-3 mt-2 rounded-lg hover:bg-[#145edd] hover:text-white flex gap-2'>Resume <img src="../assets/download.svg" alt="" /></motion.a>
            </div>
        </div>
    </>
  )
}

export default FirstPage
