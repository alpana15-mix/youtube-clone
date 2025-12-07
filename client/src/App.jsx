import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CategoryBar from "./components/CategoryBar";

import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div className="w-full">

      {/* HEADER FIXED TOP */}
      <div className="fixed top-0 left-0 w-full z-20 bg-white">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      {/* SIDEBAR FIXED LEFT */}
      <div
        className={`fixed top-[56px] left-0 h-full bg-white overflow-y-auto transition-all z-10 
          ${isSidebarOpen ? "w-[245px]" : "w-[80px]"}`}
      >
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* MAIN CONTENT AREA (Navbar + Videos) */}
      <div
        className={`pt-[60px] transition-all ${
          isSidebarOpen ? "ml-[250px]" : "ml-[120px]"
        } w-full`}
      >
        {/* CATEGORY BAR Only on Home */}
        {isHome && (
          <div className="bg-white sticky top-[56px] z-10">
            <CategoryBar />
          </div>
        )}

        {/* Pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:id" element={<VideoPage />} />
        </Routes>
      </div>
    </div>
  );
}