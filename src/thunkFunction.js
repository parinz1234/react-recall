import { getBooks, createBook } from "./mock-api";

export const fetchBook = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "FETCH_BOOKS_PENDING",
    });

    getBooks().then((books) => {
      dispatch({
        type: "FETCH_BOOKS_SUCCESS",
        payload: books,
      });
    });
  };
};

export const saveBook = (book) => {
  return (dispatch, getState) => {
    dispatch({
      type: "CREATE_BOOK_PENDING",
    });

    dispatch({
      type: "FETCH_BOOKS_PENDING",
    });
    createBook(book).then(() => {
      getBooks().then((books) => {
        dispatch({
          type: "CREATE_BOOK_SUCCESS",
        });

        dispatch({
          type: "FETCH_BOOKS_SUCCESS",
          payload: books,
        });
      });
    });
  };
};
