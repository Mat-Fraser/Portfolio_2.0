import Head from 'next/head'
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Miniprojects from '../components/miniprojects/Miniprojects';
import Miniprojects2 from '../components/miniprojects2/Miniprojects2';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/About/About';
import Mat from '../components/Me/me';
import { Layout } from '../layout/Layout';
import { Section,Sections } from '../styles/GlobalComponents';

const Home = () => {
  return (
       <div className="container">
      <Head>
        <title>Akshat Rawat</title>
        <link rel="icon" href="/akr.png" />
      </Head>
    <Layout>
      <Section grid> 
        <Hero />
        <BgAnimation />
       </Section> 
      <Projects />
      <Miniprojects />
      <Miniprojects2/>
      <Technologies />
       <Sections grid>
      <About />
      <Mat />
      </Sections>
    </Layout>  
    </div>
  );
};

export default Home;
