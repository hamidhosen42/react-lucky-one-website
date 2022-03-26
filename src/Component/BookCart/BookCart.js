import React from 'react';
import "./BookCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const BookCart = ({ book,handleAddToCart}) => {
  const { img, name, price } =book;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h2 className="product-name">Name: {name}</h2>
        <h5 className='product-price'>Price: ${price}</h5>
      </div>
      <button
        className="btn-cart"
        onClick={()=>handleAddToCart(book)}
      >
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default BookCart;