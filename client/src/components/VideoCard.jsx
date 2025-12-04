import React from "react";

export default function VideoCard({ thumbnail, title, channel, views, time, avatar }) {
  return (
    <div className="cursor-pointer transition hover:scale-105">
      
      <img
        src={thumbnail}
        alt="thumbnail"
        className="w-full rounded-xl object-cover aspect-video hover:opacity-90 transition"
        onError={(e) => {
          e.target.src = "https://i.ytimg.com/img/no_thumbnail.jpg";
        }}
      />

      <div className="flex mt-3 gap-3">
        <img
          src={avatar}
          alt="channel avatar"
          className="w-10 h-10 rounded-full"
        />

        <div>
          <h3 className="font-semibold text-sm leading-tight">{title}</h3>
          <p className="text-gray-600 text-sm">{channel}</p>
          <p className="text-gray-500 text-sm">
            {views} views · {time}
          </p>
        </div>
      </div>

    </div>
  );
}