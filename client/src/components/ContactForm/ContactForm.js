import React, { useState } from "react";
import useContactForm from "../../hooks/useContactForm";
import Button from "../../styles/GlobalComponents/Button";

import {
  ContactFormWrapper,
  InputContainer,
  TextArea,
  Input,
  ErrMessage,
} from "./ContactFormStyles";
import ModalSuccess from "../Modal/ModalSuccess";

function ContactForm() {
  const {
    fullname,
    setFullname,
    email,
    setEmail,
    subject,
    setSubject,
    message,
    setMessage,
    errors,
    buttonText,
    showModal,
    showSuccessMessage,
    showFailureMessage,
    handleClose,
    handleSubmit,
    handleValidation,
  } = useContactForm();

  return (
    <ContactFormWrapper>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <label>Full name</label>
          <Input
            type="text"
            value={fullname}
            onBlur={handleValidation}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
          />
           {errors["fullname"] && (
            <ErrMessage>Please, write your name.</ErrMessage>  
          )  }
        </InputContainer>
        <InputContainer>
          <label>Email</label>
          <Input
            type="email"
            name="email"
            value={email}
            onBlur={handleValidation}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            hasError={errors["email"] === "required" || errors["email"] === "invalid"} // Pass the hasError prop based on the presence of errors
          />
           {errors["email"] === "required" && (
            <ErrMessage> write your email, we won't share your info.</ErrMessage>
          ) }
          {errors["email"] === "invalid" && (
            <ErrMessage>Invalid email format.</ErrMessage>
          )}
        </InputContainer>
        <InputContainer>
          <label>Subject</label>
          <Input
            type="text"
            name="subject"
            value={subject}
            onBlur={handleValidation}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
              {errors["subject"] && (
            <ErrMessage>Don't forget the subject.</ErrMessage>  
          ) }
        </InputContainer>
        <InputContainer>
          <label>Message</label>
          <TextArea
            type="text"
            name="message"
            value={message}
            onBlur={handleValidation}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></TextArea>
              {errors["message"] && (
            <ErrMessage>Don't forget to write your message.</ErrMessage>  
          )  }
        </InputContainer>
      <Button>{buttonText}</Button>
      </form>

      {showModal && (
        <ModalSuccess onClick={handleClose} /> // Replace YourModalComponent with your actual modal component
      )}
    </ContactFormWrapper>
    
     
  );
}
export default ContactForm;
