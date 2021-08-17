import React from "react";
import { Link } from "react-router-dom";
import { NavContainer, Logo } from "../styles/NavBar.styles";
import Tooltip from '@material-ui/core/Tooltip';


const NavBar = () => {
  return (
    <NavContainer>
      <Link to="/">
        <Logo />
      </Link>
      <Tooltip title={<h1>Home</h1>} aria-label='Home'>
      <Link to="/">
        <h1>Photobrowser</h1>
      </Link>
      </Tooltip>
    </NavContainer>
  );
};

export default NavBar;
