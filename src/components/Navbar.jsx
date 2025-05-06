import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { FaHome, FaDollarSign, FaMap, FaSwimmingPool, FaImages, FaMapMarkerAlt, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <style>{`
        a.nav-link {
          color: #8B0000;
          text-decoration: none;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 4px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        a.nav-link:hover {
          color: #FF6347;
          background-color: white;
          box-shadow: 0 0 8px #FF6347;
        }
        a.nav-title {
          color: #8B0000;
          text-decoration: none;
          font-weight: bold;
          font-size: 28px;
          padding: 5px 10px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        a.nav-title:hover {
          color: #FF6347;
          background-color: white;
          box-shadow: 0 0 8px #FF6347;
        }
        nav {
          background-color: white;
          padding: 15px 30px;
          color: #8B0000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          position: relative;
        }
        ul.nav-links {
          list-style: none;
          display: flex;
          gap: 30px;
          margin: 0;
          font-size: 16px;
        }
        .menu-icon {
          display: none;
          font-size: 28px;
          cursor: pointer;
          color: #8B0000;
        }
        @media (max-width: 768px) {
          ul.nav-links {
            flex-direction: column;
            background-color: white;
            position: absolute;
            top: 60px;
            right: 0;
            width: 200px;
            border: 1px solid #8B0000;
            border-radius: 8px;
            padding: 10px;
            display: none;
          }
          ul.nav-links.open {
            display: flex;
          }
          .menu-icon {
            display: block;
          }
        }
      `}</style>
      <nav>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" className="nav-link"><FaHome /> Home</a></li>
          <li><a href="#price" className="nav-link"><FaDollarSign /> Price</a></li>
          <li><a href="#siteplan" className="nav-link"><FaMap /> Site Plan</a></li>
          <li><a href="#amenities" className="nav-link"><FaSwimmingPool /> Amenities</a></li>
          <li><a href="#gallery" className="nav-link"><FaImages /> Gallery</a></li>
          <li><a href="#location" className="nav-link"><FaMapMarkerAlt /> Location</a></li>
          <li><a href="#brochure" className="nav-link"><FaFileAlt /> Brochure</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
