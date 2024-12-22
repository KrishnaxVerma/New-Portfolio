import React from 'react'
import { motion } from 'motion/react'

function Contact() {
  return (
    <div id='CONTACT' className='h-auto bg-[#00021a]'>
      <div className='lg:w-[80%] w-full m-auto pb-10'>
        <motion.h1 initial={{scale:0, opacity: 0 }}
            whileInView={{ scale:1, opacity: 1,transition: { duration: 1 } }} viewport={{ once: true }}
            className='text-center text-5xl pt-10 pb-10 text-white'>Contact Me</ motion.h1>

         <motion.div initial={{opacity:0, y:100}}
         whileInView={{opacity:1, y:0, transition: {duration: 1}}} viewport={{once:true}}
         className='flex justify-around flex-wrap-reverse gap-5'>
            <div>
              <div>
                <h2 className='text-white text-2xl'>Let's Connect</h2>
                <div className='flex items-center gap-3 pt-3'>
                <span className="material-symbols-outlined text-pink-600">person</span>
                <div className='flex flex-col'>
                  <span className='text-white text-xl'>Name</span>
                  <span className='text-gray-300'>Krishna Verma</span>
                </div>
                </div>
                <div className='flex items-center gap-3 pt-3'>
                <span className="material-symbols-outlined text-pink-600">location_on</span>
                <div className='flex flex-col'>
                  <span className='text-white text-xl'>Address</span>
                  <span className='text-gray-300'>Bhopal, M.P.</span>
                </div>
                </div>
                <div className='flex items-center gap-3 pt-3'>
                <span className="material-symbols-outlined text-pink-600">mail</span>
                <div className='flex flex-col'>
                  <span className='text-white text-xl'>Email</span>
                  <span className='text-gray-300'>kv7477000@gmail.com</span>
                </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center items-left gap-3'>
            <h2 className='text-white text-2xl'>Contact form</h2>
            <form action="#" className='flex flex-col gap-2'>
              <input className='border p-2 rounded-lg md:w-80 w-60 focus:outline-none' type="text" placeholder='Name' required />
              <input className='p-2 rounded-lg md:w-80 w-60 focus:outline-none' type="email" placeholder='Email' required />
              <textarea className='p-2 rounded-lg md:w-80 w-60 focus:outline-none' placeholder="Message.." required />

              <motion.button
              whileHover={{color:"#DB2777", backgroundColor:"transparent", transition:{duration:0}}}
              type="submit" className='w-fit p-4 bg-pink-600 text-white py-2 px border-2 border-pink-600 rounded-lg'>Send Message</motion.button>
            </form>
            </div>
          </motion.div>   
      </div>
    </div>
  )
}

export default Contact
