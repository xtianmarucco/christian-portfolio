import React from "react";
import { useState } from "react";
import { motion } from "framer-motion"

import {

  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {

  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  return (
    <Section nopadding id="projects">
      <SectionDivider></SectionDivider>
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({ image, title, description, id, tags }) => (
            <BlogCard>
              <Img src={image} />
              <TitleContent title>
                <HeaderThree>{title}</HeaderThree>
              </TitleContent>
              <Hr></Hr>
            <CardInfo>{description}</CardInfo>
            <TagList>
              <Tag>{tags}</Tag>
            </TagList>
            </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;
