import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      
      <Link to={`/book/${book.id}`}>
        <img
          src={book.images[0]}
          alt={book.title}
          className="h-64 w-full object-cover rounded-t-xl"
        />
      </Link>

      <div className="p-4">
        <h3 className="font-bold text-lg">{book.title}</h3>
        <p className="text-gray-600 text-sm">{book.author}</p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-yellow-500">⭐ {book.rating}</span>
          <Link
            to={`/book/${book.id}`}
            className="text-indigo-600 font-semibold hover:underline"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
