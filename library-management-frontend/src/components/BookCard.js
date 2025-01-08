import React from "react";

const BookCard = ({ title, author, onClick }) => {
  return (
    <div
      className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{author}</p>
    </div>
  );
};

export default BookCard;
