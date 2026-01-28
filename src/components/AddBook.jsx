import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/BookSlice";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    image: "",
    rating: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.description ||
      !form.image ||
      !form.rating
    ) {
      alert("Please fill in all fields");
      return;
    }

    dispatch(
      addBook({
        id: Date.now(),
        ...form,
        images: [form.image],
        reviews: []
      })
    );

    navigate("/books/all");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          📘 Add New Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">Book Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter book title"
              value={form.title}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block font-semibold mb-1">Author</label>
            <input
              type="text"
              name="author"
              placeholder="Enter author name"
              value={form.author}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              <option value="Self-Help">Self-Help</option>
              <option value="Fiction">Fiction</option>
              <option value="Programming">Programming</option>
              <option value="Finance">Finance</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-semibold mb-1">Book Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Paste image URL"
              value={form.image}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block font-semibold mb-1">Rating (1–5)</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              step="0.1"
              value={form.rating}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Enter book description"
              value={form.description}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            ➕ Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
