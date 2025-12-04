// VideoPage.jsx
// This page shows the full video player when user clicks a card

import React from "react";
import { useParams } from "react-router-dom";
import { videos } from "../data/videos"; // importing all videos

export default function VideoPage() {
  
  // useParams() gives us the "id" from the URL
  const { id } = useParams();

  // Find the clicked video using the id
  const video = videos[Number(id)];

  // If video not found, show a message
  if (!video) {
    return <div className="p-4 text-xl">Video not found</div>;
  }

  return (
    <div className="p-4 flex flex-col gap-6">
      
      {/* MAIN VIDEO PLAYER */}
      <iframe
        className="w-full h-[430px] rounded-lg"
        src={video.videoUrl}           // 👉 direct YouTube embed URL
        title={video.title}
        allowFullScreen
      ></iframe>

      {/* VIDEO DETAILS */}
      <div>
        <h2 className="text-2xl font-bold">{video.title}</h2>
        <p className="text-gray-600">{video.channel}</p>
        <p className="text-gray-500">{video.views} views • {video.time}</p>
      </div>

      {/* Recommended videos section */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Recommended</h3>

        {/* show only 5 random videos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {videos.slice(0, 5).map((v, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => (window.location.href = `/video/${index}`)}
            >
              <img
                src={v.thumbnail}
                className="rounded-lg"
                alt={v.title}
              />
              <p className="font-semibold text-sm mt-1">{v.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}