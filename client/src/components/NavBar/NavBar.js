import React from "react";
import styled from "styled-components";

import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";


const NavbarContainer = styled.div`
  width: 100%;
  height: 55px;
  display: none;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1.5em;
  @media ${(props) => props.theme.breakpoints.md}{
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 1rem;
    padding-top: 2rem;
    
  }
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <HamburgerMenu />
    </NavbarContainer>
  );
}