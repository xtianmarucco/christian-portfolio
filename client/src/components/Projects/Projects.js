import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ButtonSmall from "../../styles/GlobalComponents/ButtonSmall";

import {
  BlogCard,
  AnimatePresence,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  ToggleButton,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  MoreButton,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    // Fetch data from the API route
    fetch("/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(projects);

  const [isShown, setIsShown] = useState({});
  const handleToggle = (projectId) => {
    setIsShown((prevIsShown) => ({
      ...prevIsShown,
      [projectId]: !prevIsShown[projectId],
    }));
  };

  return (
    <Section  id="projects">
      <SectionDivider></SectionDivider>
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({ title, image, description, tags }) => (
          <motion.div
            key={title}
            initial={{ opacity: 1 }} // Start with opacity 1 to avoid flickering on initial load
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <BlogCard
              animate={{ height: isShown[title] ? "auto" : "500px" }}
              initial={{ height: "500px" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Img src={image} />
              <TitleContent title>
                <HeaderThree>{title}</HeaderThree>
              </TitleContent>
              <MoreButton onClick={() => handleToggle(title)}>
                {isShown[title] ? "Hide Details" : "Show Details"}
              </MoreButton>
              <AnimatePresence>
                {isShown[title] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                  >
                    <CardInfo>{description}</CardInfo>
                    <TagList>
                      <Tag>{tags}</Tag>
                    </TagList>
                  </motion.div>
                )}
              </AnimatePresence>
            </BlogCard>
          </motion.div>
        ))}
      </GridContainer>
    </Section>
  );
};
export default Projects;
