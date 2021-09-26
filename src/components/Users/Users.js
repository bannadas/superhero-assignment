import React from 'react';
import './Users.css'

const Users = (props) => {
    
    const {image,name,post,age,hometown,salary} = props.user
    return (
        <div className="users">
            <div className="user">
            <img src={image} alt="" /> 
           <h3>Name: {name}</h3> 
           <h3>Post: {post}</h3> 
           <h3>Age: {age}</h3> 
           <h3>Hometown: {hometown}</h3> 
           <h3>Salary: {salary}</h3> 
            </div>
            <button onClick={()=>props.handleAddToCartBtn(props.user)} className="add-to-cart-btn">Add To Cart</button>
           
        </div>
    );
};

export default Users;