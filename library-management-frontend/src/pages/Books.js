import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import "./Books.css"; // Optional styles for Books page

const Books = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Book One", author: "Author One" },
    { id: 2, title: "Book Two", author: "Author Two" },
    { id: 3, title: "Book Three", author: "Author Three" },
  ]);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (query) => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="books-page">
      <h1>Books</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="book-list">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            onClick={() => alert(`You clicked on ${book.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
