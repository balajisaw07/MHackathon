import React, { useEffect } from 'react';
import './Popular.css';
import data_product from '../Assest/data';
import { Item } from '../Item/item';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const Popular = () => {
    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'ease-in-out',
          once: false,
          delay: 0,
          offset: 120,
          mirror: false,
          anchorPlacement: 'top-bottom',
          disable: function() {
            return window.innerWidth < 768;
          },
          startEvent: 'DOMContentLoaded',
        });
      }, []);

  return (
    <div className="Popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <div
              key={i}
              data-aos="fade-up" 
              data-aos-delay={i * 100} // Delay dynamically based on the index
            >
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          );
        })}
      </div>
    </div>
  )
}
