import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-200 h-screen p-4">
      <ul>
        <li className="mb-4">
          <Link to="/" className="block bg-gray-300 py-2 px-4 rounded hover:bg-gray-400">
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/books" className="block bg-gray-300 py-2 px-4 rounded hover:bg-gray-400">
            Books
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/add-book" className="block bg-gray-300 py-2 px-4 rounded hover:bg-gray-400">
            Add Book
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/login" className="block bg-gray-300 py-2 px-4 rounded hover:bg-gray-400">
            Login
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/profile" className="block bg-gray-300 py-2 px-4 rounded hover:bg-gray-400">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
