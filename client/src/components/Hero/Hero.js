import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle>Hi, I'm Christian, welcome to my portfolio. </SectionTitle>
    <SectionText>Experienced and reliable front-end developer with design skills, dedicated to delivering exceptional web solutions. Trustworthy and committed to excellence. Let's create an outstanding digital experience together.</SectionText>
    <Button  onClick={()=> window.location = "www.google.com"} >Learn more</Button>
  </LeftSection>

</Section>
);

export default Hero;