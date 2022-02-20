import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "../../api/PaymentApi";
import { PaymentStatusMessage } from "./PaymentStatusMessage";
import { useSelector } from "react-redux";
import './CheckoutForm.css';
import { useEffect } from "react";
import { getProductsOfCartByClientId } from "../../api/CartApi";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router";
import { getClientIdByEmail } from "../../api/ClientApi";


export default function CheckoutForm(props) {

  const state = useSelector((state) => state);

  const history = useHistory();

  const [isTransactionFinished, setIsTransactionFinished] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const [paymentStatus,setPaymentStatus] = useState("");
  const [paymentErrorMessage,setPaymenterrorMessage]=useState("")

  const [cart,setCart] = useState()
  const [clientId,setClientId] = useState()
  
  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if(!stripe || !elements){
        return;
    }
    console.log(cart)
    setProcessing(true);
    createPaymentIntent(clientId)
    .then(response => {
        console.log(response.data) //todo:remove
        stripe.confirmCardPayment(
            response.data.clientSecret,{
                payment_method:{
                    card:elements.getElement(CardElement)
                }
            }).then(response2=>{
                console.log(response2)
                if(response2.paymentIntent){
                  setPaymentStatus(response2.paymentIntent.status)
                }
                else if(response2.error){
                  setPaymenterrorMessage(response2.error.message)
                  setPaymentStatus("failed")
                }                
                
                }).then(response3=>{
                  setProcessing(false)
                  setIsTransactionFinished(true)
                })
    })

  };

  useEffect(()=>{
    state.accessToken!=="" 
    ? 
    getClientIdByEmail(jwt_decode(state.accessToken).sub)
        .then(respone=>{
          setClientId(respone.data)
          getProductsOfCartByClientId(respone.data)
            .then(response2=>setCart({"productIds":response2.data.map(product=>product.id)}))}) 
    : history.push("/login")
  },[state])

  return (
  !isTransactionFinished ? (
    <form className="payment-form" onSubmit={handleSubmit}>
    <CardElement className="card-element" onChange={handleChange} />
    <button className="paymet-button"
      disabled={processing || disabled || isTransactionFinished}
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
  </form>
  ) 
  : 
  (
    <>
      <PaymentStatusMessage paymentStatus={paymentStatus} paymentErrorMessage={paymentErrorMessage}/>
    </>
  ));
}

