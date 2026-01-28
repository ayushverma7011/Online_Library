import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-indigo-600">
        Online Library
      </h1>

      <div className="flex gap-6 text-gray-700 font-medium">
        <Link className="hover:text-indigo-600 transition" to="/">Home</Link>
        <Link className="hover:text-indigo-600 transition" to="/books/all">Browse Books</Link>
        <Link className="hover:text-indigo-600 transition" to="/add">Add Book</Link>
      </div>
    </nav>
  );
}
export default Navbar;