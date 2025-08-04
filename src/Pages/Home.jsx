import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container">
      <h1>Welcome to Our Website</h1>
      <p>We provide the best services in town. Explore what we offer!</p>
      <div className="cta-buttons">
        <Link to="/services" className="button">Our Services</Link>
        <Link to="/contact" className="button">Contact Us</Link>
      </div>
    </div>
  );
};

export default Home;