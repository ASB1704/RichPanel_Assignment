// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BiCreditCardFront } from 'react-icons/bi';
import "./Payment_Screen.css";
export const Payment_Screen = () => {
  return (
    <div className='Payment_Screen_wrapper'>
        <div className="Payment_Screen_Container">
         <div className="CardInfo">
            <h2>Complete Payment</h2>
            <span>Enter your credit or debit card details below</span>
            <div className="Card_details">
              <BiCreditCardFront />
                <input type="text" placeholder='Card Number'  />
                <input type="text" placeholder='MM / YY'/>
                <input type="text" placeholder='CVC'/>
            </div>
                <input
              type="submit"
              value="Confirm Payment"
              id="signUpButton"
              // onClick={handleSignIn}
            />
         </div>
         <div className="OrderInfo">
          <h2>Order Summary</h2>
          <div className="Order_decription">
            <span>Plan Name</span>
            <span>Basic</span>
          </div>
          <div className="Order_decription">
            <span>Billing Cycle</span>
            <span>Monthly</span>
          </div>
          <div className="Order_decription">
            <span>Plan price</span>
            <span>200rs</span>
          </div>
         </div>
        </div>
        </div>
  )
}
