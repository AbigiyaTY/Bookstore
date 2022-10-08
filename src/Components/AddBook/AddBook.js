import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../../redux/books/books';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  return (
    <div className="container" id="addRow">
      <div className="row">
        <hr className="col-12 my-5" />
        <h2 className="col-12 addTitle my-3">ADD NEW BOOK</h2>
        <form className="form row col-12">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="col-4 mx-2"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Author"
            className="col-3"
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          />
          <select
            required
            id="categoryList"
            className="col-2 mx-2"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>Category</option>
            <option>Drama</option>
            <option>Romance</option>
            <option>Fiction</option>
          </select>
          <button
            type="button"
            className="col-2 addButton p-2"
            onClick={() => {
              if (title && author && category) {
                dispatch(
                  postBook({
                    book_id: uuidv4(),
                    category,
                    title,
                    author,
                  }),
                );
                document.querySelector('.form').reset();
              }
            }}
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
