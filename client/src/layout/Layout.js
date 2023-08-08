import React from "react";

import useSmoothScroll from "../hooks/useScroll";

import Footer from "../components/Footer/Footer";
import { Container } from "./LayoutStyles";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Navbar } from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";

export const Layout = ({ children }) => {
  const  { scrollToSection }  = useSmoothScroll;


  return (
    
    <Container> 
      <Header/>
      <Navbar/>
      {/* <NavigationBar />     */}
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
