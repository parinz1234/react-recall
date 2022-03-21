import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT_BY_AMOUNT,
} from "./actionType";

// our action creator
export const increment = () => ({ type: COUNTER_INCREMENT });
export const decrement = () => ({ type: COUNTER_DECREMENT });
export const incrementByAmount = (amount) => ({
  type: COUNTER_INCREMENT_BY_AMOUNT,
  amount,
});
