import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="enquiry-section">
        <h3>ENQUIRE NOW</h3>
        <button className="callback-btn">Request Call Back</button>
        <form className="enquiry-form">
          <input type="text" placeholder="Name" className="input-field" />
          <div className="phone-input">
            <span className="country-code">+91</span>
            <input type="tel" placeholder="Mobile Number" className="input-field" />
          </div>
          <p className="consent-text">
            I Consent to The Processing of Provided Data According To <a href="#">Privacy Policy</a>, 
            <a href="#">Terms & Conditions</a>.
          </p>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <div className="whatsapp-icon">
          <img src="/place1.webp" alt="WhatsApp" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
