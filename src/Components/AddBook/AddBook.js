import React from 'react';
import './AddBook.css';

function AddBook() {
  return (
    <div>
      <div className="container" id="addRow">
        <div className="row">
          <hr className="col-12 my-5" />
          <h2 className="col-12 addTitle my-3">ADD NEW BOOK</h2>
          <input type="text" className="col-4 mx-4" placeholder="Book title" required />
          <div className="col-1" />
          <input type="text" className="col-3" placeholder="Book Author" required />
          <div className="col-1" />
          <button type="button" className="col-2 addButton p-2">Add Book</button>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
