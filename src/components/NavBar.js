import React from "react";
import { Link } from "react-router-dom";
import { NavContainer } from "../styles/NavBar.styles";

const NavBar = () => {
  return (
      <NavContainer>
        <Link to="/">
        <h1>Photobrowser</h1>
        </Link>
    </NavContainer>
  );
};

export default NavBar;
