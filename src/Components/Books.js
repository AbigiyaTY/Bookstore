import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import AddBooks from './AddBook/AddBook';
import BookDisplay from './BookList/BookDisplay';

function Books() {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [booksList.length, dispatch]);

  return (
    <div className="Books">
      <div>
        {booksList.length > 0 ? (
          <BookDisplay bookList={booksList} />
        ) : (
          <h3 className="p-5 mx-5">The store is empty</h3>
        )}
      </div>
      <AddBooks />
    </div>
  );
}

export default Books;
