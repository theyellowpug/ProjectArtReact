import React from "react"

export const PaymentStatusMessage = (props) => {
  return(
  <>
    {props.paymentStatus  === "succeeded" ? (
      <p className={"result-message"}>
        Payment succeeded, see the result in your
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
    ) 
    :
    (
      <p className={"result-message"}>Payment declined: {props.paymentErrorMessage}</p>
    )}
      </>
      )
}
