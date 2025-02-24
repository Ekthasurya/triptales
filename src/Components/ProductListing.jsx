import { Link } from 'react-router-dom';
import { babyProducts } from '../data/products';
import '../Css/ProductListing.css';
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const ProductListing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 < babyProducts.length ? prevIndex + 2 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : prevIndex));
  };

  return (
    <div className='slider-acard'>
          <div className='Button-ucard'>

        <div className='see-box'>
          <p>VIEW ALL</p>
          <div className='arrow'>  <FiArrowRight size={22} color='blue' /></div>

        </div>

          </div>
          <div className="Slider-Container">
          <div className='pro-butt' onClick={handlePrev} disabled={currentIndex === 0} >
          <VscChevronLeft size={30} color='blue' />
          </div>
          {babyProducts.slice(currentIndex, currentIndex + 2).map((item) => (
            <div key={item.id} className="slider-card">
              <div className='card-image'>
             <a href={`#/product/${item.id}`}>   <img src={item.images[0]} alt={item.title} className="slider-image" /></a>
              </div>
              <div className='card-content'>
                <h3 className="slider-title">{item.title}</h3>
              </div>
            </div>
            
          ))}
          <div
          className='pro-butt'
            onClick={handleNext}
            disabled={currentIndex + 2 >= babyProducts.length}>
           <VscChevronRight size={30} color='blue' />
          </div>
           </div>
         </div>
  );
};

export default ProductListing;
