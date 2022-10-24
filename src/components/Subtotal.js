import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './Stateprovider';
import './subtotal.css'

const Subtotal = () => {
  const [ { basket }, dispatch] = useStateValue();


  return (
<div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Total items: <strong>{basket.length}</strong>
            </p>
            <p>
              Total Amount: <strong>{value}</strong> 
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Ksh "}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal 