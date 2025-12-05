// Sidebar.jsx

import { Link } from "react-router-dom";

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`p-4 transition-all duration-300 
      ${isOpen ? "w-48" : "w-16"} 
      `}
    >
      {/* MAIN MENU */}
      <div className="mb-4">

        <Link to="/" className="flex items-center gap-3 py-2 hover:bg-gray-100 rounded-lg">
          <span>🏠</span>
          {isOpen && <span>Home</span>}
        </Link>

        <div className="flex items-center gap-3 py-2 hover:bg-gray-100 rounded-lg">
          <span>🎬</span>
          {isOpen && <span>Shorts</span>}
        </div>

        <div className="flex items-center gap-3 py-2 hover:bg-gray-100 rounded-lg">
          <span>📺</span>
          {isOpen && <span>Subscriptions</span>}
        </div>

      </div>

      {/* Explore Title only when open */}
      {isOpen && <p className="font-semibold text-gray-600 mt-2 mb-1">Explore</p>}

      {/* Explore Links */}
      <div className="">

        <div className="flex items-center gap-3 py-2 hover:bg-gray-100 rounded-lg">
          <span>🔥</span>
          {isOpen && <span>Trending</span>}
        </div>

        <div className="flex items-center gap-3 py-2 hover:bg-gray-100 rounded-lg">
          <span>🛍️</span>
          {isOpen && <span>Shopping</span>}
        </div>

        <div className="flex items-center gap-3 py-2 hover:bg-gray-100 rounded-lg">
          <span>🎵</span>
          {isOpen && <span>Music</span>}
        </div>

        <div className="flex items-center gap-3 py-2 hover:bg-gray-100 rounded-lg">
          <span>🎬</span>
          {isOpen && <span>Movies</span>}
        </div>

        <div className="flex items-center gap-3 py-2 hover:bg-gray-100 rounded-lg">
          <span>🎮</span>
          {isOpen && <span>Gaming</span>}
        </div>

        <div className="flex items-center gap-3 py-2 hover:bg-gray-100 rounded-lg">
          <span>📰</span>
          {isOpen && <span>News</span>}
        </div>

      </div>
    </div>
  );
}