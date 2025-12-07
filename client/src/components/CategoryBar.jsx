import React from "react";

const categories = [
  "All","4K resolution", "JavaScript", "Music", "Gaming", "Live", 
  "Movies", "Shopping", "Trending", "Villages",
  "First class travel", "Nature documentary", "Lakes",
];

export default function CategoryBar() {
  return (
    <div className="w-full bg-white px-4 py-3  overflow-x-auto whitespace-nowrap flex space-x-3 no-scrollbar">

      {categories.map((cat, i) => (
        <button
          key={i}
          className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium whitespace-nowrap"
        >
          {cat}
        </button>
      ))}

    </div>
  );
}