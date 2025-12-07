import React from "react";
import { useParams } from "react-router-dom";
import { videos } from "../data/videos";

export default function Watch() {
  const { id } = useParams();

  const video = videos.find((v) => v.id == id);

  if (!video) {
    return <h2 className="p-6 text-xl text-red-500">Video Not Found 😢</h2>;
  }

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-6 w-full ml-0">

      {/* MAIN VIDEO PLAYER */}
      <div className="w-full lg:w-3/4">
        <iframe
          src={video.videoUrl}
          className="w-full h-[500px] rounded-lg"
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h2 className="text-xl font-bold mt-4">{video.title}</h2>
        <p className="text-gray-600">{video.views} • {video.time}</p>
      </div>

      {/* SUGGESTED VIDEOS */}
      <div className="w-full lg:w-1/4 flex flex-col gap-4">
        {videos.map((item) => (
          <div
            key={item.id}
            onClick={() => (window.location.href = `/video/${item.id}`)}
            className="flex gap-3 cursor-pointer"
          >
            <img src={item.thumbnail} className="w-40 rounded-md" />
            <div>
              <p className="font-semibold text-sm">{item.title}</p>
              <p className="text-gray-500 text-xs">{item.views}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}