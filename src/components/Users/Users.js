import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import './Users.css'

const Users = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    const { image, name, post, age, hometown, salary } = props.user;
    return (
        // card section
        <div className="users">
            <div className="user">
                <img src={image} alt="" />
                <h2>Name: {name}</h2>
                <h3>Post: {post}</h3>
                <h3>Age: {age}</h3>
                <h3>Hometown: {hometown}</h3>
                <h3>Salary:${salary}</h3>
            </div>
            <button onClick={() => props.handleAddToCartBtn(props.user)} className="add-to-cart-btn">{cartIcon} Add People</button>

            {/* icons */}
            <div className="social-icons">
                <div className="facebook-icon">
                    <FaFacebookSquare />
                </div>
                <div className="insta-icon">
                    <FaInstagram />
                </div>
            </div>


        </div>
    );
};

export default Users;