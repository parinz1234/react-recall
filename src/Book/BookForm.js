import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createBook } from "../bookSlice";

const BookForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.book.submitLoading);

  const [book, setBook] = useState({
    name: "",
    author: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook({ ...book }));
    handleOnClear();
  };

  const handleOnClear = () => {
    setBook({
      name: "",
      author: "",
    });
  };

  const handleOnChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => handleOnChange(e)}
            value={book.name}
          />
        </div>
        <div>
          <input
            type="text"
            name="author"
            placeholder="Author"
            onChange={(e) => handleOnChange(e)}
            value={book.author}
          />
        </div>
        <div>
          <button disabled={loading} type="submit">
            Save
          </button>
          <button
            disabled={loading}
            type="button"
            onClick={(e) => handleOnClear()}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
