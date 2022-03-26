import React, { useEffect, useState } from "react";
import BookCart from "../BookCart/BookCart";
import SelectedBook from "../SelectedBook/SelectedBook";
import "./BookShop.css";

const BookShop = () => {
  const [books, setBooks] = useState([]);
  const [selected, setSelected] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleAddToCart = (Item) => {
    const newCart = [...selected, Item];
    setSelected(newCart);
  };
  console.log(selected);

  const delateItem=(selected)=>{
    selected=[];
    console.log(selected);
  }

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
        <button className="choose-1-button">CHOOSE 1 FOR ME</button>
        <button onClick={()=>delateItem(selected)} className="choose-again">CHOOSE AGAIN</button>
      </div>
    </div>
  );
};

export default BookShop;