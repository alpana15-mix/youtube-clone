// App.jsx
// This file arranges Sidebar on left and Page Content on right.

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import VideoPage from "./pages/VideoPage";

export default function App() {
  return (
    <div className="flex">

      {/* LEFT SIDE – Sidebar */}
      <Sidebar />

      {/* RIGHT SIDE – Main Content Area */}
      <div className="flex-1 p-4">

        {/* Header always stays at top */}
        <Header />

        {/* Pages will load here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:id" element={<VideoPage />} />
        </Routes>

      </div>
    </div>
  );
}