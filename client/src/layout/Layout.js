import React from "react";

import useContactForm from "../hooks/useContactForm";

import Footer from "../components/Footer/Footer";
import { Container } from "./LayoutStyles";
import { Navbar } from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";

export const Layout = ({ children }) => {
  return (
    <Container>     
      <Header></Header>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
