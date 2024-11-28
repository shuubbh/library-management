import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    { name: "Fiction", description: "Immerse in storytelling." },
    { name: "Non-Fiction", description: "Learn from real events." },
    { name: "Science", description: "Expand your knowledge." },
    { name: "History", description: "Explore the past." },
    { name: "Fantasy", description: "Dive into magical worlds." },
    { name: "Biographies", description: "Discover inspiring lives." },
    { name: "Mystery", description: "Solve thrilling puzzles." },
    { name: "Comics", description: "Enjoy visual storytelling." },
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Scholar's Haven</h1>
      <p className="home-subtitle">
        Discover books across various genres and explore a world of knowledge and imagination.
      </p>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <Link to="/category" key={index} className="category-card">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;