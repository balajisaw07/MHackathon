import React, { useEffect } from 'react';
import './hero.css';
import hand_icon from '../Assest/hand_icon.png';
import arrow_icon from '../Assest/arrow.png';
import hero_image from '../Assest/hero_image.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: false,
      offset: 120,
      mirror: false,
      anchorPlacement: 'top-bottom', // This is the default setting
    });
  }, []);

  return (
    <div className='hero'>
      <div className="hero-left" data-aos="fade-up">
        <h2>New Arrival Only</h2>
        <div>
          <div className="hero-hand-icon" data-aos="fade-up" data-aos-delay="200">
            <p>new</p>
            <img src={hand_icon} alt="Hand Icon"/>
          </div>
          <p data-aos="fade-up" data-aos-delay="400">Collection</p>
          <p data-aos="fade-up" data-aos-delay="600">for everyone</p>
        </div>
        <div className="hero-latest-button" data-aos="fade-up" data-aos-delay="800">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow Icon"/>
        </div>
      </div>
      <div className="hero-right" data-aos="fade-up" data-aos-delay="1000">
        <img src={hero_image} alt="Hero Image"/>
      </div>
    </div>
  );
};
