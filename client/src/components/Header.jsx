import React from "react";
import { FaBars, FaSearch, FaMicrophone, FaBell, FaVideo, FaYoutube } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md sticky top-0">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        <FaBars className="text-xl cursor-pointer" />

        {/* YOUTUBE ICON + TEXT */}
        <div className="flex items-center gap-1 cursor-pointer">
          <FaYoutube className="text-3xl text-red-600" />
          <span className="text-xl font-semibold">YouTube</span>
        </div>
      </div>

      {/* CENTER SEARCH BAR */}
      <div className="flex items-center w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 px-3 py-1 rounded-l-full outline-none"
        />
        <button className="px-4 py-1 bg-gray-200 border border-gray-300 rounded-r-full">
          <FaSearch />
        </button>
        <FaMicrophone className="text-xl ml-4 cursor-pointer" />
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6 text-xl">
        <FaVideo className="cursor-pointer" />
        <FaBell className="cursor-pointer" />
        <button className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm">
          Sign In
        </button>
      </div>
    </div>
  );
}