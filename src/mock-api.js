// book.id
// book.name
// book.author
let books = [];

export const getBooks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(books);
    }, 3000);
  });
};
export const getBookById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const [book = null] = books.filter((book) => book.id === id);
      resolve(book);
    }, 3000);
  });
};
export const createBook = (book) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      books.push({
        id: books.length + 1,
        name: book.name,
        author: book.author,
      });
      resolve(book);
    }, 3000);
  });
};
export const updateBook = (id, book) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = books.findIndex((b) => b.id === id);
      books[index] = book;
      resolve(book);
    }, 3000);
  });
};
export const deleteBook = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = books.findIndex((b) => b.id === id);
      books.splice(index, 1);
      resolve(id);
    }, 3000);
  });
};
