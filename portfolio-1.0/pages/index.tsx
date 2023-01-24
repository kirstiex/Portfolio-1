import Head from 'next/head'
import Header from "../components/Header";
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Link from 'next/link';


export default function Home() {
  return (
  <>
  <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
   overflow-x-hidden z-0 ">
    <Head>
      <title>Kirstie's Portfolio</title>
      <meta name="description" content="Kirstie" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <Header/>
   
    <section id="hero" className='snap-center'>
    <Hero />
    </section>
    
    <section id="about" className="snap-center">
      <About />
    </section>

    {/*Experience*/}
    <section id="experience" className="snap-center">
      <WorkExperience />
    </section>

    {/*Skills*/}
    <section id="skills" className='snap-start'>
      <Skills/>
    </section>

    {/*Projects*/}
    <section id="projects" className='snap-start'>
      <Projects/>
    </section>

    {/*Contact*/}
    <section id="contact" className='snap-start'>
      <Contact/>
    </section>
    
    <Link href="#hero">
    <footer className='sticky bottom-5 w-full cursor-pointer'>
      <div className='flex items-center justify-center'>
        <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
        cursor-pointer' src="" alt="logo banner"/>
      </div>
    </footer>
    </Link>
    </div>
  </>
  )
}
