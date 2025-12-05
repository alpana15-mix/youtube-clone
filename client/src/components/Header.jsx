// Header.jsx
// This component stays at the top and contains the search bar

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    // Header bar
    <div className="h-16 bg-white border-b px-6 flex items-center justify-between">

      {/* Left: YouTube logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
          alt="logo"
          className="h-6"
        />
        <h1 className="font-semibold text-lg">YouTube Clone</h1>
      </Link>

      {/* Center: Search bar */}
      <div className="flex items-center w-1/3">
        <input
          type="text"
          placeholder="Search videos..."
          className="flex-1 border px-3 py-2 rounded-l-full outline-none"
        />
        <button className="border px-4 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>

      {/* Right side small icon */}
      <button className="border px-3 py-1 rounded-full bg-blue-500 text-white">
        Sign In
      </button>
    </div>
  );
}