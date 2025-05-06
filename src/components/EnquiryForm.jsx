import React, { useState } from 'react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enquiry submitted: ' + JSON.stringify(formData));
    // Here you can add form submission logic like API call
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '450px', margin: '30px auto', padding: '25px', border: '1px solid #ddd', borderRadius: '10px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif'" }}>
      <h2 style={{ color: '#003366', marginBottom: '20px', textAlign: 'center' }}>Enquiry Form</h2>
      <div style={{ marginBottom: '15px' }}>
        <label>Name:</label><br />
        <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Email:</label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Phone:</label><br />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Message:</label><br />
        <textarea name="message" value={formData.message} onChange={handleChange} rows="4" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </div>
      <button type="submit" style={{ backgroundColor: '#003366', color: 'white', padding: '12px 25px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600', width: '100%' }}>Submit</button>
    </form>
  );
};

export default EnquiryForm;
