import React from 'react'
import { motion } from "motion/react"

function Navbar(props) {
  return (
    <>
        {props.show ? (
            <div id="navbar" className='h-screen bg-[#00021a] fixed z-40 top-0 w-[175px] sm:w-[300px] flex flex-col items-center justify-left gap-4'>
              <div>
              <img className='border-4 border-gray-700 rounded-full w-32 mt-10 mb-10' src="../assets/profile.jpg" alt="" />
              <span className='text-white text-center text-xl'>Krishna Verma</span>
              <div className='flex gap-4'>
              <a href='https://wa.me/7477000978' target='blank' ><img className='w-8' src="../assets/whatsapp.svg" alt="" /></a>
              <a href='https://www.instagram.com/krishnaxverma05/' target='blank' ><img className='w-8' src="../assets/instagram.svg" alt="" /></a>
              <a href='https://www.linkedin.com/in/krishna-verma-04a78929a/' target='blank' ><img className='w-8' src="../assets/linkedin.svg" alt="" /></a>
              </div>
              </div>
              <div>
                <ul className='text-white text-xl pt-10'>
                  <motion.li whileHover={{color:"#DB2777"}}
                  className='pb-4'><a href="#title">Home</a></motion.li>
                  <motion.li whileHover={{color:"#DB2777"}}
                  className='pb-4'><a href="#ABOUT">About me</a></motion.li>
                  <motion.li whileHover={{color:"#DB2777"}}
                  className='pb-4'><a href="#SKILLS">Skills</a></motion.li>
                  <motion.li whileHover={{color:"#DB2777"}}
                  className='pb-4'><a href="#PROJECT">Projects</a></motion.li>
                  <motion.li whileHover={{color:"#DB2777"}}
                  className='pb-4'><a href="#CONTACT">Contact me</a></motion.li>
                </ul>
              </div>
            </div>
        ) : (<div></div>)}
    </>
  )
}

export default Navbar
