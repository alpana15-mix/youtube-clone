// Sidebar.jsx
// This is the left menu (Home, Shorts, Subscriptions, Explore etc.)

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-48 border-r h-screen p-4 text-sm">

      {/* Top Menu */}
      <div className="mb-4">
        <Link to="/" className="block py-2">Home</Link>
        <div className="py-2">Shorts</div>
        <div className="py-2">Subscriptions</div>
      </div>

      <hr />

      {/* Explore Section */}
      <div className="mt-4">
        <p className="font-bold text-gray-600">Explore</p>
        <div className="py-2">Trending</div>
        <div className="py-2">Shopping</div>
        <div className="py-2">Music</div>
        <div className="py-2">Movies</div>
        <div className="py-2">Gaming</div>
        <div className="py-2">News</div>
      </div>
    </div>
  );
}