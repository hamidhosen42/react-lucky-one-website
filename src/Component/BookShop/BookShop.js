import React, { useEffect, useState } from "react";
import BookCart from "../BookCart/BookCart";
import SelectedBook from "../SelectedBook/SelectedBook";
import "./BookShop.css";
import Modal from "react-modal";
import { CgCloseR } from "react-icons/cg";
import BookModel from "../BookModel/BookModel";

const BookShop = () => {
  const [books, setBooks] = useState([]);
  const [selected, setSelected] = useState([]);
  const [modal, setModal] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "130px",
      width: "300px",
      overflow: "auto",
    },
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  },[]);

  const handleAddToCart = (Item) => {
    let newCart;    

    if(selected.length===0)
    {
      newCart = [...selected, Item];
      setSelected(newCart);
    }
    else if(selected.find(o=>o.id===Item.id))
    {
      alert("This Book is already added.");
    }
    else if(selected.length<4)
    {
      newCart = [...selected, Item];
      setSelected(newCart);
    }
    else
    {
      alert("You can't add more than 4 item");
    }
  };

  const toggleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const resetItem = () => {
    if (selected.length === 0) {
      alert("Select Book Item is empty");
    } else {
      const set = setSelected([]);
      return set;
    }
  };

  return (
    <div>
      <h2 className="choose-book">Choose 4 Books</h2>
      <div className="bookshop-container">
        <div id="bookcart" className="bookcart-container">
          {books.map((book) => (
            <BookCart
              book={book}
              key={book.id}
              handleAddToCart={handleAddToCart}
            ></BookCart>
          ))}
        </div>
        <div id="selected-cart" className="selected-container">
          <h2>Selected Book Item</h2>
          {selected.map((select) => (
            <SelectedBook select={select} key={select.id}></SelectedBook>
          ))}
          <button onClick={toggleModal} className="choose-1-button">
            CHOOSE 1 FOR ME
          </button>
          <button onClick={resetItem} className="choose-again">
            {" "}
            RESET ITEM
          </button>
        </div>

        <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
          <button className="modal-close-button" onClick={closeModal}>
            <CgCloseR size={25} />
          </button>
          {selected.length === 0 && (
            <div className="cart-warning">
              <p> Select Book Item Empty </p>
            </div>
          )}
          <BookModel key={selected.id} selected={selected}></BookModel>
        </Modal>
      </div>
    </div>
  );
};

export default BookShop;