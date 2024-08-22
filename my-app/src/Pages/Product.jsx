import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext';
import {useParams} from 'react-router-dom';
import { Productdisplay } from '../Component/Productdisplay/Productdisplay';
import {Breadcrum}  from '../Component/Breadcrum/breadcrum';

export const Product = () => {
  const{all_product}=useContext(ShopContext);
  const{productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/ >
      
      <Productdisplay product={product}/>
    </div>
  )
}
