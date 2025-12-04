export default function Sidebar() {
  return (
    <div className="w-52 h-screen border-r p-4 text-sm sticky top-0">

      <div className="space-y-4">
        <p className="font-semibold">Home</p>
        <p>Shorts</p>
        <p>Subscriptions</p>
        <p>History</p>

        <hr className="my-2"/>

        <p className="font-semibold">Explore</p>
        <p>Trending</p>
        <p>Shopping</p>
        <p>Music</p>
        <p>Movies</p>
        <p>Gaming</p>
      </div>
    </div>
  );
}