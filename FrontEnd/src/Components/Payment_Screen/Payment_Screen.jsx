// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Payment_Screen.css";
export const Payment_Screen = () => {
  return (
    <div className='Payment_Screen_wrapper'>
        <div className="Payment_Screen_Container">
         <div className="CardInfo">
            <h2>Complete Payment</h2>
            <span>Enter your credit or debit card details below</span>
            <div className="Card_details">
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
         </div>
         <div className="OrderInfo"></div>
        </div>
        </div>
  )
}
