import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const initialState = [];

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yrhTmLYwYcDLEAHmfCpQ/books';

export const fetchBooks = createAsyncThunk(
  'book/fetchBooks',
  async () => (await axios.get(API_URL)).data,
);

export const addBooks = createAsyncThunk(
  'book/addBook',
  async (book) => (
    await axios.post(API_URL, {
      id: uuidv4(),
      title: book.title,
      author: book.author,
    })
  ).data,
);

export const removeBook = createAsyncThunk(
  'book/removeBook',
  async (bookId) => {
    try {
      const revBook = await axios.delete(`${API_URL}/${bookId}`);
      return revBook.data;
    } catch (error) {
      return error?.response;
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      const books = Object.keys(action.payload).map((item) => ({
        id: item,
        ...action.payload[item][0],
      }));
      return books;
    },
    [fetchBooks.rejected]: (state, action) => action.error.message,
    [addBooks.fulfilled]: (state, action) => [...state, action.payload],
    [addBooks.rejected]: (state, action) => action.error.message,
    /* eslint-disable */
    [removeBook.fulfilled]: (state, action) =>
      state.filter((item) => item.id !== action.meta.arg),
    [removeBook.rejected]: (state, action) => action.error.message,
  },
});

export default booksSlice.reducer;
