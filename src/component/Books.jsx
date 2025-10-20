import React, { useReducer, useState } from "react";
const booksData = [
  { id: 1, name: "Don Quixote by Miguel de Cervantes" },
  { id: 2, name: "Pride and Prejudice by Jane Austen" },
  { id: 3, name: "The Great Gatsby by F. Scott Fitzgerald" },
  { id: 4, name: "Wuthering Heights: by Emily Brontë" },
];

const reducer = (state, action) => {
  if (action.type === "ADD") {
    const allBooks = [...state.books, action.payload];
    return {
      ...state,
      books: allBooks,
      isModalOpen: true,
      modalText: `Added new book: ${action.payload.name}`,
    };
  }

  if (action.type === "REMOVE") {
    const filteredBook = state.books.filter(
      (book) => book.id !== action.payload
    );
    return {
      ...state,
      books: filteredBook,
      isModalOpen: true,
      modalText: `Removed a book. ID: ${action.payload}`,
    };
  }
};

const Books = () => {
  const [bookName, setBookName] = useState("");
  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModalOpen: false,
    modalText: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: bookState.books.length + 1, name: bookName };
    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <h1 className="text-2xl">Book List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border pl-4 w-full"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <br />
        <button
          className="bg-blue-900 text-white px-3 py-1.5 rounded-2xl mt-4"
          type="submit"
        >
          Add Book
        </button>
      </form>
      {bookState.isModalOpen && (
        <p className="text-green-700 text-xl my-4">{bookState.modalText}</p>
      )}

      <ul className="list-disc">
        {bookState.books.map((book) => (
          <div key={book.id} className="flex justify-between gap-5">
            <li>{book.name}</li>{" "}
            <button
              className="bg-red-500 px-4 py-2"
              onClick={() => handleRemove(book.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Books;
