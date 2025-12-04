import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";

export default function App() {
  return (
    <div className="flex">
      
      {/* LEFT SIDE MENU */}
      <Sidebar />

      {/* RIGHT SIDE MAIN CONTENT */}
      <div className="flex-1 p-4">
        <Header />

        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />} />

          {/* Video Page Route (id = video index) */}
          <Route path="/video/:id" element={<VideoPage />} />
        </Routes>
      </div>
    </div>
  );
}