import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../../redux/books/books';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = () => {
    if (title && author) {
      dispatch(addBooks({
        id: uuidv4(),
        title,
        author,
      }));
      document.querySelector('.form').reset();
    }
  };

  return (
    <div className="container py-4">
      <div className="row">
        <h1 className="col-12 my-1 addTitle">Add Books</h1>
        <hr className="col-12 my-4" />
        <form className="row col-12 form">
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
