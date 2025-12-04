import VideoCard from "../components/VideoCard";

const videos = [
  {
    thumbnail: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
    title: "Amazing React Tutorial",
    channel: "Code Academy",
    views: "1.2M",
    time: "2 days ago",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    thumbnail: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
    title: "Travel Vlog - Costa Rica",
    channel: "Wanderers",
    views: "980K",
    time: "1 week ago",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    thumbnail: "https://images.pexels.com/photos/713048/pexels-photo-713048.jpeg",
    title: "Best Coding Playlist",
    channel: "Coding Beats",
    views: "530K",
    time: "3 days ago",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    thumbnail: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg",
    title: "Photography Tips",
    channel: "Lens Master",
    views: "2.1M",
    time: "2 months ago",
    avatar: "https://i.pravatar.cc/150?img=4"
  },
  {
    thumbnail: "https://images.pexels.com/photos/1557238/pexels-photo-1557238.jpeg",
    title: "Relaxing Nature Sounds",
    channel: "Nature Live",
    views: "4.2M",
    time: "1 month ago",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    thumbnail: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    title: "10 Hours Study With Me",
    channel: "Focus Room",
    views: "3.5M",
    time: "2 weeks ago",
    avatar: "https://i.pravatar.cc/150?img=6"
  },
   {
    thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg",
    title: "Amazing React Tutorial",
    channel: "Code Academy",
    views: "1.2M",
    time: "2 days ago",
    avatar: "https://yt3.ggpht.com/ytc/AKedOLS1=s88"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/LXb3EKWsInQ/hqdefault.jpg",
    title: "Travel Vlog - Bali",
    channel: "Wanderers",
    views: "980K",
    time: "1 week ago",
    avatar: "https://yt3.ggpht.com/ytc/AKedOL22=s88"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    title: "Relaxing Nature Sounds",
    channel: "Nature Live",
    views: "4.2M",
    time: "1 month ago",
    avatar: "https://yt3.ggpht.com/ytc/AKedOL55=s88"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    title: "Coding 10 Hours Study With Me",
    channel: "Focus Room",
    views: "3.5M",
    time: "2 weeks ago",
    avatar: "https://yt3.ggpht.com/ytc/AKedOL66=s88"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    title: "Ocean Waves 4K Screensaver",
    channel: "Ocean TV",
    views: "9.1M",
    time: "3 months ago",
    avatar: "https://yt3.ggpht.com/ytc/AKedOL77=s88"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/6Dh-RL__uN4/hqdefault.jpg",
    title: "JavaScript Full Course",
    channel: "Tech Master",
    views: "1.8M",
    time: "1 year ago",
    avatar: "https://yt3.ggpht.com/ytc/AKedOL88=s88"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ktvTqknDobU/hqdefault.jpg",
    title: "Imagine Dragons - Believer",
    channel: "Music World",
    views: "1B",
    time: "6 years ago",
    avatar: "https://yt3.ggpht.com/ytc/AKedOL99=s88"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/J---aiyznGQ/hqdefault.jpg",
    title: "Cat Funny Moments",
    channel: "Animal Planet",
    views: "800K",
    time: "5 days ago",
    avatar: "https://yt3.ggpht.com/ytc/AKedOL11=s88"
  },
  {
    thumbnail: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
    title: "JavaScript Full Course",
    channel: "Tech Master",
    views: "1.8M",
    time: "1 year ago",
    avatar: "https://i.pravatar.cc/150?img=8"
  },
  {
    thumbnail: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
    title: "Believer Song Cover",
    channel: "Music World",
    views: "1B",
    time: "6 years ago",
    avatar: "https://i.pravatar.cc/150?img=9"
  },
  {
    thumbnail: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    title: "Cat Funny Moments",
    channel: "Animal Planet",
    views: "800K",
    time: "5 days ago",
    avatar: "https://i.pravatar.cc/150?img=10"
  }
];
export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-5 p-6">
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
}