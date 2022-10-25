import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from './Stateprovider';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [ { basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
         dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
         })
    }


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
            <button onClick={removeFromBasket}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct