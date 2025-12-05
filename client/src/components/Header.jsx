// Header.jsx
// This file shows the top bar with menu (hamburger icon) + search bar + logo

export default function Header({ toggleSidebar }) {
  return (
    <div className="flex items-center justify-between mb-4">

      {/* LEFT → Hamburger + Logo */}
      <div className="flex items-center gap-4">
        
        {/* HAMBURGER MENU BUTTON */}
        <button onClick={toggleSidebar} className="text-2xl">
          ≡
        </button>

        {/* YouTube Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          className="w-20"
          alt="logo"
        />
      </div>

      {/* CENTER → Search Bar */}
      <div className="flex items-center gap-2 border rounded-full px-4 py-1 w-96">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none"
        />
      </div>

      {/* RIGHT → Sign in */}
      <button className="px-4 py-1 bg-blue-500 text-white rounded-full">
        Sign In
      </button>
    </div>
  );
}