import React from "react";
import "./Header.css";
import logo from "../../assets/dubailogo.png";
const Header = () => {
  return (
    <div className="container">
      <div className="containerTop">
        <div className="text-header-top">CALL US TO PLAN A TRIP: +916388604556</div>
        <div className="text-header-top">OR EMAIL US: khank11111999@gmail.com</div>
      </div>
      <div className="containerNav">
        
          <img className="weblogo"src={logo} alt=""/>
      
      <div className="text">Home</div>
      <div className="text">Activities</div>
      <div className="text">Packages</div>
      <div className="text">SignUp</div>
      </div>
    </div>
  );
};
export default Header;
