import React from "react";
import styled from "styled-components";

import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import Image from "next/image";



const NavbarContainer = styled.div`
  width: 100%;
  height: auto;
  display: none;

    
  padding: 0 1.5em;
  @media ${(props) => props.theme.breakpoints.md}{
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    padding-top: 2rem;
    
  }
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
         <Image
            src="images/logo-cm.svg"
            width={50}
            height={50}
            alt="logo"
          />
      <HamburgerMenu />
    </NavbarContainer>
  );
}