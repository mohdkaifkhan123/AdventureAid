import React from "react";
import "./Header.css";
import logo from "../../assets/dubailogo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <div className="containerTop">
        <div className="text-header-top">
          CALL US TO PLAN A TRIP: +916388604556
        </div>
        <div className="text-header-top">
          OR EMAIL US: khank11111999@gmail.com
        </div>
      </div>
      <div className="containerNav">
        <div className="weblogo">
          <img className="weblogo" src={logo} alt="" />
        </div>
        <Link className="link" to='/'><div className="text">Home</div></Link>
        <Link className="link" to="/activities">
         
          <div className="text">Activities</div>
        </Link>
       <Link className="link" to="/package"> <div className="text">Packages</div></Link>
        <div className="text">About US</div>
        <div className="text">Contact US</div>
        <div className="text">SignUp</div>
      </div>
    </div>
  );
};
export default Header;
