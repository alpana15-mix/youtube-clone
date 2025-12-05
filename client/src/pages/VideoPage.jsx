// VideoPage.jsx
// This page shows the full video when clicking from homepage

import React from "react";
import { useParams } from "react-router-dom";
import { videos } from "../data/videos";

export default function VideoPage() {

  // Get video id from URL (e.g. /video/3)
  const { id } = useParams();

  // Select video based on index
  const video = videos[id];

  // If video does not exist
  if (!video) {
    return <h1 className="text-xl p-4 font-semibold">Video not found</h1>;
  }

  return (
    <div className="p-4 flex flex-col gap-6">

      {/* Big thumbnail as fake player */}
      <img 
        src={video.thumbnail} 
        alt={video.title} 
        className="w-full max-h-[500px] object-cover rounded-lg"
      />

      {/* Video title */}
      <h1 className="text-2xl font-bold">{video.title}</h1>

      {/* Channel info */}
      <p className="text-gray-600">
        {video.channel} • {video.views} views • {video.time}
      </p>

    </div>
  );
}