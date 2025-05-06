import React from 'react';

const ServiceAd = ({ title, description, image }) => {
  return (
    <div style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '10px', margin: '15px', overflow: 'hidden', maxWidth: '620px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <img src={image} alt={title} style={{ width: '220px', objectFit: 'cover' }} />
      <div style={{ padding: '15px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#003366' }}>{title}</h3>
        <p style={{ margin: 0, color: '#555' }}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceAd;
