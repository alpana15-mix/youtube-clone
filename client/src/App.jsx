// App.jsx

import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="">

      {/* Header stays on top */}
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Below Header → Sidebar + Main Content */}
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />

        {/* MAIN AREA */}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/video/:id" element={<VideoPage />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}