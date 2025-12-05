// HomePage.jsx
// This page only shows video cards - no search bar here

import React, { useState } from "react";
import { videos } from "../data/videos";
import VideoCard from "../components/VideoCard";

export default function HomePage() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {videos.map((v, i) => (
        <VideoCard key={i} video={v} />
      ))}
    </div>
  );
}