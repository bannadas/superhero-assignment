import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Users from '../Users/Users';
import './Main.css'

const Main = () => {
    const [users,setUsers] = useState([]);
    const [cart,setCart] =useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then( data => setUsers(data))
      },[])


      const  handleAddToCartBtn = user =>{
          const newCart = [...cart,user];
          setCart(newCart);
      }
    

    return (
        <div className="main-container">
            <div className="left-side-card">
       
        {
           users.map(user => <Users key={user.age} 
            user={user} handleAddToCartBtn={handleAddToCartBtn}></Users>) 
        }
            </div>


            {/* cart */}
            <div className="right-side">
       <Cart key={cart.name} 
       cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;