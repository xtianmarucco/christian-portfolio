import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import useSmoothScroll from "../../hooks/useScroll";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {

const  { scrollToSection }  = useSmoothScroll;

  return (
    <Container>
      <Div1>
        <Link
          href="#"
          style={{ display: "flex", aligntItems: "center", color: "white" }}
        >
          <DiCssdeck size="3rem" /> <Span>Hi there</Span>
        </Link>
      </Div1>
      <Div2>
        <>
          <Link href="#projects" onClick={() => scrollToSection("projects")}>
            <NavLink>Projects</NavLink>
          </Link>
        </>
        <>
          <Link
            href="#technologies"
            onClick={() => scrollToSection("technologies")}
          >
            <NavLink>Technologies</NavLink>
          </Link>
        </>
        <>
          <Link href="#about" onClick={() => scrollToSection("about")}>
            <NavLink>About</NavLink>
          </Link>
        </>
        <>
          <Link href="#contact" onClick={() => scrollToSection("contact")}>
            <NavLink>Contact</NavLink>
          </Link>
        </>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/xtianmarucco">
          <AiFillGithub fill="#52d053" size="2.5rem" ></AiFillGithub>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/christian-nicolas-gonzalez-847689181/">
          <AiFillLinkedin fill="#52d053" size="2.5rem" ></AiFillLinkedin>
        </SocialIcons>
        <SocialIcons  href="https://www.instagram.com/xtianmarucco/">
          <AiFillInstagram fill="#52d053" size="2.5rem"></AiFillInstagram>
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
