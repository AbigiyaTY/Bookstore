import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import AddBook from './AddBook/AddBook';
import BookDisplay from './BookList/BookDisplay';

const Books = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [booksList.length, dispatch]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {booksList.length > 0 ? (
            <BookDisplay bookList={booksList} />
          ) : (
            <h3 className="col-12 m-5">The store is empty</h3>
          )}
        </div>
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
