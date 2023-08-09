import styled from 'styled-components';


export const SectionHero = styled.div`
display: flex;
flex-direction:row;
width:100%;


`;

export const LeftSection = styled.div`
  width: auto;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: auto;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;


export const Image = styled.img`
  width: 50%;
  height: auto;
`;