import React from "react";
import { BsEnvelopeCheck } from "react-icons/bs/index";
import { GrFormClose } from "react-icons/gr/index";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  MessageContainer,
} from "./ModalSuccesStyles";

const ModalSuccess = () => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <ModalOverlay>
         <AnimatePresence>
            <ModalContent
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={handleClose}
            >
              <MessageContainer>
                <ModalTitle>Message sent successfully!</ModalTitle>
                <BsEnvelopeCheck
                  fill="rgb(82, 208, 83)"
                  size="2em"
                ></BsEnvelopeCheck>
              </MessageContainer>
            </ModalContent>
          </AnimatePresence>
        </ModalOverlay>
      )}
    </>
  );
};

export default ModalSuccess;
