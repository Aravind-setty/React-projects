import React from "react";

const BookCardList = ({ book }) => {
  if (!book) return null;
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";
  return (
    <div className="booksList">
      <img
        src={coverUrl}
        alt={book.title}
        style={{ height: "250px", width: "150px", padding: "20px" }}
      />
      <div className="bookDetails">
        <h3>{book.title}</h3>
        <p>
          {book.author_name ? book.author_name.join(",") : "Unknown Author"}
        </p>
        <p>First Published Year:{book.first_publish_year || "NA"}</p>
      </div>
    </div>
  );
};

export default BookCardList;
