import React from 'react';
import './Book.css';

const Book = (props) => {
  const { type, title, author } = props;
  return (
    <div>
      <div className="container bookContainer py-4">
        <div className="row totalRow">
          <div className="col-5">
            <div className="row">
              <h5 className="col-12 booktype">{type}</h5>
              <h2 className="col-12 bookTitle">{title}</h2>
              <h5 className="col-12 author">{author}</h5>
              <button type="button" className="col-3 my-2 removeButton">Remove </button>
            </div>
          </div>
          <div className="col-3" />
          <div className="col-4" />
        </div>
      </div>
    </div>
  );
};
export default Book;
