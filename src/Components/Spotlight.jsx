import React, { useEffect, useState } from 'react'
import "../Css/Spotlight.css"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const images =[
         "https://res.cloudinary.com/dhd5do52g/image/upload/v1731998963/one_onijdk.jpg",
          "https://res.cloudinary.com/dhd5do52g/image/upload/v1731998972/one2_c8xpk0.jpg",
          "https://res.cloudinary.com/dhd5do52g/image/upload/v1731998985/one3_yc9gyy.jpg",
          "https://res.cloudinary.com/dhd5do52g/image/upload/v1731999012/one4_fp6vit.jpg",
          "https://res.cloudinary.com/dhd5do52g/image/upload/v1731999028/one5_i6zzld.jpg",
          "https://res.cloudinary.com/dhd5do52g/image/upload/v1731999057/one6_gueaq2.jpg",
          "https://res.cloudinary.com/dhd5do52g/image/upload/v1731999077/one7_ht358i.jpg"
]

const Spotlight = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const delay = 8000;
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, delay);
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  return (
    <div className="spotlight-container">
    <div className="spotlight-slider">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="spotlight-image"
      />
      <button className="spotlight-button prev" onClick={prevSlide}>
      <AiOutlineLeft />
      </button>
      <button className="spotlight-button next" onClick={nextSlide}>
      <AiOutlineRight />
      </button>
    </div>
  </div>
  )
}

export default Spotlight