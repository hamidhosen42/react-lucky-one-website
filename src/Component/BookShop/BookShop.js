import React, { useEffect, useState } from 'react';
import BookCart from '../BookCart/BookCart';
import "./BookShop.css"

const BookShop = () => {
    const [books,setBooks]=useState([]);

        useEffect(() => {
          fetch("data.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
        }, []);

    return (
        <div className='bookshop-container'>
            <div className='bookcart-container'>
                {
                    books.map((book)=>(
                        <BookCart book={book} key={book.id}></BookCart>
                    ))
                }
            </div>
            <div>
                <h3>Selected Book Item</h3> 
            </div>
        </div>
    );
};

export default BookShop;