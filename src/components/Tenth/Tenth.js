import React from 'react'
// import { stepperFunc } from "../../helper/stepperFunc";
import { stepperFuncdecrement } from "../../helper/stepperFunc";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "../Checkout/CheckoutForm"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51LsLqrSHBiOR4sbDUusYOzPw4OJ80hVKAFtUBnurUi3flfHIQLtDYfJgblBjmobWO41ULAuCS1LrvXFBDtrxQQSR00jIgDIWcz')

function Tenth({stepper,setStepper}) {
    // const options = {
    //   // passing the client secret obtained from the server
    //   clientSecret : 'sk_test_51LsLqrSHBiOR4sbDFKqoULLrC41TMjZrgRX12RGl83zQS8AFCzC2Esvt5egIbL9nztFfZRENTy4qq8T3CbmNARjg00tcRmDRBN',
    // };
  
  return (
    <div className="container">
           <div className="top_header_row">
    <div className="top_logo_colom">
     <button onClick={() => stepperFuncdecrement(stepper, setStepper)}>
     <img src = "arrow.png"></img> Back 
      </button>
      </div>
    <div className="main-logo">
      <img src = "main_logo.png"></img>
    </div>
    </div>
    <input type ="text"placeholder='Card holdersname'id="payement"></input>
      <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
      {/* <button onClick={() => stepperFuncdecrement(stepper, setStepper)}>
        prev
      </button> */}
      </div>
  )
}

export default Tenth