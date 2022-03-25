import React from 'react';
import "./BookCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const BookCart = (props) => {
    const {img,name,price}=props.book;
    return (
      <div className="product">
        <img src={img} alt="" />
        <div className="product-info">
          <h3 className="product-name">Name: {name}</h3>
          <h5>Price: ${price}</h5>
        </div>
        <button  className="btn-cart">
          <p className="btn-text">Add to Cart</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    );
};

export default BookCart;