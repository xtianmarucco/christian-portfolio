// import Acomplishments from "../components/Acomplishments/Acomplishments";
// import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import ContactMe from "../components/ContacMe/ContactMeSection";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import ScrollButton from "../components/ScrollButton/ScrollButton";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import useSmoothScroll from "../hooks/useScroll";
const Home = () => {

  const  { scrollToSection }  = useSmoothScroll;
  
  return (
    <Layout>
      <Section>
        <Hero />
        {/* <BgAnimation /> */}
      </Section>
    
        <Projects />
      
     
        <Technologies />
      
        <Timeline />
     
        <ContactMe />
      

      {/* <Acomplishments /> */}
      <ScrollButton />
    </Layout>
  );
};

export default Home;
