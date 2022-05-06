import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getBooks as getBooksAPI,
  createBook as createBookAPI,
} from "./mock-api";

const initialState = {
  submitLoading: false,
  fetchLoading: false,
  books: [],
};

export const fetchBooks = createAsyncThunk("book/fetchBooks", async () => {
  return await getBooksAPI();
});

export const createBook = createAsyncThunk("book/createBook", async (book) => {
  return await createBookAPI(book);
});

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.fetchLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.fetchLoading = false;
      });

    builder
      .addCase(createBook.pending, (state, action) => {
        state.submitLoading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.submitLoading = false;
        // state.books = action.payload;
      })
      .addCase(createBook.rejected, (state, action) => {
        state.submitLoading = false;
      });
  },
});

export default bookSlice.reducer;
