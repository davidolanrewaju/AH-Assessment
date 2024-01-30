import { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import your CSS file for styling

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'assets/imagev2.jpg',
    'assets/imagev5.jpg',
    'assets/imagev11.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the time interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
