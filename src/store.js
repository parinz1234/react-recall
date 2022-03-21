import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT_BY_AMOUNT,
} from "./actionType";
const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { count: state.count + 1 };
    case COUNTER_DECREMENT:
      return { count: state.count - 1 };
    case COUNTER_INCREMENT_BY_AMOUNT:
      return { count: state.count + action.amount };
    default:
      return state;
  }
};

export default createStore(
  counterReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
