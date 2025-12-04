import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoCard from "./components/VideoCard";
import { videos } from "./data/videos";

export default function App() {
  return (
    <div>
      <Header />

      <div className="flex">

        <Sidebar />

        {/* HOME PAGE */}
        <div className="ml-60 p-6 w-full bg-gray-50 min-h-screen">

          <h1 className="text-xl font-semibold mb-4">Home Page</h1>

          <div className="grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-8">

            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}