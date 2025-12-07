import React from "react";
import {
  Home,
  PlaySquare,
  Compass,
  History,
  Music2,
  Gamepad2,
  Film,
  Newspaper,
} from "lucide-react";

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`fixed top-16 left-0 h-[calc(100vh-64px)] bg-white overflow-y-auto 
      transition-all duration-300 
      ${isOpen ? "w-48" : "w-19"}`}
    >
      <div className="mt-4 space-y-3">

        <SidebarItem icon={<Home size={22} />} label="Home" isOpen={isOpen} />
        <SidebarItem icon={<PlaySquare size={22} />} label="Shorts" isOpen={isOpen} />
        <SidebarItem icon={<PlaySquare size={22} />} label="Subscriptions" isOpen={isOpen} />

        <hr className="my-2" />

        {isOpen && <p className="text-gray-900 text-xs px-3">Explore</p>}

        <SidebarItem icon={<Compass size={22} />} label="Trending" isOpen={isOpen} />
        <SidebarItem icon={<Music2 size={22} />} label="Music" isOpen={isOpen} />
        <SidebarItem icon={<Film size={22} />} label="Movies" isOpen={isOpen} />
        <SidebarItem icon={<Gamepad2 size={22} />} label="Gaming" isOpen={isOpen} />
        <SidebarItem icon={<Newspaper size={22} />} label="News" isOpen={isOpen} />

      </div>
    </div>
  );
}

function SidebarItem({ icon, label, isOpen }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
      {icon}
      {isOpen && <span className="text-sm">{label}</span>}
    </div>
  );
}