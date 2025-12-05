// Header.jsx
// This file displays the top bar + search bar like YouTube

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [text, setText] = useState("");

  return (
    <div className="flex items-center justify-between mb-4">

      {/* Logo */}
      <Link to="/" className="text-xl font-bold flex items-center gap-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube"
          className="w-20"
        />
        <span>YouTube Clone</span>
      </Link>

      {/* Search bar – only one */}
      <div className="flex items-center gap-2 border rounded-full px-4 py-1 w-96">
        <input
          type="text"
          className="flex-1 outline-none"
          placeholder="Search videos..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* Sign in button */}
      <button className="px-4 py-1 bg-blue-500 text-white rounded-full">
        Sign In
      </button>
    </div>
  );
}