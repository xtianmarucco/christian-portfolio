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

const ContactForm = () => {
  const { formData, handleChange, handleSubmit, errorMessage, submitted } =
    useContactForm();

  return (
    <ContactFormWrapper>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="name">Name</label>
          <Input
            autoFocus={true}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            maxLength={50} // Maximum length for the name field
            error={submitted && !formData.name}
            required
          />
          {submitted &&
            (!formData.name) && (
              <ErrMessage>Please write your name.</ErrMessage>
            )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <Input
            autoFocus={true}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            error={submitted && !formData.email && (!/\S+@\S+\.\S+/.test(formData.email)) }
          />
          {submitted && (!/\S+@\S+\.\S+/.test(formData.email)) &&
            (!formData.email) && (
              <ErrMessage>Please a valid email adress.</ErrMessage> 
            )}
            {}
        </InputContainer>
        <InputContainer>
          <label htmlFor="message">Message</label>
          <TextArea
            autoFocus={true}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={submitted && !formData.name}
            required
          />
          {submitted &&
            (!formData.name || !formData.email || !formData.message) && (
              <ErrMessage>Please fill in all fields.</ErrMessage>
            )}
        </InputContainer>
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </ContactFormWrapper>
  );
};
export default ContactForm;
