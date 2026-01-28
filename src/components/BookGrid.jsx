import BookCard from "./BookCard";

function BookGrid({ books }) {
  if (books.length === 0) {
    return <p className="text-gray-500">No books found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
export default BookGrid;