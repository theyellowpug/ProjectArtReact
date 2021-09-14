import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "../api/PaymentApi";
import { findRenderedComponentWithType } from "react-dom/test-utils";


export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus,setPaymentStatus] = useState("");
  const [paymentId,setPaymentId] = useState("");
  
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if(!stripe || !elements){
        return;
    }
    
    createPaymentIntent()
    .then(response => {
        console.log(response.data)
        stripe.confirmCardPayment(
            response.data.clientSecret,{
                payment_method:{
                    card:elements.getElement(CardElement)
                }
            }).then(response2=>{
                console.log(response2.paymentIntent)
                setPaymentId(response2.paymentIntent.id)
                setPaymentStatus(response2.paymentIntent.status)
                })
    })

    
  };

  return (<>
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" onChange={handleChange} />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
    </form>
    <div>
        <h2>{paymentId}</h2>
        <h2>{paymentStatus}</h2>
    </div>
    </>
  );
}

