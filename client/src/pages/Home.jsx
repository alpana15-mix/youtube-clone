// HomePage.jsx
// This page shows all videos in a grid

import React from "react";
import { videos } from "../data/videos";
import VideoCard from "../components/VideoCard";

export default function HomePage() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Loop through all videos */}
      {videos.map((video, i) => (
        <VideoCard 
          key={i} 
          video={video} 
          index={i}   // sending index as video ID
        />
      ))}

    </div>
  );
}