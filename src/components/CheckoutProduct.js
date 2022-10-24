import React from 'react'
import './checkoutproduct.css'

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className='checkoutproduct'>
        <img src={image} className='checkoutproduct_image' />
        <div className='checkoutproduct_info'>
            <p className='checkoutproduct_title'>{title}</p>
            <p className='checkoutproduct_price'>
                <small>Ksh. </small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutproduct_rating'>
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
                
            </div>
            <button>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct