const ADD_BOOK = 'BOOKSTORE/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'BOOKSTORE/src/redux/books/REMOVE_BOOK';
const addBookAction = (book) => ({
  type: ADD_BOOK,
  book,
});
const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookActionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return state.push(action.books);
    case REMOVE_BOOK:
      return [state.filter((books) => books !== action.id)];
    default:
      return state;
  }
};

export default { bookActionReducer, addBookAction, removeBookAction };
