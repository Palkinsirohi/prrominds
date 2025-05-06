import React from 'react';

const PropertyInfoCard = ({ title, location, price, image }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', width: '320px', margin: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <img src={image} alt={title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
      <div style={{ padding: '15px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#003366' }}>{title}</h3>
        <p style={{ margin: '0 0 5px 0', color: '#555' }}>{location}</p>
        <p style={{ fontWeight: 'bold', color: '#007acc', fontSize: '18px', margin: 0 }}>{price}</p>
      </div>
    </div>
  );
};

export default PropertyInfoCard;
