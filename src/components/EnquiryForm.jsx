import React, { useState } from 'react';
import './EnquiryForm.css';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enquiry submitted: ' + JSON.stringify(formData));
  };

  return (
    <div className="enquiry-wrapper">
      <h2 className="enquiry-title">ENQUIRY NOW</h2>
      <div className="enquiry-container">
        <div className="we-promise-box">
          <button className="promise-header">WE PROMISE</button>
          <div className="promise-item">
            <span>🎧</span>
            <div><strong>INSTANT</strong><br />CALL BACK</div>
          </div>
          <div className="promise-item">
            <span>🚗</span>
            <div><strong>FREE</strong><br />SITE VISIT</div>
          </div>
          <div className="promise-item">
            <span>💰</span>
            <div><strong>UNMATCHED</strong><br />PRICE</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="enquiry-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div className="phone-input">
            <span className="flag">🇮🇳 +91</span>
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <label className="consent-label">
            <input type="checkbox" required defaultChecked />
            I Consent to The Processing of Provided Data According To <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>.
          </label>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      <div className="info-section">
        <button className="info-btn">GET INFORMATION ON AVAILABILITIES</button>
        <div className="info-options">
          <div>🛏️ Available Units</div>
          <div>📄 Payment Plan</div>
          <div>📐 Floor Plans</div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
