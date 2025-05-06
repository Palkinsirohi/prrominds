import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#003366', color: 'white', padding: '25px 20px', textAlign: 'center', marginTop: '50px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <p style={{ margin: '5px 0' }}>© 2024 Goel Ganga New Town. All rights reserved.</p>
      <p style={{ margin: '5px 0' }}>Contact: <a href="mailto:info@ganganewtown.com" style={{ color: '#66b2ff', textDecoration: 'none' }}>info@ganganewtown.com</a> | Phone: +91 12345 67890</p>
    </footer>
  );
};

export default Footer;
