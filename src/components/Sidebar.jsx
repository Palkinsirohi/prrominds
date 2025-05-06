import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar bg-white w-72 p-4 shadow-xl fixed right-0 top-0 h-screen z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}>
      {/* Organize Site Visit Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="bg-red-600 text-white px-3 py-1 text-sm rounded">Organize Site Visit</span>
        <a href="tel:+919606970803" className="bg-red-600 text-white px-3 py-1 text-sm rounded font-semibold">
          +91 9606970803
        </a>
      </div>

      {/* Request Call Back Button */}
      <button className="w-full bg-red-600 text-white py-2 font-semibold rounded mb-4 hover:bg-red-700 transition">
        Request Call Back
      </button>

      {/* ENQUIRE NOW Form */}
      <div className="enquiry-section">
          <div className="flex items-center justify-center mb-2">
          <h3 className="text-lg font-semibold text-center leading-none">ENQUIRE NOW</h3>
          <a href="https://wa.me/919606970803" target="_blank" rel="noopener noreferrer" className="whatsapp-icon flex items-center">
            <img src="/what1.webp" alt="WhatsApp" className="w-6 h-6" />
          </a>
        </div>
        <form className="enquiry-form space-y-3">
          <input type="text" placeholder="Name" className="w-full border border-gray-300 px-3 py-2 rounded" />
          <div className="flex border border-gray-300 rounded overflow-hidden">
            <span className="bg-gray-100 px-3 py-2 flex items-center">+91</span>
            <input type="tel" placeholder="Mobile Number" className="w-full px-2 py-2" />
          </div>
          <p className="text-xs text-gray-600">
            I Consent to The Processing of Provided Data According To{' '}
            <a href="#" className="text-blue-600 underline">Privacy Policy</a>,{' '}
            <a href="#" className="text-blue-600 underline">Terms & Conditions</a>.
          </p>
          <button type="submit" className="w-full bg-red-600 text-white py-2 font-semibold rounded hover:bg-red-700 transition">
            Submit
          </button>
        </form>

        {/* WhatsApp Image Section */}
        <div className="mt-4">
          <img
            src="/place1.webp"
            alt="Pickup Service"
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Floating Icons (bottom right) */}
      <div className="fixed bottom-6 right-6 space-y-3 z-50">
        
        <button className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
          💬
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
