import React, { useContext, useEffect, useState } from 'react'; 
import './CSS/Shopcategories.css';
import { ShopContext } from '../Context/Shopcontext';
import { Item } from '../Component/Item/item'; // Ensure this matches the actual export in item.js
import dropdown_icon from '../Component/Assest/dropdown_icon.png'; // Import the dropdown icon image

export const Shopcategories = (props) => {
  // const [all, setAll]=useState([]);
  const { all_product } = useContext(ShopContext);
  // useEffect(()=>{
  //   console.log(all_product);
  //   setAll(all_product)
  // },[])

  return (
    <div className="shop-category">
      <img className='shopcategories-banner' src={props.banner} alt="Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((product, i) => {
          if (props.categories === product.category) {
            return (
              <Item
                key={i}
                id={product.id}
                name={product.name}
                image={product.image}
                new_price={product.new_price}
                old_price={product.old_price}
              />
            );
          }
          return null; // Ensure that map always returns something
        })}
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>
    </div>
  );
};
