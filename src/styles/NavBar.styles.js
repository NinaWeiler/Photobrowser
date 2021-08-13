import styled from "styled-components";
import AppsIcon from '@material-ui/icons/Apps';


export const NavContainer = styled.nav`
  font-size: 18px;
  position: relative;
  top: 0;
  z-index: 99;
  height: 80px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Logo = styled(AppsIcon)`
    width: 50px !important;
    height: 50px !important;
    font-size: 30px !important;
    display: flex !important;
`