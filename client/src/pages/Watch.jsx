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