export default function Header() {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b sticky top-0 bg-white">

      <h1 className="text-2xl font-bold">YouTube Clone</h1>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full px-4 py-1 w-72"
        />
        <button className="px-3 py-1 bg-gray-200 rounded-full">🔍</button>
        <button className="ml-2 px-4 py-1 bg-blue-600 text-white rounded-full">
          Sign In
        </button>
      </div>

    </div>
  );
}