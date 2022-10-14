import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useNavigate } from "react-router-dom";
import {
    Elements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from 'axios'
export default function CheckoutForm() {
//  const navigate = useNavigate()
    // 1️⃣ Setup state to track client secret, errors and checkout status
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");
    // 2️⃣ Store reference to Stripe
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        // 3️⃣ Create PaymentIntent and fetch client secret as soon as the page loads
        var config = {
            method: 'post',
            url: 'https://secret-reef-17136.herokuapp.com/product/create_payment',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                setClientSecret(response.data.clientSecret);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);
    const handleChange = async (event) => {
        // 4️⃣ Listen for changes in the CardElement and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setProcessing(true);
        // 5️⃣ Confirm Card Payment.
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });
        console.log(payload)
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
          // navigate("/success")
            setError(null);
            setProcessing(false);
            setSucceeded(true);
            
        }

    };
    // 5️⃣ Confirm Card Payment.
    // 6️⃣ Construct UI.
    return (
        <div className="stripeCardPayment">
            <form id="payment-form" onSubmit={handleSubmit}>
                <CardElement
                    id="card-element"
                    options={{}}
                    onChange={handleChange}
                />
                <button disabled={processing || disabled || succeeded} id="submit">
                    <span id="button-text">
                        {processing ? <div className="spinner" id="spinner"></div> : "Purchase Now"}
                    </span>
                </button>
                {/* Show any error that happens when processing the payment */}
                {error && (
                    <div className="card-error" role="alert">{error}</div>
                )}
                {/* Show a success message upon completion */}
                <p className={succeeded ? "result-message" : "result-message hidden"}>Payment succeeded!</p>
            </form>
        </div>
    );
}