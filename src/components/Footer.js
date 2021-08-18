import React from "react";
import { FooterContainer } from "../styles/Footer.styles.js";

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        <strong>Photobrowser</strong> by{" "}
        <a href="https://github.com/NinaWeiler/Photobrowser">Nina Weiler</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
