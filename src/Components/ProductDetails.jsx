import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { babyProducts } from '../data/products';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { BiBadge } from 'react-icons/bi';
import '../Css/ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = babyProducts.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Product not found!</p>;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const openModal3 = () => {
    setIsModalOpen3(true);
  };

  const closeModal3 = () => {
    setIsModalOpen3(false);
  };

  // const openModal4 = () => {
  //   setIsModalOpen4(true);
  // };

  // const closeModal4 = () => {
  //   setIsModalOpen4(false);
  // };

  const [openModalForRoom, setOpenModalForRoom] = useState(null);
  const openModal4 = (roomId) => setOpenModalForRoom(roomId);
  const closeModal4 = () => setOpenModalForRoom(null);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="main-dCard">
        <p className='hotel-title'>{product.title}</p>
        <div className='cover-img-div'>
          <div className="gallery-container">
            {/* Display the first image */}
            <div className="first-image-box" onClick={openModal}>
              <img src={product.images[0]} alt="Main" className="first-main-image" />
              <div className="overlay">
                <p>+{product.images.length - 1} more photos</p>
              </div>
            </div>
            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <button className="close-button" onClick={closeModal}>
                    &times;
                  </button>
                  <div className="modal-images">
                    {product.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="modal-image"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='sm-img-div'>
            <div className="gallery-container-sm">
              {/* Display the first image */}
              <div className="first-image-box" onClick={openModal2}>
                <img src={product.images[0]} alt="Main" className="first-main-image-sm" />
                <div className="overlay">
                  <p>+{product.images.length - 1} more photos</p>
                </div>
              </div>
              {isModalOpen2 && (
                <div className="modal">
                  <div className="modal-content">
                    <button className="close-button" onClick={closeModal2}>
                      &times;
                    </button>
                    <div className="modal-images">
                      {product.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Image ${index + 1}`}
                          className="modal-image"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="gallery-container-sm">
              {/* Display the first image */}
              <div className="first-image-box" onClick={openModal3}>
                <img src={product.images[0]} alt="Main" className="first-main-image-sm" />
                <div className="overlay">
                  <p>+{product.images.length - 1} more photos</p>
                </div>
              </div>
              {isModalOpen3 && (
                <div className="modal">
                  <div className="modal-content">
                    <button className="close-button" onClick={closeModal3}>
                      &times;
                    </button>
                    <div className="modal-images">
                      {product.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Image ${index + 1}`}
                          className="modal-image"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
          <div className='price-map'>
            <div className='price-div'>
              <p className='hotel-title'>{product.title}</p>
              <p>No meals included</p>
              <p>Non-Refundable</p>
              <div>
                <p>Per Night :</p>
                <p className='price-head'>₹{product.startingPrice}</p>
              </div>
              <div className='book-button'>BOOK THIS NOW</div>
            </div>
            <div className='map-div'>
              <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/map-icon-dtls.png" alt="" />
              <p>{product.location}</p>
              <Link to="/#map"><p>See On Map</p></Link>
            </div>
          </div>
        </div>

        <div className="description-container">
          <div className={`description-text ${isExpanded ? 'expanded' : ''}`}>
            {product.description}
          </div>
          {!isExpanded && (
            <button className="toggle-button" onClick={handleToggle}>
              See More
            </button>
          )}
          {isExpanded && (
            <div className="modal-overlay" onClick={handleToggle}>
              <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <p className='about-des'>About</p>
                <hr />
                <p>{product.description}</p>
                <button className="closee-button" onClick={handleToggle}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="amenities-section">
          <h2>Amenities</h2>
          <div className="amenities-list">
            {product.amenities.map((amenity, index) => (
              <div key={index} className="amenity-item">
                <span className="amenity-icon">{amenity.icon}</span>
                <span className="amenity-name">{amenity.name}</span>
                {amenity.isPaid && amenity.price && (
                  <span className="amenity-price">({amenity.price})</span>
                )}
              </div>
            ))}
          </div>
        </div>



      </div>

      <div className='room-section'>
        <p className='hotel-title'>Room-Type</p>
        {product.room.map((room, index) => (
          <div key={room.id} className="room-card">
            <div className='cover-head'>
              <div className="gallery-container-sm">
                {/* Display the first image for each room */}
                <div className="first-image-box" onClick={() => openModal4(room.id)}>
                  <img src={room.images[0]} alt="Room" className="first-main-image-sm" />
                  <div className="overlay">
                    <p>+{room.images.length - 1} more photos</p>
                  </div>
                </div>
              </div>

              {/* Modal for Room Images */}
              {openModalForRoom === room.id && (
                <div className="modal">
                  <div className="modal-content">
                    <button className="close-button" onClick={closeModal4}>
                      &times;
                    </button>
                    <div className="modal-images">
                      {room.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Room Image ${index + 1}`}
                          className="modal-image"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div className='rule-div'>
                <p className='rule-head'>Room Only</p>
                <p>No meals included</p>
                <p>Non-Refundable</p>
              </div>
              <div className='room-price'>
                <div>
                  <p>Per Night :</p>
                  <p className='price-head'>₹{room.price.season}</p>
                </div>
                <div className='book-button'>BOOK THIS NOW</div>
              </div>
            </div>
            <h3>{room.type}</h3>
            <p className='room-des'>{room.description}</p>


            <div className="amenities-section">
              <h2>Amenities</h2>
              <div className="amenities-list">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <span className="amenity-icon">{amenity.icon}</span>
                    <span className="amenity-name">{amenity.name}</span>
                    {amenity.isPaid && amenity.price && (
                      <span className="amenity-price">({amenity.price})</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}



      </div>

      <div className="container-map" id='map'>
        <div className="box-map">
          <div className="content-map">
            <h2 className="title-map">Location</h2>
            <div className="details-map">
              <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.888755387299!2d86.1232861!3d23.213708699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5d1a9587df843%3A0x9921f8774df3f1ea!2sLa%20Bella%20Hotel%20%26%20Resort!5e1!3m2!1sen!2sin!4v1734714018412!5m2!1sen!2sin"
                >
                </iframe>
              </div>
              <div className="text-container">
                <p class="address">Hilltop,Ajodhya,Purulia</p>
                 <p class="address">West Bengal 723152</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default ProductDetails;
