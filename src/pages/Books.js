import React from "react";
import booksImage from "../assets/images/books-page-placeholder.png";
import "./Books.css";

const Books = () => {
  return (
    <div className="books-page">
      <h2>Books Collection</h2>
      <p>Browse through our wide selection of books!</p>
      <img src={booksImage} alt="Books Page" className="books-image" />
    </div>
  );
};

export default Books;
