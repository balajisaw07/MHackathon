import React from 'react';
import './Productdisplay.css';
import star_dull_icon from "../Assest/star_dull_icon.png";
import star_icon from "../Assest/star_icon.png"; // Added this line

export const Productdisplay = (props) => {
    const { product } = props;
    
    return (
        <div className="Productdisplay">
            <div className="Productdisplay-left">
                <div className="Productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdiplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>122</p>
                </div>
                <div className="productdiaplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                    <div className="productdisplay-right-desription">
                        A lightweight,usually knitted,pullover shirt,close-fitting and a round neckline
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select size</h1>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className="productdisplay-right-category">
                    <span>Category:</span>Women,T-Shirt,Crop top
                </p>
                <p className="productdisplay-right-category">
                    <span>Tags:</span>Women,T-Shirt,Crop top
                </p>
            </div>
        </div>
    );
}
