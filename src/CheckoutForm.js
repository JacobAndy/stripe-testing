import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      amount: 0
    };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    axios.post("/charge", { token: token.id, amount: this.state.amount });
  }

  render() {
    this.state.complete && <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <input
          type="number"
          onChange={e => this.setState({ amount: e.target.value })}
        />
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
