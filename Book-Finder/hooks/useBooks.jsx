import { useState } from "react";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBooks = async (query) => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setBooks(data.docs || []);
    } catch {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return { books, loading, error, searchBooks };
};
