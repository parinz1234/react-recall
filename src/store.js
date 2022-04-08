import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT_BY_AMOUNT,
} from "./actionType";

const counterInitialState = {
  count: 0,
};

const bookInitialState = {
  submitLoading: false,
  fetchLoading: false,
  books: [],
};

const counterReducer = (state = counterInitialState, action) => {
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

const bookReducer = (state = bookInitialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_PENDING":
      return {
        ...state,
        fetchLoading: true,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        fetchLoading: false,
        books: action.payload,
      };
    case "CREATE_BOOK_PENDING":
      return {
        ...state,
        submitLoading: true,
      };
    case "CREATE_BOOK_SUCCESS":
      return {
        ...state,
        submitLoading: false,
      };
    default:
      return state;
  }
};

/**
 * While combineReducers attempts to check that your reducers conform to some of these rules, you should remember them, and do your best to follow
 * them. combineReducers will check your reducers by passing undefined to them; this is done even if you specify initial state to Redux.createStor
 * (combineReducers(...), initialState). Therefore, you must ensure your reducers work properly when receiving undefined as state, even if you
 * never intend for them to actually receive undefined in your own code.
 */

const rootReducer = combineReducers({
  counter: counterReducer,
  book: bookReducer,
});

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(
  rootReducer,
  {
    counter: counterInitialState,
    book: bookInitialState,
  },
  composeWithDevTools(middlewareEnhancer)
);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
