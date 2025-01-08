import React from "react";

import logo from "../assets/images/library-logo.png";
import banner from "../assets/images/library-banner.png";

const Header = () => {
  return (
    <header className="header">
      <img src={banner} alt="Library Banner" className="banner-image" />
      <div className="logo-container">
        <img src={logo} alt="Library Logo" className="logo-image" />
        <h1>Library Management System</h1>
      </div>
    </header>
  );
};

export default Header;
