import React from 'react';
import './Sidebar.css'; // We will create this CSS file for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-image-container">
        <img src="/place1.webp" alt="Place" className="sidebar-image" />
      </div>
      <div className="sidebar-content">
        <h2>Goel Ganga New Town</h2>
        <p>Dhanori, Pune</p>
        <ul className="sidebar-links">
          <li><a href="#properties">Properties</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
