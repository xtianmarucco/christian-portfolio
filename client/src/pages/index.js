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
import { motion, useAnimation } from "framer-motion";

const Home = () => {
  // const controls = useAnimation();

  // const handleScrollToSection = (sectionId) => {
  //   const sectionElement = document.getElementById(sectionId);
  //   if (sectionElement) {
  //     controls.start({
  //       y: sectionElement.offsetTop - 50, // You can adjust the offset to fit your layout
  //       transition: { duration: 0.6, ease: "easeInOut" },
  //     });
  //   }
  // };
  return (
    <Layout>
      <Section>
        <Hero />
        {/* <BgAnimation /> */}
      </Section>
      <Projects id="projects" />
      <Technologies id="technologies" />
      <Timeline id="timeline" />
      <ContactMe id="contact" />
      {/* <Acomplishments /> */}
      <ScrollButton />

    </Layout>
  );
};

export default Home;
