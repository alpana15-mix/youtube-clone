export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md sticky top-0 z-50">

      {/* Left Section */}
      <div className="flex items-center gap-4">
        <span className="text-2xl cursor-pointer">☰</span>
        <h1 className="text-xl font-bold">YouTube Clone</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-1/2 max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-4 py-2 border rounded-l-full outline-none"
        />
        <button className="px-4 py-2 bg-gray-200 rounded-r-full">🔍</button>
      </div>

      {/* Right Section */}
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Sign In
      </button>

    </header>
  );
}