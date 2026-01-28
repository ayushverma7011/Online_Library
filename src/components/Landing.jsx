import { Link } from "react-router-dom";

export default function Landing() {
  const categories = [
    "Fiction",
    "Self-Help",
    "Programming",
    "Finance",
    "Fantasy",
    "Biography",
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center 
    bg-gradient-to-brfrom-indigo-100 to-purple-100 px-6">
      
      {/* Welcome Section */}
      <h1 className="text-5xl font-bold text-indigo-700 mb-4">
        📚 Welcome to Library
      </h1>

      <p className="text-gray-700 text-lg text-center max-w-xl mb-8">
        Discover, explore, and manage your favorite books. Browse through
        different categories and find your next great read.
      </p>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/books/${category}`}
            className="px-6 py-3 bg-white rounded-xl shadow hover:shadow-lg hover:bg-indigo-50 transition text-center font-medium"
          >
            {category}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        to="/books/all"
        className="px-8 py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700 transition"
      >
        📖 Browse All Books
      </Link>
    </div>
  );
}
