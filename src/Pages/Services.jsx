import React from 'react';

const Services = () => {
  const services = [
    { id: 1, name: 'Web Development', description: 'Professional website development services' },
    { id: 2, name: 'Graphic Design', description: 'Creative design solutions for your brand' },
    { id: 3, name: 'SEO Optimization', description: 'Improve your search engine rankings' }
  ];

  return (
    <div className="page-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;