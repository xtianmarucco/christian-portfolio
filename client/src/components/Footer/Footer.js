import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call me</LinkTitle>
      <LinkItem href="tel: +5491153895408">+54 9 11 53895408</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>E-mail me</LinkTitle>
      <LinkItem href="mailto:christian.marucco@gmail.com">christian.marucco@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer> Design and built by Christian Marucco</CompanyContainer>
        <SocialContainer>
        <SocialIcons>
        <AiFillGithub fill="#52d053" size="2.5rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons>
        <AiFillLinkedin fill="#52d053" size="2.5rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons>
        <AiFillInstagram fill="#52d053" size="2.5rem"></AiFillInstagram>
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
