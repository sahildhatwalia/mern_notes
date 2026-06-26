import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate("/login")
  const handlelogout=()=>{
    localStorage.removeItem("user")
navigate("/login")
  }
  return (
    <div className="page-container">
      <h1>Welcome to React website</h1>
      <p>this is design to help you. all react concept are define in details and clear</p>
      <div className="cta-buttons">
        <button onClick={handlelogout}>Logout</button>
        <Link to="/services" className="button">Our Services</Link>
        <Link to="/contact" className="button">Contact Us</Link>
      </div>
    </div>
  );
};

export default Home;