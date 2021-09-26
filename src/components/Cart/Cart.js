import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let total =0;
    for(const people of cart){
        total = total + people.salary;
    }
   
    const name = cart.map(people =>
        <div style={{display:'flex'}}>
            <img style={{width:'100px', height:'100px',borderRadius:'50px'}} src={people.image} alt="" />
            <h4>{people.name}</h4>
        </div>
    )
    return (
        <div>
             <h2>People Added:{props.cart.length}</h2>
        <h3>Total Cost:{total}</h3>
        <div>
            {name}
        </div>
        </div>
    );
};

export default Cart;