import React from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = ({ user }) => {
  const userData = {
    username: "john_doe",
    name: "John Doe",
    location: "New York, USA",
    birthday: "1990-01-01",
    interests: ["Reading", "Traveling", "Coding"],
    borrowedBooks: [
      { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { id: 2, title: "1984", author: "George Orwell" },
    ],
  };

  return (
    <div className="user-profile-page">
      <h1>{userData.name}'s Profile</h1>
      <div className="profile-details">
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Location:</strong> {userData.location}</p>
        <p><strong>Birthday:</strong> {userData.birthday}</p>
        <p><strong>Interests:</strong> {userData.interests.join(", ")}</p>
        <Link to="/change-password">
          <button className="change-password-button">Change Password</button>
        </Link>
      </div>
      <h2>Borrowed Books:</h2>
      <ul>
        {userData.borrowedBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;