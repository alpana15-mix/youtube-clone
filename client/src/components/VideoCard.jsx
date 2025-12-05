// VideoCard.jsx
// Shows a single video thumbnail on homepage

import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ video, index }) {

  return (
    <Link to={`/video/${index}`}>
      <div className="shadow rounded-lg overflow-hidden hover:scale-[1.02] transition cursor-pointer">

        {/* Thumbnail */}
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-48 object-cover"
        />

        {/* Video Details */}
        <div className="p-2">
          <h3 className="font-semibold">{video.title}</h3>
          <p className="text-sm text-gray-600">{video.channel}</p>
          <p className="text-xs text-gray-500">{video.views} views • {video.time}</p>
        </div>

      </div>
    </Link>
  );
}