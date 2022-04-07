import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import {
//   COUNTER_INCREMENT,
//   COUNTER_DECREMENT,
//   COUNTER_INCREMENT_BY_AMOUNT,
// } from "./actionType";

// import * as CounterActionCreators from "./actionCreator";
import {
  increment as incrementAction,
  decrement as decrementAction,
  incrementByAmount as incrementByAmountAction,
} from "./actionCreator";
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
    };
  }

  handleIncrementByAmount() {
    const { incrementByAmount } = this.props;
    const { amount } = this.state;
    incrementByAmount(amount);
    this.setState({ amount: 0 });
  }

  handleOnChangeAmount(e) {
    this.setState({ amount: Number(e.target.value) });
  }

  render() {
    const { amount } = this.state;
    const { count, decrement, increment } = this.props;
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
            onChange={(e) => this.handleOnChangeAmount(e)}
          />
          <button
            aria-label="Increment By Amount"
            onClick={() => this.handleIncrementByAmount()}
          >
            +
          </button>
          <br />
          <span>Count is : {count}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { count } = state.counter;
  return {
    count,
  };
};

const mapDispatchToProps = (dispatch) => {
  /* #1 mapDispatchToProps without action creator */
  // const increment = () => dispatch({ type: COUNTER_INCREMENT });
  // const decrement = () => dispatch({ type: COUNTER_DECREMENT });
  // const incrementByAmount = (amount) =>
  //   dispatch({ type: COUNTER_INCREMENT_BY_AMOUNT, amount });

  /* #2 mapDispatchToProps with action creator */
  // const increment = () => dispatch(incrementAction());
  // const decrement = () => dispatch(decrementAction());
  // const incrementByAmount = (amount) =>
  //   dispatch(incrementByAmountAction(amount));

  /* #3 mapDispatchToProps with action creator and bindActionCreators */
  // const { increment, decrement, incrementByAmount } = bindActionCreators(
  //   CounterActionCreators,
  //   dispatch
  // );

  /* #3.1 mapDispatchToProps with action creator and bindActionCreators (define each action) */
  const { increment, decrement, incrementByAmount } = bindActionCreators(
    {
      increment: incrementAction,
      decrement: decrementAction,
      incrementByAmount: incrementByAmountAction,
    },
    dispatch
  );

  return {
    increment,
    decrement,
    incrementByAmount,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
