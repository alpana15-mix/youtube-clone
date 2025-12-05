// App.jsx
// This file controls page layout: Header (top), Sidebar (left), Content (right)

import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    // Full screen height, page divided into header + main area
    <div className="h-screen flex flex-col">

      {/* Top Header */}
      <Header />

      {/* Main area below header */}
      <div className="flex flex-1">

        {/* Fixed Sidebar on left */}
        <Sidebar />

        {/* Scrollable page content on right */}
        <div className="flex-1 p-4 overflow-y-auto">

          <Routes>
            {/* Home page content */}
            <Route path="/" element={<HomePage />} />

            {/* Video player page */}
            <Route path="/video/:id" element={<VideoPage />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}