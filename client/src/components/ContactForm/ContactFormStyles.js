import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 8rem 50px;
  margin: auto auto;
  box-sizing: content-box;

  @media ${(props) => props.theme.breakpoints.md}{
    padding:0px;

  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 0px 0px;
    width: calc(100vw - 32px);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

export const Label = styled.label`
color: rgba(255,255,255,0.5);
`;

export const Input = styled.input`
  border-radius: 15px;
  height: 40px;
  width: auto;
  margin: 1rem 0 2rem 0;
  background-color: #0f1624 !important;
  border: rgba(255,255,255,0.5) 2px solid;
  padding: 5px 15px 5px 15px;
  color: white;
`;
export const TextArea = styled.textarea`
  border-radius: 15px;
  height: 100px;
  margin: 1rem 0 2rem 0;
  background-color: transparent;
  border: rgba(255,255,255,0.5) 2px solid;
  padding: 10px 15px 5px 15px;
  color: white;
`;

export const ErrMessage = styled.p`
color: red;
margin: -15px 0px 12px 0px;`
;


