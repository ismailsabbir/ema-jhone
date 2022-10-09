import React from "react";
import "../Header/Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <nav className="NabBar">
      <div className="NavLogo">
        <img src={logo} alt="" />
      </div>
      <div className="NavItem">
        <a>Order</a>
        <a>OrderReview</a>
        <a>Manage Inventory</a>
        <a>Login</a>
      </div>
    </nav>
  );
};

export default Header;
