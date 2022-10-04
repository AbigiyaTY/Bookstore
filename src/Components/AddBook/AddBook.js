import React from 'react';
import './AddBook.css';

const AddBook = () => (
  <div>
    <div className="container" id="addRow">
      <div className="row">
        <hr className="col-12 my-5" />
        <h2 className="col-12 addTitle my-3"> ADD NEW BOOK </h2>
        <form className="row col-12">
          <input type="text" className="col-4 mx-4" placeholder="Book title" required />
          <div className="col-1" />
          <input type="text" className="col-3" placeholder="Book Author" required />
          <div className="col-1" />
          <button type="submit" className="col-2 addButton p-2"> Add Book </button>
        </form>
      </div>
    </div>
  </div>
);

export default AddBook;
