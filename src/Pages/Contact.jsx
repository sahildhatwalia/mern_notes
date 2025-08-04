import React from 'react';

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit" className="button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;