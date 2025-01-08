import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css"; // If you want to style the layout

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar /> {/* Sidebar on the left */}
        <div className="main-content"> {/* Main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer /> {/* Footer at the bottom */}
      </div>
    </Router>
  );
};

export default App;
