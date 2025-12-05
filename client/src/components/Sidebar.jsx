// Sidebar.jsx
// Sidebar takes fixed width and full height below the header

import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className="w-60 border-r bg-white 
      h-[calc(100vh-64px)] 
      overflow-y-auto px-4 py-5"
    >
      {/* Menu links */}
      <div className="flex flex-col gap-3 text-lg">

        <NavLink to="/" className="hover:bg-gray-200 p-2 rounded">
          Home
        </NavLink>
        <NavLink to="/shorts" className="hover:bg-gray-200 p-2 rounded">
          Shorts
        </NavLink>
        <NavLink to="/subscriptions" className="hover:bg-gray-200 p-2 rounded">
          Subscriptions
        </NavLink>

        <hr className="my-3" />

        <div className="text-sm text-gray-500 uppercase">Explore</div>

        <NavLink to="/trending" className="hover:bg-gray-200 p-2 rounded">
          Trending
        </NavLink>
        <NavLink to="/music" className="hover:bg-gray-200 p-2 rounded">
          Music
        </NavLink>
        <NavLink to="/movies" className="hover:bg-gray-200 p-2 rounded">
          Movies
        </NavLink>
        <NavLink to="/gaming" className="hover:bg-gray-200 p-2 rounded">
          Gaming
        </NavLink>
        <NavLink to="/news" className="hover:bg-gray-200 p-2 rounded">
          News
        </NavLink>

        <hr className="my-3" />

        <NavLink to="/history" className="hover:bg-gray-200 p-2 rounded">
          History
        </NavLink>
      </div>
    </div>
  );
}