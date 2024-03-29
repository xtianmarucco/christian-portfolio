import { motion } from "framer-motion";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import React from "react";
import useSmoothScroll from "../../hooks/useScroll";
import styled from "styled-components";

const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  padding: 0 0.8em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(motion.li)`
  font-weight: 600;
  height: 42px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    transition: all 200ms ease-in-out;
  }

  &:hover {
    a {
      color: #555;
    }
  }
`;

const TopContainer = styled(motion.div)`
  display: flex;
  width: 100%;
`;
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};


export function NavMenu({ isOpen }) {

  const  { scrollToSection }  = useSmoothScroll;

  return (
    <NavMenuContainer>
      <NavList>
        <NavLink
          onClick={() => scrollToSection("projects")}
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <a href="#projects">Projects</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <a href="#technologies">Technologies</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
          onClick={() => scrollToSection("about")}
        >
          <a href="#about">About</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.3, duration: 0.05 },
            },
          }}
          onClick={() => scrollToSection("contact")}
        >
          <a href="#contact">Contact</a>
        </NavLink>
      </NavList>
      <TopContainer
        initial={false}
        animate={isOpen ? "show" : "hide"}
        variants={{
          show: {
            ...variants.show,
            transition: { delay: 0.4, duration: 0.5 },
          },
          hide: {
            ...variants.hide,
            transition: { delay: 0.5, duration: 0.5 },
          },
        }}
      >
        <SocialIcons href="https://github.com/xtianmarucco">
          <AiFillGithub fill="#52d053" size="2.5rem"></AiFillGithub>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/christian-nicolas-gonzalez-847689181/">
          <AiFillLinkedin fill="#52d053" size="2.5rem"></AiFillLinkedin>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/christian-nicolas-gonzalez-847689181/">
          <AiFillInstagram fill="#52d053" size="2.5rem"></AiFillInstagram>
        </SocialIcons>
      </TopContainer>
    </NavMenuContainer>
  );
}
