import uuid from 'react-uuid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, deleteBook } from '../../redux/books/books';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.value);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuid(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  const handleRemoveBook = (book) => {
    dispatch(deleteBook(book.id));
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div>
          {bookList.map((book) => (
            <div key={book.id}>
              <div className="row">
                <h3 className="col-12 bookTitle">{book.title}</h3>
                <h3 className="col-12 author">{book.author}</h3>
              </div>
              <button
                type="button"
                className="col-3 my-2 removeButton"
                onClick={handleRemoveBook}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <h1 className="col-12 my-1 addTitle">Add Books</h1>
        <hr className="col-12 my-4" />
        <form className="row col-12">
          <input
            type="text"
            name="title"
            placeholder="Tittle"
            className="col-4 mx-4"
            onChange={handleTitleChange}
          />
          <input
            type="text"
            placeholder="Author"
            className="col-3"
            onChange={handleAuthorChange}
          />
          <button
            type="button"
            className="col-2 addButton p-2 mx-2"
            onClick={handleSubmit}
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddBook;
