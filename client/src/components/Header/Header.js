import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="#"
        style={{ display: "flex", aligntItems: "center", color: "white" }}
      >
        <DiCssdeck size="3rem" /> <Span >Hi there</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies" >
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" >
         <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
         <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons>
        <AiFillGithub fill="#52d053" size="2.5rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons>
        <AiFillLinkedin fill="#52d053" size="2.5rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons>
        <AiFillInstagram fill="#52d053" size="2.5rem"></AiFillInstagram>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
