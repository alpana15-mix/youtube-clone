import React from "react";
import {
  FaHome,
  FaBolt,
  FaYoutube,
  FaHistory,
  FaFire,
  FaShoppingBag,
  FaMusic,
  FaFilm,
  FaBroadcastTower,
  FaGamepad,
  FaNewspaper,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-60 h-screen overflow-y-auto border-r bg-white p-4 fixed top-16">
      
      {/* MAIN MENU */}
      <div className="mb-6">
        <SidebarItem icon={<FaHome />} label="Home" active />
        <SidebarItem icon={<FaBolt />} label="Shorts" />
        <SidebarItem icon={<FaYoutube />} label="Subscriptions" />
        <SidebarItem icon={<FaHistory />} label="History" />
      </div>

      <hr className="my-4" />

      {/* EXPLORE SECTION */}
      <h3 className="text-gray-600 font-semibold mb-2">Explore</h3>
      <SidebarItem icon={<FaFire />} label="Trending" />
      <SidebarItem icon={<FaShoppingBag />} label="Shopping" />
      <SidebarItem icon={<FaMusic />} label="Music" />
      <SidebarItem icon={<FaFilm />} label="Movies" />
      <SidebarItem icon={<FaBroadcastTower />} label="Live" />
      <SidebarItem icon={<FaGamepad />} label="Gaming" />
      <SidebarItem icon={<FaNewspaper />} label="News" />
    </div>
  );
}

// REUSABLE SIDEBAR ITEM COMPONENT
function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer hover:bg-gray-200 ${
        active ? "bg-gray-200 font-semibold" : ""
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
}