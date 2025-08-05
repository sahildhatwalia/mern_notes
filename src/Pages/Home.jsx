import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container">
      <h1>Welcome to React website</h1>
      <p>this is design to help you. all react concept are define in details and clear</p>
      <div className="cta-buttons">
        <Link to="/services" className="button">Our Services</Link>
        <Link to="/contact" className="button">Contact Us</Link>
      </div>
    </div>
  );
};

export default Home;