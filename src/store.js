import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import bookReducer from "./bookSlice";

export default configureStore(
  {
    reducer: {
      counter: counterReducer,
      book: bookReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
