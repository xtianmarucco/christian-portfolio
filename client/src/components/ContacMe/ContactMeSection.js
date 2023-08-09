import React from "react";
import ContactForm from "../ContactForm/ContactForm";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {} from "./ContactMeSectionStyles";
import { LeftSection } from "../Hero/HeroStyles";

const ContactMe = () => (
  <Section flex row id="contact">
    <LeftSection>
      <SectionDivider></SectionDivider>
      <SectionTitle main>Contact me</SectionTitle>
      <SectionText>
        Do you have an idea that you want to bring to life, just send me a
        message for sure we can make it work togheter
      </SectionText>
    </LeftSection>
    
      <ContactForm></ContactForm>
    </Section>
);

export default ContactMe;
