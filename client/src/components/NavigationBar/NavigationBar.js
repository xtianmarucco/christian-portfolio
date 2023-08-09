import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons from react-icons library
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import {
  Nav,
  Link,
  NavLink,
  Logo,
  NavLinks,
  Hamburger,
  Sidebar,
  IconsContainer,
  SocialIcons,
} from "./NavigationBarStyles"; // Create these styled components
import useSmoothScroll from "../../hooks/useScroll";

const NavigationBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { scrollToSection } = useSmoothScroll;

  return (
    <Nav>
      <Logo>Logo</Logo>
      <NavLinks>
        <li>
          <Link href="#projects" onClick={() => scrollToSection("projects")}>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link
            href="#technologies"
            onClick={() => scrollToSection("technologies")}
          >
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about" onClick={() => scrollToSection("about")}>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={() => scrollToSection("contact")}>
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </NavLinks>

      <IconsContainer>
        <SocialIcons>
          <AiFillGithub fill="#52d053" size="2.5rem"></AiFillGithub>
        </SocialIcons>
        <SocialIcons>
          <AiFillLinkedin fill="#52d053" size="2.5rem"></AiFillLinkedin>
        </SocialIcons>
        <SocialIcons>
          <AiFillInstagram fill="#52d053" size="2.5rem"></AiFillInstagram>
        </SocialIcons>
      </IconsContainer>
      <Hamburger onClick={toggleSidebar}>
        {isSidebarOpen ? <FiX fill="#52d053"></FiX> : <FiMenu fill="#52d053"></FiMenu>}
      </Hamburger>
      {/* Render the sidebar conditionally */}
      <Sidebar isOpen={isSidebarOpen}>
        <Hamburger onClick={toggleSidebar}>
        {isSidebarOpen ? <FiX fill="#52d053"></FiX> : <FiMenu fill="#52d053"></FiMenu>}
        </Hamburger>
        <ul>
          <li>Projects</li>
          <li>Technologies</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Sidebar>
    </Nav>
  );
};

export default NavigationBar;
