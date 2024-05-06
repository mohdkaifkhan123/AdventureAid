import React from "react";
import "./Footer.css";
import logo from "../../assets/dubailogo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img className="footerlogo" src={logo} alt="" />
      </div>
      <div className="footer-text-align">
        <div className="footer-text">Home /</div>
        <div className="footer-text">About /</div>
        <div className="footer-text">Contact</div>
      </div>
      <div className="copyright">
      Copyrights 2024. All rights reserved. 
      </div>
    </div>
  );
};

export default Footer;
