import { GetStaticProps } from 'next';
import Head from 'next/head'
import Link from 'next/link';
import Header from "../components/Header";
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchSocial } from '../utils/fetchSocial';
import { fetchProjects } from '../utils/fetchProjects';
import { urlFor } from '../sanity';
import { fetchSkills } from '../utils/fetchSkills';


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};


const Home = ({pageInfo, experiences, projects, skills, socials }: Props ) => {
  return (
  <div className="bg-[#252424] text-white h-screen snap-y snap-mandatory overflow-y-scroll
   overflow-x-hidden z-0 ">
    <Head>
      <title>Kirstie's Portfolio</title>
      <link rel="icon" href="/favicon.ico" />   
    </Head>
    <Header socials={socials}/>
   
   <section id="hero" className='snap-start'>
   <Hero pageInfo={pageInfo} />
   </section>
   
   <section id="about" className="snap-center">
     <About pageInfo={pageInfo}/>
   </section>

   {/*Experience*/}
   <section id="experience" className="snap-center">
     <WorkExperience experiences={experiences} />
   </section>

   
   <section id="skills" className='snap-start'>

   </section>

   {/*Projects*/}
   <section id="projects" className='snap-start'>
   <Projects projects={projects} />
   </section>

   {/*Contact*/}
   <section id="contact" className='snap-start'>
     <Contact/>
   </section>
   <Link href="#hero">
   <footer className='sticky bottom-5 w-full cursor-pointer'>
     <div className='flex items-center justify-center'>
     <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
        src={urlFor(pageInfo?.profilePic).url()} alt="logo banner"/>   
       
      </div>
    </footer>
    </Link>
   </div>
  );
};

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const projects = await fetchProjects();
  const socials: Social[] = await fetchSocial();
  const skills: Skill[] = await fetchSkills();

  return {
    props: {
      pageInfo,
      experiences,
      socials,
      skills,
      projects,
    },
    //Next.js will attepmt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,


  };
};
