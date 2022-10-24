import React from 'react'
import './checkout.css'
import { useStateValue } from './Stateprovider';
import Subtotal from './Subtotal'
import Checkoutproduct from './CheckoutProduct'

const Checkout = () => {

  const [ { basket }, dispatch] = useStateValue();


  return (
    <div className='checkout'>
        <div className='checkput_left'>
            <img className='checkout-ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' />
            <div>
                <h2 className='checkout_title'>Your Shopping Cart</h2>
                {basket.map(item => (
                  <Checkoutproduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
            </div>
        </div>

        <div className='checkput_right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout