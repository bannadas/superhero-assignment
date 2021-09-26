import React from 'react';
import {FaUser} from "react-icons/fa"
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total =0;
    for(const people of cart){
        total = total + people.salary;
    }
   
    const people = cart.map(people =>
        <div className="cart-added-people" >
            <img style={{width:'80px', height:'80px',borderRadius:'40px'}} src={people.image} alt="" />
            <h4>{people.name}</h4>
        </div>
    )
    // cart section
    return (
        <div>
             <h2><FaUser/> People Added:{props.cart.length}</h2>
        <h3>Total Cost:${total}</h3>
        <div >
            <div>
            {people}
            </div>
        </div>
        </div>
    );
};

export default Cart;