import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'
export const Item = (props) => {
  return (
    <div className='item'>
  <Link to={`/Product/${props.id}`}>
                <img src={props.image} alt="Product" />
            </Link>       
        <p>
            {props.image}
        </p>
        <div className="item-prices">
            <div className="item-prices-new">
                ${props.new_price}
            </div>
            <div className="items-prices-old">
                {props.old_price}
            </div>
        </div>
    </div>
  )
}
