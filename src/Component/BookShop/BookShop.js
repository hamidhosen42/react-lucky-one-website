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
        height: "200px",
        width: "300px",
        overflow: "auto",
      },
    };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleAddToCart = (Item) => {
    const newCart = [...selected, Item];
    setSelected(newCart);
  };

    const toggleModal = () => {
      setModal(true);
    };

    const closeModal = () => {
      setModal(false);
    };

    console.log(selected.length);

  return (
    <div className="bookshop-container">
      <div className="bookcart-container">
        {books.map((book) => (
          <BookCart
            book={book}
            key={book.id}
            handleAddToCart={handleAddToCart}
          ></BookCart>
        ))}
      </div>
      <div className="selected-container">
        <h2>Selected Book Item</h2>
        {selected.map((select) => (
          <SelectedBook select={select} key={select.id}></SelectedBook>
        ))}
        <button onClick={toggleModal} className="choose-1-button">
          CHOOSE 1 FOR ME
        </button>
        <button className="choose-again">CHOOSE AGAIN</button>
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
  );
};

export default BookShop;