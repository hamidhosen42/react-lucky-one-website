import React from 'react';

const BookModel = ({selected}) => {
    let x = Math.floor(Math.random() * selected.length);
    return (
      <div>
        <div className="select-item">
          <img src={selected[x].img} alt="" />
          <h3>{selected[x].name}</h3>
        </div>
      </div>
    );
};

export default BookModel;