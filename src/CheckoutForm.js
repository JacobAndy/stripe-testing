import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) console.log("Purchase Complete!");
  }

  render() {
    this.state.complete && <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        {/*
        
         The CardElement includes inputs for all of the major card fields: the card number, the expiration date, and the CVC

        */}
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

{
  /*
  
  You must use the wrapped component in your application instead of the original CheckoutForm
  
  */
}

export default injectStripe(CheckoutForm);
