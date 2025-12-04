// src/pages/HomePage.jsx
// Home page: show grid of video cards and search filter
import React, { useState } from "react";
import VideoCard from "../components/VideoCard";
import { videos } from "../data/videos";

export default function HomePage() {
  // Controlled input value for search box
  const [query, setQuery] = useState("");

  // Simple case-insensitive filter by title (or channel)
  const filtered = videos.filter((video) => {
    // safety: if video missing, skip it
    if (!video) return false;
    const q = query.trim().toLowerCase();
    if (q === "") return true; // empty query -> show all
    // match title or channel
    return (
      (video.title && video.title.toLowerCase().includes(q)) ||
      (video.channel && video.channel.toLowerCase().includes(q))
    );
  });

  return (
    <div className="p-4">
      {/* Search bar */}
      <div className="mb-6 flex items-center gap-3">
        <input
          type="text"
          placeholder="Search videos..."
          className="flex-1 p-2 border rounded-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() => setQuery("")}
          className="px-3 py-2 bg-gray-200 rounded"
        >
          Clear
        </button>
      </div>

      {/* Grid of videos */}
      <div className="grid grid-cols-3 gap-6">
        {filtered.map((video, idx) => {
          // SAFETY: if a video slot is undefined, skip showing it
          if (!video) return null;
          // We pass index as id to link to /video/:id
          return <VideoCard key={idx} id={idx} video={video} />;
        })}
      </div>
    </div>
  );
}