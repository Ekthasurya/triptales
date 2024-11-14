import React from 'react'
import ImageSlider from './Slider/ImageSliderOne'
import ImageSliderTwo from './Slider/ImageSliderTwo'
import ImageSliderThree from './Slider/ImageSliderThree'
import ImageSliderFour from './Slider/ImageSliderFour'
import TravelCard from './TravelCard'
import ImageSliderFive from './Slider/ImageSliderFive'
import AdBanner from './AdBanner'
// import image from './caption.jpg';

const SecondPara = () => {
  return (
    <>
    <div className="trip-builder-card">
    <div className="text-content">
        <p className="powered-by">
            Powered by AI <span className="beta-badge">BETA</span>
        </p>
        <h1>AI trip builder gets you out there</h1>
        <p className="description">
            Get a whole getaway’s worth of ideas made for you—ready in seconds.
        </p>
        <button className="try-button">Try it</button>
    </div>
</div>

<div className="cotai-card">
      <div className="cotai-card-image">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ac/41/c2/caption.jpg?w=200&h=200&s=1&cx=748&cy=500&chk=v1_7464c02c95bbf174fc01" alt="Cotai" />
      </div>
      <div className="cotai-card-content">
        <div className="cotai-card-sponsored">Sponsored by Macao Government Tourism Office</div>
        <h2 className="cotai-card-title">Cotai Unveiled: The Entertainment Pulse of Macao</h2>
        <p className="cotai-card-description">
          Welcome to Cotai, pulsating heartbeat of Macao and gateway to unparalleled entertainment.
          This modern marvel is the newest addition to Macao's territories, bridging the once-separate islands of...
        </p>
        <button className="cotai-card-button">Read now</button>
      </div>

       
    </div>


    <div >
      <h3 className='slider-text1'>Treat yourself to an award-winning meal</h3>
      <p className='slider-text2' >2024’s Travellers’ Choice Awards Best of the Best Restaurants</p>
    <ImageSlider/>
    </div>
     
     <div>
    <h3>Treat yourself to an award-winning meal</h3>
    <p>2024’s Travellers’ Choice Awards Best of the Best Restaurants</p>
    <ImageSliderTwo/>
    </div>

    <div>
    <h3>Treat yourself to an award-winning meal</h3>
    <p>2024’s Travellers’ Choice Awards Best of the Best Restaurants</p>
    <ImageSliderThree/>
    </div>

    <div className="cotai-card">
      <div className="cotai-card-image">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ac/41/c2/caption.jpg?w=200&h=200&s=1&cx=748&cy=500&chk=v1_7464c02c95bbf174fc01" alt="Cotai" />
      </div>
      <div className="cotai-card-content">
        <div className="cotai-card-sponsored">Sponsored by Macao Government Tourism Office</div>
        <h2 className="cotai-card-title">Cotai Unveiled: The Entertainment Pulse of Macao</h2>
        <p className="cotai-card-description">
          Welcome to Cotai, pulsating heartbeat of Macao and gateway to unparalleled entertainment.
          This modern marvel is the newest addition to Macao's territories, bridging the once-separate islands of...
        </p>
        <button className="cotai-card-button">Read now</button>
      </div>

       
    </div>

    <div>
      <ImageSliderFour/>
    </div>

    <div>
      <TravelCard/>
    </div>
    

    <div>
    <h3>Treat yourself to an award-winning meal</h3>
    <p>2024’s Travellers’ Choice Awards Best of the Best Restaurants</p>
    <ImageSliderFive/>
    </div>

    <div>
      <AdBanner/>
    </div>

</>
  )
}

export default SecondPara