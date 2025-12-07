import React from "react";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/video/${video.id}`)}   // ✅ CORRECT ID
      className="shadow rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer"
    >
      {/* Thumbnail */}
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-48 object-cover"
      />

      {/* Details */}
      <div className="p-3">
        <h3 className="font-bold text-sm">{video.title}</h3>
        <p className="text-gray-500 text-xs">{video.views} • {video.time}</p>
      </div>
    </div>
  );
}