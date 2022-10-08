import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import './BookList.css';

const BookDisplay = ({ bookList }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {bookList.map((book) => (
        <div key={book.item_id}>
          <div className="container bookContainer py-4">
            <div className="row totalRow">
              <div className="col-5">
                <h5 className="col-12 booktype">{book.category}</h5>
                <h2 className="col-12 bookTitle">{book.title}</h2>
                <h5 className="col-12 author">{book.author}</h5>
              </div>
              <div className="row">
                <button className="col-1 my-2 removeButton" type="button">
                  Comments
                </button>
                <button
                  className="col-1 my-2 mx-2 removeButton"
                  type="button"
                  id={book.item_id}
                  onClick={(event) => dispatch(removeBook(event.target.id))}
                >
                  Remove
                </button>
                <button type="button" className="col-1 my-2 removeButton">
                  Edit
                </button>
              </div>
              <div className="col-3" />
              <div className="col-4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
BookDisplay.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};

export default BookDisplay;
