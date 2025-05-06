import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import PropertyInfoCard from './components/PropertyInfoCard';
import ServiceAd from './components/ServiceAd';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

const services = [
  {
    title: 'Home Loan Assistance',
    description: 'Get easy home loans with low interest rates.',
    image: 'https://ganganewtown-dhanori.com/goel/assets/images/services/home_loan.jpg',
  },
  {
    title: 'Property Management',
    description: 'Professional property management services.',
    image: 'https://ganganewtown-dhanori.com/goel/assets/images/services/property_management.jpg',
  },
];

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleFloatingButtonClick = () => {
    alert('Contact us at info@ganganewtown.com');
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div style={{ display: 'flex', maxWidth: '1200px', margin: '20px auto', flexDirection: sidebarOpen ? 'column' : 'row' }}>
        <main style={{ flex: 1 }}>
          <section id="home" style={{ margin: '20px 0', textAlign: 'center' }}>
            <img src="/img1.webp" alt="Home" style={{ maxWidth: '100%', borderRadius: '8px' }} />
          </section>
          {/* <ImageCarousel /> */}
          {/* <BHKCarousel /> */}
          <section id="siteplan" style={{ margin: '20px 0', textAlign: 'center' }}>
            <img src="/place1.webp" alt="Site Plan" style={{ maxWidth: '100%', borderRadius: '8px' }} />
          </section>
          <section id="amenities" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '20px 0' }}>
            {services.map((service, index) => (
              <ServiceAd key={index} {...service} />
            ))}
          </section>
          <section id="gallery" style={{ margin: '20px 0' }}>
            {/* <ImageCarousel /> */}
          </section>
          <section id="location" style={{ margin: '20px 0', textAlign: 'center' }}>
            <img src="/gall1.webp" alt="Location" style={{ maxWidth: '100%', borderRadius: '8px' }} />
          </section>
          <section id="brochure" style={{ margin: '20px 0', textAlign: 'center' }}>
            <img src="/img2.webp" alt="Brochure" style={{ maxWidth: '100%', borderRadius: '8px' }} />
          </section>
          <Sidebar isOpen={sidebarOpen} />
          <section id="contact" style={{ margin: '20px 0' }}>
            <EnquiryForm />
          </section>
        </main>
      </div>
      <Footer />
      <FloatingButton onClick={handleFloatingButtonClick} />
    </>
  );
};

export default App;
