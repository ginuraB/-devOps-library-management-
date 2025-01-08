import React from "react";
import "./BookCard.css";

const BookCard = ({ title, author, onClick }) => {
  return (
    <div className="book-card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default BookCard;
