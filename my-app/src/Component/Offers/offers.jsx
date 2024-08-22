import React, { useEffect } from 'react';
import './offers.css';
import exclusive_image from '../Assest/exclusive_image.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Offers = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: false,
      offset: 120,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className='offer'>
      <div className="offers-left" data-aos="fade-up">
        <h1 data-aos="fade-up">Exclusive</h1>
        <h1 data-aos="fade-up">Offers for You</h1>
        <p data-aos="fade-up">ONLY FOR THE BEST SELLERS PRODUCT</p>
        <button data-aos="fade-up">Check now</button>
      </div>
      <div className="offers-right" data-aos="fade-up">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};