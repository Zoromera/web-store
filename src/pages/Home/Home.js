import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Function to handle button click and navigate to the store page
  const handleViewStore = () => {
    navigate('/store'); // Redirects to the store page
  };

  return (
    <main className="home-container">
      <section className="home-content">
        {/* Main heading of the Home page */}
        <h2>NextGen Laptops</h2>
        
        {/* Description and welcome message */}
        <p>
          Thank you for visiting De Jong, The home of NextGen Laptops.
          Navigate to the store to explore our wide range of high-performance laptops designed to meet all
          your computing needs. Whether you're a student, professional, gamer, or
          creative, we have the perfect laptop for you. Our mission is to provide
          top-quality devices that enhance your productivity and elevate your
          digital experience, one exceptional laptop at a time.
        </p>

        {/* Container for the 'View Store' button */}
        <div className="button-container">
          {/* Button to navigate to the store page */}
          <button className="view-store-button" onClick={handleViewStore}>View Store</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
