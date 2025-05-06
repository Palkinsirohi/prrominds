import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <>
      <style>{`
        a.nav-link {
          color: white;
          text-decoration: none;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        a.nav-link:hover {
          color: red;
          background-color: white;
        }
        a.nav-title {
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size: 28px;
          padding: 5px 10px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        a.nav-title:hover {
          color: red;
          background-color: white;
        }
      `}</style>
      <nav style={{ backgroundColor: '#003366', padding: '15px 30px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
        
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', margin: 0, fontSize: '16px' }}>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#price" className="nav-link">Price</a></li>
          <li><a href="#siteplan" className="nav-link">Site Plan</a></li>
          <li><a href="#amenities" className="nav-link">Amenities</a></li>
          <li><a href="#gallery" className="nav-link">Gallery</a></li>
          <li><a href="#location" className="nav-link">Location</a></li>
          <li><a href="#brochure" className="nav-link">Brochure</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
