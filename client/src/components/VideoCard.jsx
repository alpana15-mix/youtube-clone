// src/components/VideoCard.jsx
import React from "react";
import { Link } from "react-router-dom";

// video: object, id: index used in link
export default function VideoCard({ video, id }) {
  if (!video) {
    // Prevent crash when an item is missing
    return <div className="p-4 text-red-600">Missing video</div>;
  }

  return (
    <Link to={`/video/${id}`}>
      <div className="cursor-pointer">
        <img src={video.thumbnail} alt={video.title} className="w-full h-44 object-cover rounded-lg" />
        <h4 className="mt-2 font-semibold">{video.title}</h4>
        <p className="text-xs text-gray-500">{video.channel} • {video.views}</p>
      </div>
    </Link>
  );
}