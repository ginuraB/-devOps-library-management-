import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"; // Updated import
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import Login from "./pages/Login"; // Updated import
import UserProfile from "./pages/UserProfile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css"; // Assuming you have some basic styling

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header /> {/* Include the Header component */}
        <Sidebar /> {/* Include the Sidebar component */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/books">Books</Link> |{" "}
          <Link to="/add-book">Add Book</Link> | <Link to="/login">Login</Link> |{" "}
          <Link to="/profile">Profile</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Updated element */}
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetails />} /> {/* Dynamic route for book details */}
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/login" element={<Login />} /> {/* Updated element */}
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </main>
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
};

export default App;