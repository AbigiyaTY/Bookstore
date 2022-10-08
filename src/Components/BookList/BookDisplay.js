import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import './BookDisplay.css';
import './circle.css';

const BookDisplay = ({ bookList }) => {
  const dispatch = useDispatch();
  const percentage = Math.floor(Math.random() * 100);
  const textToPass = `${percentage}%`;

  return (
    <div>
      {bookList.map((book) => (
        <div key={book.item_id}>
          <div className="container bookContainer py-4 my-3">
            <div className="row totalRow">
              <div className="col-5">
                <h5 className="col-12 booktype">{book.category}</h5>
                <h2 className="col-12 bookTitle">{book.title}</h2>
                <h5 className="col-12 bookAuthor">{book.author}</h5>
                <div className="col-12">
                  <button className="col-3 my-2 removeButton comment" type="button">
                    Comments
                    <span>|</span>
                  </button>
                  <button
                    className="col-3 my-2 removeButton"
                    type="button"
                    id={book.item_id}
                    onClick={(event) => dispatch(removeBook(event.target.id))}
                  >
                    Remove
                    <span>|</span>
                  </button>
                  <button type="button" className="col-3 my-2 removeButton">
                    Edit
                  </button>
                </div>
              </div>
              <div className="col-4 row my-3">
                <div className="col-5 circle">
                  <div className="c100 p34 center">
                    <span>{textToPass}</span>
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </div>
                <div className="col-5 row cicleText">
                  <h3 className="col-10">{textToPass}</h3>
                  <h5 className="col-10">Completed</h5>
                </div>
              </div>
              <div className="col-3 row my-3">
                <h5 className="col-12 currentChapter">CURRENT CHAPTER</h5>
                <h5 className="col-12 my-1 chapterNum">Chapter 17</h5>
                <button type="button" className="col-10 updateButton py-2">
                  UPDATE PROGRESS
                </button>
              </div>
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
