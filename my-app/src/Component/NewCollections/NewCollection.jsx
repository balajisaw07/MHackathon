import React from 'react'
import './NewCollection.css'
export const NewCollection = () => {
  return (
    <div className='new-collection'> 
<div className="header">
    <h1>Get Exclusive Offers On Your Email</h1>
    {/* <h1> */}
    <h4>Subscribe to our news letter and stay updated</h4>
</div>
<div className="input-container">
    <input type="email" Placeholder='Your email id' />
    <button>Subscribe</button>
</div>
    </div>
  )
}
