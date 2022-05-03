import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export default configureStore(
  { reducer: counterReducer },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
