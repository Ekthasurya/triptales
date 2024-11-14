import React, { useState } from 'react';
import './Slider4.css';

const images = [
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/12/64/28/22173b5f-2e95-401f.jpg?w=400&h=300&s=1', caption: 'Caption for Image 1' },
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/12/64/28/22173b5f-2e95-401f.jpg?w=400&h=300&s=1', caption: 'Caption for Image 2' },
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/12/64/28/22173b5f-2e95-401f.jpg?w=400&h=300&s=1', caption: 'Caption for Image 3' },
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/12/64/28/22173b5f-2e95-401f.jpg?w=400&h=300&s=1', caption: 'Caption for Image 4' },
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/12/64/28/22173b5f-2e95-401f.jpg?w=400&h=300&s=1', caption: 'Caption for Image 5' },
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/12/64/28/22173b5f-2e95-401f.jpg?w=400&h=300&s=1', caption: 'Caption for Image 6' },
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/12/64/28/22173b5f-2e95-401f.jpg?w=400&h=300&s=1', caption: 'Caption for Image 7' },
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/12/64/28/22173b5f-2e95-401f.jpg?w=400&h=300&s=1', caption: 'Caption for Image 8' },
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/12/64/28/22173b5f-2e95-401f.jpg?w=400&h=300&s=1', caption: 'Caption for Image 9' }
  ];

const ImageSliderFour = () => {
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
  )
}

export default ImageSliderFour