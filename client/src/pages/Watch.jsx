// useParams allows us to get the video id from the URL
import { useParams } from "react-router-dom";

// Video data
import { videos } from "../data/videos";

export default function Watch() {

  // Getting id from the URL (example: /watch/2)
  const { id } = useParams();

  // Getting the correct video using id
  const video = videos[id];

  return (
    <div className="p-6 flex gap-6">

      {/* LEFT SIDE - Main Video Player */}
      <div className="w-[70%]">

        {/* YouTube Player */}
        <iframe
          className="w-full h-[400px] rounded-xl"
          src={`https://www.youtube.com/embed/${extractVideoId(video.thumbnail)}`}
          allowFullScreen
        ></iframe>

        {/* Video Title */}
        <h1 className="text-xl font-bold mt-4">{video.title}</h1>

        {/* Channel Name */}
        <p className="text-gray-600 mt-1">{video.channel}</p>
      </div>

      {/* RIGHT SIDE - Suggested Videos List */}
      <div className="w-[30%] flex flex-col gap-4">
        {videos.map((v, i) => (
          <div key={i} className="flex gap-3 cursor-pointer">

            {/* Small thumbnail */}
            <img
              src={v.thumbnail}
              className="w-40 h-24 rounded-lg object-cover"
            />

            {/* Suggestions info */}
            <div>
              <h3 className="text-sm font-semibold">{v.title}</h3>
              <p className="text-xs text-gray-600">{v.channel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Extract VIDEO ID from thumbnail URL
// Example: https://i.ytimg.com/vi/abcd1234/hqdefault.jpg
function extractVideoId(url) {
  const match = url.match(/vi\/(.*?)\//);

  // If ID found return it, else fallback to a default ID
  return match ? match[1] : "ysz5S6PUM-U"; 
}