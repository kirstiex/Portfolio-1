import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CatOnComputer from '../public/catoncomputer.png'

type Props = {}

function About({}: Props) {
  return (

    <motion.div
        initial={{opacity:0}}
        whileInView={{ opacity: 1}}
        transition={{ duration:1.5}}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'> About</h3>
        
        <motion.div
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            opacity: 1, x:0
        }}
        viewport={{ once: true}} 
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
         md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        >
            
        <Image src={CatOnComputer} className='w-56 h-56 rounded-full object-cover' alt="A cat sitting on a computer." ></Image>
        </motion.div>

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here's A <span className='underline decoration-[#aeadfd]/50'> little</span> Header </h4>
            <p className='text-base'>
            Hi, I'm Kirstie Goggans, a software developer with a passion for creative programming. 
            I believe in learning through hands-on experience and having an open, positive mindset.
             I am currently studying Full Stack Development and In my free time, I enjoy engaging in a variety of activities such as traveling,
              reading, practicing hygge, taking photographs, painting, and spending time with my family. As a friendly introvert,
               I appreciate the opportunity to meet new people in peaceful, low-key settings.
            </p>
        </div>
        </motion.div>
  )
}

export default About