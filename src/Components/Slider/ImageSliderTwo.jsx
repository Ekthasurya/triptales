import React, { useState } from 'react';
import './Slider2.css';

const images = [
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/ad/24/caption.jpg?w=800&h=-1&s=1', caption: 'Caption for Image 1' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/ad/24/caption.jpg?w=800&h=-1&s=1', caption: 'Caption for Image 2' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/ad/24/caption.jpg?w=800&h=-1&s=1', caption: 'Caption for Image 3' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/ad/24/caption.jpg?w=800&h=-1&s=1', caption: 'Caption for Image 4' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/ad/24/caption.jpg?w=800&h=-1&s=1', caption: 'Caption for Image 5' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/ad/24/caption.jpg?w=800&h=-1&s=1', caption: 'Caption for Image 6' }
];

const ImageSliderTwo = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const maxPosition = images.length - 4; // Last position to show 4 images

  const nextSlide = () => {
    if (currentPosition < maxPosition) {
      setCurrentPosition(currentPosition + 4);
    }
  };

  const prevSlide = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 4);
    }
  };

  return (
    <div className="slider-containert">
      <div
        className="slidert"
        style={{ transform: `translateX(-${(currentPosition / images.length) * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slidet" key={index}>
            <img src={image.src} alt={`Slide ${index + 1}`} />
            <div className="caption">
              <span className="icon"></span>
              {image.caption}
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={prevSlide} disabled={currentPosition === 0}>
          Previous
        </button>
        {currentPosition < maxPosition && (
          <button onClick={nextSlide}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageSliderTwo;
