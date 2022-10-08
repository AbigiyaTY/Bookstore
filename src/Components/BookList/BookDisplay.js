import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import './BookList.css';

const BookDisplay = ({ bookList }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (e) => {
    dispatch(removeBook(e.target.id));
  };
  return (
    <div className="container py-4">
      <div className="row">
        {bookList.map((book) => (
          <div key={book.id}>
            <h3 className="col-12 bookTitle">{book.title}</h3>
            <h3 className="col-12 author">{book.author}</h3>
            <button
              type="button"
              id="book.id"
              className="col-3 my-2 removeButton"
              onClick={handleRemoveBook}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

BookDisplay.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default BookDisplay;
