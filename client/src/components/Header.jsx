// Header.jsx
// This component shows the top navigation bar (YouTube style)

import React from "react";
import { BsSearch, BsMicFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between px-4 py-3 border-b bg-white">

      {/* LEFT SIDE → Menu Icon + YouTube Logo */}
      <div className="flex items-center gap-4">
        {/* Hamburger menu */}
        <FaBars className="text-xl cursor-pointer" />

        {/* YouTube Logo + Text */}
        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="logo"
            className="h-5"
          />
          <span className="text-xl font-semibold">YouTube Clone</span>
        </div>
      </div>

      {/* CENTER → Search Box */}
      <div className="flex items-center w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="w-full border px-3 py-2 rounded-l-full outline-none"
        />
        <button className="px-5 py-2 border border-l-0 rounded-r-full bg-gray-100">
          <BsSearch className="text-lg" />
        </button>

        {/* Mic icon */}
        <BsMicFill className="ml-3 text-xl cursor-pointer" />
      </div>

      {/* RIGHT SIDE → Icons */}
      <div className="flex items-center gap-5 text-xl cursor-pointer">
        <FaBell />
        <FaUserCircle />
      </div>
    </div>
  );
}