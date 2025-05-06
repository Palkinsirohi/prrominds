import React, { useState } from 'react';

const images = [
  'https://ganganewtown-dhanori.com/goel/assets/images/slider/slide1.jpg',
  'https://ganganewtown-dhanori.com/goel/assets/images/slider/slide2.jpg',
  'https://ganganewtown-dhanori.com/goel/assets/images/slider/slide3.jpg',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '20px auto', borderRadius: '8px', overflow: 'hidden' }}>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={{ width: '100%', display: 'block' }} />
      <button onClick={prevSlide} style={{ position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.3)', border: 'none', color: 'white', fontSize: '30px', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px' }}>‹</button>
      <button onClick={nextSlide} style={{ position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.3)', border: 'none', color: 'white', fontSize: '30px', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px' }}>›</button>
    </div>
  );
};

export default ImageCarousel;
