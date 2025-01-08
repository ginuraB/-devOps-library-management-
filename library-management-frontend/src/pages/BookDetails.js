import React from "react";
import "./BookDetails.css";

const BookDetails = ({ title, author, description, onBorrow }) => {
  return (
    <div className="book-details-page">
      <h1>{title}</h1>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Description:</strong> {description}</p>
      <button onClick={onBorrow}>Borrow</button>
    </div>
  );
};

export default BookDetails;
