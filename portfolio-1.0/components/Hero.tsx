import Link from 'next/link';
import React from 'react'
import { PageInfo } from '../typings';

//import GlitchedWriter from 'glitched-writer'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
};

export default function Hero({pageInfo}: Props) {

 const [text,count] = useTypewriter({
    words: [
    `Hi, My Name is  ${pageInfo?.name}!`,
    "<Creative Developer/>",
    "Woman-Who-Codes.tsx",
    "Mother of Dragons",
    "Writing.The.Future.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

return (
<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
    <BackgroundCircles />
    <img 
    className="relative rounded-full h-32 w-32 mx-auto object-cover"
    src={urlFor(pageInfo.heroImage).url()}
    alt='A professional photograph of Kirstie Goggans' 
    />
    
    <div className='z-20'>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            {pageInfo.role}</h2>
        
        <h4 className='text-5xl lg:6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor="#aeadfd"/>
        </h4>

        <div className="pt-5">
            
            <Link href="#about">
                <button className="heroButton"> About</button></Link>
            <Link href="#experience">
                <button className="heroButton"> Experience</button></Link>       
            <Link href="#projects">
                <button className="heroButton"> Projects</button> </Link>   
        </div>
    </div>
</div>

  );
}