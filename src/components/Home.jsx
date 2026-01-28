import { useState } from "react";
import { booksData } from "../data/books";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");

  const categories = [...new Set(booksData.map(book => book.category))];

  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">📚 Online Library</h1>
      <p className="text-gray-600 mb-6">
        Search and explore your favorite books
      </p>

      {/* Search Bar */}
      <div className="mb-6">
        <input type="text"
          placeholder="🔍 Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Categories */}
      <h2 className="text-xl font-semibold mb-3">Categories</h2>
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat, index) => (
          <Link key={index} to={`/books/${cat}`} className="px-5 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700">
            {cat}
          </Link>
        ))}
      </div>

      {/* Books Grid */}
      <h2 className="text-xl font-semibold mb-4">All Books</h2>

      {filteredBooks.length === 0 ? (
        <p className="text-gray-500">No books found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
