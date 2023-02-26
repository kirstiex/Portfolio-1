import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
import {TagCloud, TagCloudOptions } from '@frank-mayer/react-tag-cloud'


type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{ opacity: 1}}
        transition={{ duration:1.5}}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'></h3>
 

 <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(350, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast", initSpeed:'slow', 
        })}
        style={{ color: '#ebe3f0' , fontSize: 30, }}
    >
        {[
            "VSCode",
            "TypeScript",
            "React",
            "SQL",
            "Python",
            "Node.js",
            "git",
            "Javascript",
            "REST",
            "Java",
            "C++",
        ]}
    </TagCloud>

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-bold">Here's A <h1>little{" "} 
            background </h1>
            </h4>
            <p className='text-base'> 
             {pageInfo?.backgroundInformation}
             </p>
        </div>
    </motion.div> 
  );
}

export default About