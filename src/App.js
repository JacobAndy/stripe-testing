import React, { Component } from "react";
import "./App.css";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

class App extends Component {
  render() {
    {
      /*
      
The App component is the application’s root. 
The JSX template in its render function is 
enclosed in a StripeProvider, which initializes
 Stripe and passes in your publishable key. 
 It’s equivalent to creating a Stripe instance with Stripe.js.

      */
    }
    return (
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;
