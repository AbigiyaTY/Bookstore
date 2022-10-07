import { createSlice } from '@reduxjs/toolkit';
import books from './data';

export const booksSlice = createSlice({
  name: 'books',
  initialState: { value: books },
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },

    deleteBook: (state, action) => {
      const index = state.value.findIndex((book) => book.id === action.payload);
      state.value.splice(index, 1);
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
