import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    // constructor() {
    //     super(); // this is used to call parent class constructor
    // }

    render() {
        return (
            <div className="cart">
               <CartItem/>
               <CartItem/>
               <CartItem/>
            </div>
        );
    }
}

export default Cart;