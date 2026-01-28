import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BookGrid from "../components/BookGrid";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.list);

  const filteredBooks =
    category === "all"
      ? books
      : books.filter((book) => book.category === category);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📚 Browse Books</h1>

      <BookGrid books={filteredBooks} />
    </div>
  );
}
