import React from "react";
import { fetchBook } from "../thunkFunction";
import { connect } from "react-redux";

class BookList extends React.Component {
  componentDidMount() {
    this.props.getBook();
  }

  render() {
    const { loading, books } = this.props;
    return (
      <div>
        {loading ? (
          <div>loading...</div>
        ) : (
          <div>
            {books.map((book, index) => (
              <div key={book.id}>
                {index + 1}. {book.name} - {book.author}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { fetchLoading: loading, books } = state.book;
  return {
    loading,
    books,
  };
};

const mapDispatchToProps = (dispatch) => {
  const getBook = () => dispatch(fetchBook());
  return { getBook };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
