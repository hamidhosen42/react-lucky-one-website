import React from 'react';
import "./SelectedBook.css";

const SelectedBook = ({select}) => {
  const {name,img}=select;
  return (
    <div className='select-item'>
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default SelectedBook;