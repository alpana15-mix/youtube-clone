// Header.jsx

export default function Header({ toggleSidebar }) {
  return (
    <header className="w-full bg-white sticky top-0 z-50 flex items-center justify-between px-4 py-2 shadow">

      {/* LEFT: Hamburger + Logo */}
      <div className="flex items-center gap-4">

        {/* Hamburger */}
        <button onClick={toggleSidebar}>
          <svg width="26" height="26" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* YouTube Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube"
          className="w-20"
        />
      </div>


      {/* CENTER: Search Input + Mic */}
      <div className="flex items-center gap-3">

        {/* Search Box */}
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-1 w-96 bg-gray-100">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none"
          />

          {/* Search Icon */}
          <button>
            <svg width="22" height="22" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke="black" strokeWidth="2" fill="none" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="black" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Mic Icon */}
        <button className="p-2 bg-gray-100 rounded-full">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3z" fill="black"/>
            <path d="M19 11a7 7 0 0 1-14 0" stroke="black" strokeWidth="2" fill="none"/>
            <line x1="12" y1="18" x2="12" y2="22" stroke="black" strokeWidth="2"/>
            <line x1="8" y1="22" x2="16" y2="22" stroke="black" strokeWidth="2"/>
          </svg>
        </button>

      </div>


      {/* RIGHT: 3 dots + Sign In */}
      <div className="flex items-center gap-4">

        {/* 3 Dots Icon */}
        <button>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="2" fill="black" />
            <circle cx="12" cy="12" r="2" fill="black" />
            <circle cx="12" cy="19" r="2" fill="black" />
          </svg>
        </button>

        {/* Sign In Button */}
        <button className="px-4 py-1 bg-blue-500 text-white rounded-full">
          Sign In
        </button>

      </div>

    </header>
  );
}