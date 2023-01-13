import Head from 'next/head'
import Header from "../components/Header";
import Hero from '../components/Hero';

export default function Home() {
  return (
  <>
  <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
    <Head>
      <title>Kirstie's Portfolio</title>
      <meta name="description" content="Kirstie" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    {/*Header*/}
      <Header/>
    {/*Hero*/} 
    <section id="hero" className='snap-center'>
    <Hero />
    </section>
    {/*About */}

    {/*Experience*/}

    {/*Skills*/}

    {/*Projects*/}

    {/*Contact*/}
    
    
    </div>
  </>
  )
}
