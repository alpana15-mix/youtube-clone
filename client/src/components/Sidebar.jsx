// Sidebar.jsx
// This file shows sidebar in two modes: FULL mode & COLLAPSED mode

import { Link } from "react-router-dom";

export default function Sidebar({ isOpen }) {
  return (
    // Sidebar width changes based on isOpen
    <div
      className={`border-r h-screen p-4 transition-all duration-300
      ${isOpen ? "w-48" : "w-16"}`}
    >

      {/* MAIN MENU */}
      <div className="mb-4">

        {/* Each item shows icon always, text only in open mode */}

        <Link to="/" className="flex items-center gap-3 py-2">
          <span>🏠</span>
          {isOpen && <span>Home</span>}
        </Link>

        <div className="flex items-center gap-3 py-2">
          <span>🎬</span>
          {isOpen && <span>Shorts</span>}
        </div>

        <div className="flex items-center gap-3 py-2">
          <span>📺</span>
          {isOpen && <span>Subscriptions</span>}
        </div>

      </div>

      <hr />

      {/* EXPLORE */}
      <div className="mt-4">

        {isOpen && <p className="font-bold text-gray-600">Explore</p>}

        <div className="flex items-center gap-3 py-2">
          <span>🔥</span>
          {isOpen && <span>Trending</span>}
        </div>

        <div className="flex items-center gap-3 py-2">
          <span>🛍️</span>
          {isOpen && <span>Shopping</span>}
        </div>

        <div className="flex items-center gap-3 py-2">
          <span>🎵</span>
          {isOpen && <span>Music</span>}
        </div>

        <div className="flex items-center gap-3 py-2">
          <span>🎥</span>
          {isOpen && <span>Movies</span>}
        </div>

        <div className="flex items-center gap-3 py-2">
          <span>🎮</span>
          {isOpen && <span>Gaming</span>}
        </div>

        <div className="flex items-center gap-3 py-2">
          <span>📰</span>
          {isOpen && <span>News</span>}
        </div>

      </div>
    </div>
  );
}