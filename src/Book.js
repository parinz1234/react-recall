import React from "react";
import BookForm from "./Book/BookForm";
import BookList from "./Book/BookList";
class Book extends React.Component {
  render() {
    return (
      <div>
        <BookForm />
        <BookList />
      </div>
    );
  }
}

export default Book;
