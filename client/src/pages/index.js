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
import HeroImg from "../components/HeroImg/HeroImg";
const Home = () => {
  const { scrollToSection } = useSmoothScroll;

  return (
    <Layout>
      <Section flex row >
        <Hero />
        <HeroImg />
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
