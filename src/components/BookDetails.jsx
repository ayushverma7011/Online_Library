import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function BookDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const book = useSelector((state) =>
    state.books.list.find((b) => b.id == id)
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800); // fake loading effect
  }, []);

  if (loading) return <Loader />;

  if (!book) {
    return <p className="text-center mt-10 text-xl">Book not found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Images */}
        <div className="flex gap-4">
          {book.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="book"
              className="w-40 h-60 object-cover rounded-xl shadow-md hover:scale-105 transition"
            />
          ))}
        </div>

        {/* Book Info */}
        <div>
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-gray-600 mt-1">by {book.author}</p>

          <div className="flex items-center gap-3 mt-3">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">
              ⭐ {book.rating}
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {book.category}
            </span>
          </div>

          <p className="mt-5 text-gray-700 leading-relaxed">
            {book.description}
          </p>

          <Link
            to="/books/all"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            ← Back to Browse
          </Link>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">📢 User Reviews</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {book.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{review.user}</h4>
                <span className="text-yellow-500">
                  ⭐ {review.stars}
                </span>
              </div>
              <p className="text-gray-700 mt-2">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BookDetails;