import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment as incrementAction,
  decrement as decrementAction,
  incrementByAmount as incrementByAmountAction,
} from "./actionCreator";
const Counter = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();
  const increment = () => dispatch(incrementAction());
  const decrement = () => dispatch(decrementAction());
  const incrementByAmount = (amount) =>
    dispatch(incrementByAmountAction(amount));

  const handleIncrementByAmount = () => {
    incrementByAmount(amount);
    setAmount(0);
  };

  const handleOnChangeAmount = (e) => {
    setAmount(Number(e.target.value));
  };
  return (
    <div>
      <div>
        Increment value:{" "}
        <button aria-label="Increment value" onClick={() => increment()}>
          +
        </button>
        <br />
        Decrement value:{" "}
        <button aria-label="Decrement value" onClick={() => decrement()}>
          -
        </button>
        <br />
        incrementByAmount:{" "}
        <input
          type="text"
          value={amount}
          onChange={(e) => handleOnChangeAmount(e)}
        />
        <button
          aria-label="Increment By Amount"
          onClick={() => handleIncrementByAmount()}
        >
          +
        </button>
        <br />
        <span>Count is : {count}</span>
      </div>
    </div>
  );
};

export default Counter;
