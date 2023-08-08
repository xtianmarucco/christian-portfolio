import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;

  @media (max-width: 770px) {
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
`;

export const Link = styled.div`
  font-size: 24px;
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  margin: 5px 5px;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;
// `;

export const NavLinks = styled.a`
display: flex;
flex-direction: row;
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  margin: 5px 5px;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
  @media (max-width: 770px) {
    display: none;
  }
`;


export const Hamburger = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin-left: auto;
  @media (min-width: 771px) {
    display: none;
  }
`;

export const IconsContainer = styled.div`
display: flex;
flex-direction: row; 
 @media (max-width: 770px) {
    display: none;
  }
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

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.isOpen ? '0' : '-300px')};
  width: 300px;
  height: 100%;
  background-color: #222;
  padding: 20px;
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      margin: 10px 0;
      cursor: pointer;
      color: white;
    }
  }
  @media (max-width: 770px) {
    position: fixed; /* Ensure the sidebar stays fixed on mobile */
  }
`;