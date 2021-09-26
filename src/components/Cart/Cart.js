import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total =0;
    for(const people of cart){
        total = total + people.salary
    }
    return (
        <div>
             <h2>People Added:{props.cart.length}</h2>
        <h3>Total Cost:{total}</h3>
        </div>
    );
};

export default Cart;