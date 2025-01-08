import React from "react";
import placeholderImage from "../assets/images/home-page-placeholder.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Background image */}
      <img
        src={placeholderImage}
        alt="Library Banner"
        className="w-full h-64 object-cover"
      />

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to the Library Management System
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-xl">
        Manage your library seamlessly! Browse books, manage your account, and borrow books with ease.
      </p>
    </div>
  );
};

export default HomePage;