import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Avatar from '../public/LogoAvatar.png'
type Props = {}

function ExperienceCard({}: Props) {
  
    return <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     w-[500px] first-letter:md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
     opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{ duration:1.2}}
         className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
        object-center'
        src=''
        alt=''/>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>
                CEO of LilNinja 
            </h4>
            <p className='font-bold text-2xl mt-1'> Kirstie</p>
            <div className='flex space-x-2 my-2'>
                {/* Tech used */}
                <Image className='h-10 w-10 rounded-full' src={Avatar} alt=''/>
            </div>
            <p className='uppercase py-5 text-gray-300' >Started working...-ended</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </article>
  
}

export default ExperienceCard