import React from 'react'
import './checkout.css'
import Subtotal from './Subtotal'

const Checkout = () => {
  return (
    <div className='checkout'>
        <div className='checkput_left'>
            <img className='checkout-ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' />
            <div>
                <h2 className='checkout_title'>Your Shopping Cart</h2>
            </div>
        </div>

        <div className='checkput_right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout