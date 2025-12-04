import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-4">Home</h2>

          {/* simple grid placeholder for videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded shadow-sm overflow-hidden">
                <div className="bg-gray-200 h-40"></div>
                <div className="p-3">
                  <h3 className="font-semibold">Video title {i + 1}</h3>
                  <p className="text-sm text-gray-500">Channel • 1.2M views</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}