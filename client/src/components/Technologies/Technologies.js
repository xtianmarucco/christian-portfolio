import React from 'react';
import { DiDatabase, DiReact, DiZend } from 'react-icons/di';
import { SiAdobe } from "react-icons/si";

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="technologies"> 
    <SectionDivider></SectionDivider>
    <br></br>
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>I've worked with a wide range of front-end technologies during my carrer and that provided me not only experience and knowledge but the ability to make the right choices regarding the development process.</SectionText>
    <List>
      <ListItem>
        <DiReact fill="#52d053"  size="4rem"></DiReact>
        <br></br>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience working with React, Angular, Bootstrap, Material design, CSS, SCSS, Tailwinds, Styled components.</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase fill="#52d053"  size="3.5rem"></DiDatabase>
        <br></br>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience working with NodeJS, Express, Postgress, MySql.</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobe  fill="#52d053" size="3rem"></SiAdobe>
        <br></br>
        <ListContainer>
          <ListTitle>Design</ListTitle>
          <ListParagraph>Experience working with Illustrator, Photoshop, AdobeXD, Figma</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
