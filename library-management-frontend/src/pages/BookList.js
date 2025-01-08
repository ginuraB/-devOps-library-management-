import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (query) => {
    const result = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(result);
  };

  return (
    <div className="book-list-page">
      <h1>Book List</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="book-list">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            onClick={() => alert(`You selected "${book.title}"`)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
