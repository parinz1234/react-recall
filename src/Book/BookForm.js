import React from "react";
import { saveBook } from "../thunkFunction";
import { connect } from "react-redux";

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      author: "",
    };
  }
  handleOnSubmit(e) {
    e.preventDefault();
    this.props.submitBook({
      name: this.state.name,
      author: this.state.author,
    });

    this.handleOnClear();
  }

  handleOnClear() {
    this.setState({
      name: "",
      author: "",
    });
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => this.handleOnChange(e)}
              value={this.state.name}
            />
          </div>
          <div>
            <input
              type="text"
              name="author"
              placeholder="Author"
              onChange={(e) => this.handleOnChange(e)}
              value={this.state.author}
            />
          </div>
          <div>
            <button disabled={loading} type="submit">
              Save
            </button>
            <button
              disabled={loading}
              type="button"
              onClick={(e) => this.handleOnClear()}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { submitLoading: loading } = state.book;
  return {
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  const submitBook = (book) => dispatch(saveBook(book));
  return { submitBook };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
