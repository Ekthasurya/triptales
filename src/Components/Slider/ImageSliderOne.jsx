import React, { useState } from 'react';
import './Slider.css';

const images = [
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6d/e6/26/caption.jpg?w=600&h=-1&s=1', caption: 'Caption for Image 1' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6d/e6/26/caption.jpg?w=600&h=-1&s=1', caption: 'Caption for Image 2' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6d/e6/26/caption.jpg?w=600&h=-1&s=1', caption: 'Caption for Image 3' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6d/e6/26/caption.jpg?w=600&h=-1&s=1', caption: 'Caption for Image 4' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6d/e6/26/caption.jpg?w=600&h=-1&s=1', caption: 'Caption for Image 5' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6d/e6/26/caption.jpg?w=600&h=-1&s=1', caption: 'Caption for Image 6' },
 
];

const ImageSlider = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const maxPosition = images.length - 3; // Last position to show a full set of 3 images

  const nextSlide = () => {
    if (currentPosition < maxPosition) {
      setCurrentPosition(currentPosition + 3);
    }
  };

  const prevSlide = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 3);
    }
  };

  return (
    <div className="slider-wrapper">
      <button onClick={prevSlide} disabled={currentPosition === 0} className="slider-button">
        Previous
      </button>
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${(currentPosition / images.length) * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image.src} alt={`Slide ${index + 1}`} />
              <div className="caption">{image.caption}</div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextSlide} disabled={currentPosition >= maxPosition} className="slider-button">
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
