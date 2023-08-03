import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
`;

export const ModalContent = styled(motion.div)`
display: grid;
place-items: center;
width: 50%;
background-color: #530da8;
padding: 20px;
border-radius: 8px;
box-shadow: 0 2px 8px #e2e4e97d;
height: 20%;
&:hover {
  cursor: pointer;
  }

}
`;

export const ModalTitle = styled.h2`
  margin-right: 10px;
`;

export const MessageContainer = styled.div`
display:flex;
flex-direction: row:
`;
