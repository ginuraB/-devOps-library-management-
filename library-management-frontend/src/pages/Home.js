import React from "react";
import bannerImage from "../assets/images/library-banner.png";
import logoImage from "../assets/images/library-logo.png";

const Home = () => {
  return (
    <div className="home-page">
      <img src={bannerImage} alt="Library Banner" className="home-banner" />
      <h1>Welcome to the Library Management System</h1>
      <img src={logoImage} alt="Library Logo" className="home-logo" />
    </div>
  );
};

export default Home;
