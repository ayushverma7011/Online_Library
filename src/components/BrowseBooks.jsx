import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BookGrid from "../components/BookGrid";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.list);
  const [search, setSearch] = useState("");

  // Filter by category
  const categoryFiltered =
    category === "all"
      ? books
      : books.filter((book) => book.category === category);

  // Filter by search
  const filteredBooks = categoryFiltered.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">📚 Browse Books</h1>
      <p className="text-gray-600 mb-6">
        Find books by title or author
      </p>

      {/* Search Bar */}
      <input type="text"
        placeholder="🔍 Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 p-3 mb-6 rounded-lg border focus:ring-2 focus:ring-indigo-500"
      />

      {/* Books */}
      {filteredBooks.length === 0 ? (
        <p className="text-gray-500">No books found.</p>
      ) : (
        <BookGrid books={filteredBooks} />
      )}
    </div>
  );
}
