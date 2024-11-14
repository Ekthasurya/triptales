import React, { useState } from 'react';
import './slider3.css';

const images = [
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e8/71/9a/caption.jpg?w=300&h=300&s=1', caption: 'Caption for Image 1' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e8/71/9a/caption.jpg?w=300&h=300&s=1', caption: 'Caption for Image 2' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e8/71/9a/caption.jpg?w=300&h=300&s=1', caption: 'Caption for Image 3' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e8/71/9a/caption.jpg?w=300&h=300&s=1', caption: 'Caption for Image 4' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e8/71/9a/caption.jpg?w=300&h=300&s=1', caption: 'Caption for Image 5' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e8/71/9a/caption.jpg?w=300&h=300&s=1', caption: 'Caption for Image 6' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e8/71/9a/caption.jpg?w=300&h=300&s=1', caption: 'Caption for Image 7' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e8/71/9a/caption.jpg?w=300&h=300&s=1', caption: 'Caption for Image 8' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e8/71/9a/caption.jpg?w=300&h=300&s=1', caption: 'Caption for Image 9' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e8/71/9a/caption.jpg?w=300&h=300&s=1', caption: 'Caption for Image 10' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e8/71/9a/caption.jpg?w=300&h=300&s=1', caption: 'Caption for Image 11' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e8/71/9a/caption.jpg?w=300&h=300&s=1', caption: 'Caption for Image 12' }
];

const ImageSliderThree = () => {
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
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${(currentPosition / images.length) * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
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

export default ImageSliderThree;
