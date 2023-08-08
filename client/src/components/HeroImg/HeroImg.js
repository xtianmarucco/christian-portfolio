import styled from "styled-components";

const Img = styled.img`
  max-width: 300px;
  max-height: 240px;
  margin: auto;

  @media ${(props) => props.theme.breakpoints.lg} {

    display: none;
   

`;

const HeroImg = () => {
  return (
    <Img
      src="/images/asd.png"
      width={300}
      height={240}
      layout="responsive"
      alt="Me Coding"
    />
  );
};
export default HeroImg;
