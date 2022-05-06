import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchBooks } from "../bookSlice";

const BookList = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.book.books);
  const loading = useSelector((state) => state.book.fetchLoading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

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
};

export default BookList;
