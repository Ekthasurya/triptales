import React, { useState } from 'react'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import FlightInfoCard from './FlightInfoCard';
import FareSelector from './FareSelector';
import { TiThMenu } from 'react-icons/ti';

const HomeSection = () => {

  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

    const handleIconClick = () => {
        setSelected(!selected); // Toggle the selected state
    };

    const handleIconClick2 = () => {
      setSelected2(!selected2); // Toggle the selected state
  };

  const handleIconClick3 = () => {
    setSelected3(!selected3); // Toggle the selected state
};
  return (
    <div className='homeSectionBody'>
       <div className='homeNavbar'>
        <div className='navpoint'>
          <h3 className='headText'>Triptales</h3>
        <h5 className='subText'>Uncover the Timeless Beauty of Rural Wonders</h5></div>
        <div className='navpoint menubar'><button className='signButton'>Login/SignUp</button> <div className='menu'> <TiThMenu  color='#ccc'  size={30} /></div></div>
       </div>

       <div className='HomeCard'>
        {/* first section of Card */}
         <div className='firstCard'>
             <div className='leftFcard'>
                 <div className='circle' onClick={handleIconClick} >
                 <div 
                className={`circle-icon ${selected ? 'selected' : ''}`} 
                
            >
                {selected ? <FaCheckCircle size={20} /> : <FaRegCircle size={20} />} {/* Display icon based on selection */}
            </div>
                 <p>One Way</p>
                 </div>

                 <div className='circle' onClick={handleIconClick2} >
                 <div 
                className={`circle-icon ${selected2 ? 'selected2' : ''}`} 
                
            >
                {selected2 ? <FaCheckCircle size={20} /> : <FaRegCircle size={20} />} {/* Display icon based on selection */}
            </div>
                 <p>Round Trip</p>
                 </div>


                 <div onClick={handleIconClick3} className='circle' >
                 <div 
                className={`circle-icon ${selected3 ? 'selected3' : ''}`} 
                
            >
                {selected3 ? <FaCheckCircle size={20} /> : <FaRegCircle size={20} />} {/* Display icon based on selection */}
            </div>
                 <p>Multi City</p>
                 </div>
                 
                 
             </div>
             <div className='rifgtFcard'>Book International and Domestic Flights</div>
          </div>  

        {/* second section of Card */}

       
          <FlightInfoCard/>
          <FareSelector/>


       </div>
    </div>
  )
}

export default HomeSection