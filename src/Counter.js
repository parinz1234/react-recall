import React from "react";
import { connect } from "react-redux";
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT_BY_AMOUNT,
} from "./actionType";
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
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: COUNTER_INCREMENT }),
    decrement: () => dispatch({ type: COUNTER_DECREMENT }),
    incrementByAmount: (amount) =>
      dispatch({ type: COUNTER_INCREMENT_BY_AMOUNT, amount }),
    // incrementAsync: () => dispatch(),
    // selectCount: () => dispatch(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
