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
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="home-title">Discover the World of Books</h1>
        <p className="home-subtitle">
          From epic adventures to insightful biographies, explore your next great read.
        </p>
        <Link to="/explore" className="explore-button">
          Explore Now
        </Link>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2 style={{"fontFamily":"cursive"}}className="categories-title">Browse by Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link to={`/category/${category.name}`} key={index} className="category-card">
              <div className="category-card-overlay">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
