import styled from 'styled-components';
import { motion } from "framer-motion";

export const HamburgerMenuContainer = styled.div`
  display: flex;
`;

export const HamburgerIcon = styled.div`
  color: ${({ reverseColor }) => (reverseColor ? "#000" : "#fff")};
  cursor: pointer;
  z-index: 99;
  transition: all 250ms ease-in-out;
`;

export const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 44%;
  height: 100%;
  background-color: #0F1624;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
`;

export const TopContainer = styled.div`
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

export const IconContainer = styled.div`
  font-size: 16px;
  color: #555;
  padding-right: 5px;
`;


export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;
