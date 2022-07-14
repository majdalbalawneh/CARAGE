import React from 'react';
import './HeroSection.css';
import '../style.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./vid/pexels-westarmoney-10710639.mp4' autoPlay loop muted />
      <div id='containerDiv'>
      <h1>ADVENTURE AWAITS</h1>
      <p>Get premium services with carage professional patrol car service</p>
      <div className='hero-btns'>
      <div className="ml-auto btn">
            <a className="btn btn-custom" href="/Services">
              Discover More
            </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HeroSection;