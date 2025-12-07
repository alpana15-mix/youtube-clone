import React from "react";
import { videos } from "../data/videos";   // ✅ named import
import VideoCard from "../components/VideoCard";

export default function HomePage() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}