import React from 'react'
import { motion } from 'motion/react'
import ProfileCard from './ProfileCard'

function Profiles() {

  return (
    <div className='h-auto bg-[#00021a]'>
            <div className='lg:w-[80vw] w-[95vw] m-auto'>
                {/* <motion.h1 initial={{scale:0, opacity: 0 }}
                whileInView={{ scale:1, opacity: 1,transition: { duration: 1 } }} viewport={{ once: true }}
                className='text-center text-5xl pt-10 text-white'>Also Visit</ motion.h1> */}

            <motion.div initial={{y:50, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1}}} viewport={{once:true}}
            className='pt-10 pb-10 flex justify-around flex-wrap gap-5'>
                <ProfileCard link='https://github.com/KrishnaxVerma' img='../assets/github-logo.png' text='Github' />
                <ProfileCard link='https://www.linkedin.com/in/krishna-verma-04a78929a/' img='../assets/linkedin-logo.png' text='LinkedIn' />
                <ProfileCard link='https://codeforces.com/profile/krishnaverma' img='../assets/codeforces-logo.webp' text='Codeforces' />
                <ProfileCard link='https://www.codechef.com/users/krishna_verma1' img='../assets/codechef-logo.jpeg' text='Codechef' />
                <ProfileCard link='https://leetcode.com/u/Krishna__Verma/' img='../assets/leetcode-logo.png' text='Leetcode' />
            </motion.div>
      </div>  
    </div>
  )
}

export default Profiles
