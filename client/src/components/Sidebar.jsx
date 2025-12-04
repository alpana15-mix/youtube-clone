// src/components/Sidebar.jsx
import { useState } from "react";

const items = [
  { id: 1, label: "Home", icon: "🏠" },
  { id: 2, label: "Explore", icon: "🔎" },
  { id: 3, label: "Subscriptions", icon: "📺" },
  { id: 4, label: "Library", icon: "📚" },
  { id: 5, label: "History", icon: "🕘" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    // wrapper: fixed on left with height full
    <aside
      className={`bg-white border-r h-screen sticky top-0 transition-all duration-200 ${
        open ? "w-64" : "w-16"
      }`}
    >
      {/* toggle */}
      <div className="flex items-center justify-between px-3 py-3 border-b">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="text-xl p-1 rounded hover:bg-gray-100"
          >
            ☰
          </button>
          {open && <span className="font-semibold">Menu</span>}
        </div>
      </div>

      {/* items */}
      <nav className="mt-2">
        {items.map((it) => (
          <div
            key={it.id}
            className="flex items-center gap-3 px-3 py-3 hover:bg-gray-100 cursor-pointer"
          >
            <div className="text-lg w-6 text-center">{it.icon}</div>
            {/* label hides when collapsed */}
            <div className={`overflow-hidden transition-all ${open ? "w-auto opacity-100" : "w-0 opacity-0"}`}>
              <span className="whitespace-nowrap">{it.label}</span>
            </div>
          </div>
        ))}
      </nav>

      {/* spacer */}
      <div className="mt-auto p-3">
        {open ? (
          <div className="text-sm text-gray-600">Made with ❤️</div>
        ) : (
          <div className="text-center text-xs text-gray-400"> </div>
        )}
      </div>
    </aside>
  );
}