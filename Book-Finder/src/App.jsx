import React from "react";
import SearchBar from "../Components/SearchBar";
import BookCardList from "../Components/BookCardList";
import { useBooks } from "../hooks/useBooks";

const App = () => {
  const { books, loading, error, searchBooks } = useBooks();
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          textShadow: "2px 2px #8fc0e7ff",
        }}
      >
        Simple Book Finder App
      </h1>
      <SearchBar onSearch={searchBooks} />
      <div>
        {books.map((b, idx) => (
          <BookCardList key={b.key || idx} book={b} />
        ))}
      </div>
    </div>
  );
};

export default App;
