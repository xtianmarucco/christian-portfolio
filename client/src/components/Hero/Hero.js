import React from "react";
import Link from "next/link";
import {
  SectionText,
  SectionTitle,
  Section,
  
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import useSmoothScroll from "../../hooks/useScroll";;

const Hero = (props) => {
  const { scrollToSection } = useSmoothScroll;

  return (
    <Section nopadding >
      <LeftSection>
        <SectionTitle>I'm Christian, welcome to my portfolio. </SectionTitle>
        <SectionText>
          Experienced front-end developer with design skills, dedicated to
          delivering exceptional web solutions. Trustworthy and committed to
          results. Let's create an outstanding digital experience together.
        </SectionText>
        <Link href="#about" onClick={() => scrollToSection("about")}>
          <Button>Learn more</Button>
        </Link>

       
      </LeftSection>

    </Section>
  );
};

export default Hero;
