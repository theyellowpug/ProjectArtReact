import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../component/checkout/CheckoutForm";
import "../App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51JUq7hLJBL520A9GMvJ8ado7GfRrJfhO7utmB4mcn0co6efbpbTG1V3WhwrYiAEAIPAK4KcHsJtGsqaNM1f7kted00D8qVtYAi");


export const CheckoutPage = (props) => {
    return (
        <div className="App">
          <Elements stripe={promise}>
            <CheckoutForm cart={props.cart}/>
          </Elements>
        </div>
      );
}

