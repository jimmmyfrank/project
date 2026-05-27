import React, { useState } from 'react';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for video cards
  const videos = [
    {
      id: 1,
      title: "Building a Full Stack App with React and Node.js | Complete Tutorial",
      channel: "CodeMaster",
      views: "1.2M views",
      timestamp: "2 weeks ago",
      thumbnail: "https://picsum.photos/id/1/360/200",
      avatar: "https://picsum.photos/id/100/36/36",
      duration: "32:15"
    },
    {
      id: 2,
      title: "The Future of AI: What's Coming in 2025?",
      channel: "TechInsights",
      views: "892K views",
      timestamp: "5 days ago",
      thumbnail: "https://picsum.photos/id/2/360/200",
      avatar: "https://picsum.photos/id/101/36/36",
      duration: "18:42"
    },
    {
      id: 3,
      title: "10 JavaScript Tips You Need to Know",
      channel: "DevSimplified",
      views: "2.1M views",
      timestamp: "1 month ago",
      thumbnail: "https://picsum.photos/id/3/360/200",
      avatar: "https://picsum.photos/id/102/36/36",
      duration: "12:28"
    },
    {
      id: 4,
      title: "Epic Mountain Bike Ride Through Forest",
      channel: "AdventureTV",
      views: "567K views",
      timestamp: "3 days ago",
      thumbnail: "https://picsum.photos/id/4/360/200",
      avatar: "https://picsum.photos/id/103/36/36",
      duration: "8:54"
    },
    {
      id: 5,
      title: "Mastering CSS Grid: Advanced Layout Techniques",
      channel: "FrontendFocus",
      views: "345K views",
      timestamp: "1 week ago",
      thumbnail: "https://picsum.photos/id/5/360/200",
      avatar: "https://picsum.photos/id/104/36/36",
      duration: "24:10"
    },
    {
      id: 6,
      title: "Top 10 Gadgets of 2025",
      channel: "GadgetGuru",
      views: "1.8M views",
      timestamp: "2 days ago",
      thumbnail: "https://picsum.photos/id/6/360/200",
      avatar: "https://picsum.photos/id/105/36/36",
      duration: "15:30"
    },
    {
      id: 7,
      title: "Learn Python in 1 Hour | Beginner Tutorial",
      channel: "PythonPro",
      views: "3.2M views",
      timestamp: "3 weeks ago",
      thumbnail: "https://picsum.photos/id/7/360/200",
      avatar: "https://picsum.photos/id/106/36/36",
      duration: "58:22"
    },
    {
      id: 8,
      title: "Amazing Wildlife Documentary | 4K Nature",
      channel: "NatGeoWild",
      views: "2.5M views",
      timestamp: "4 days ago",
      thumbnail: "https://picsum.photos/id/8/360/200",
      avatar: "https://picsum.photos/id/107/36/36",
      duration: "45:12"
    },
    {
      id: 9,
      title: "React vs Vue vs Angular 2025",
      channel: "WebDevWeekly",
      views: "678K views",
      timestamp: "6 days ago",
      thumbnail: "https://picsum.photos/id/9/360/200",
      avatar: "https://picsum.photos/id/108/36/36",
      duration: "22:05"
    },
    {
      id: 10,
      title: "The Best Coffee Recipe Ever | Barista Secrets",
      channel: "BrewMaster",
      views: "987K views",
      timestamp: "1 week ago",
      thumbnail: "https://picsum.photos/id/10/360/200",
      avatar: "https://picsum.photos/id/109/36/36",
      duration: "6:18"
    },
    {
      id: 11,
      title: "How to Start a Successful YouTube Channel",
      channel: "CreatorAcademy",
      views: "1.1M views",
      timestamp: "2 weeks ago",
      thumbnail: "https://picsum.photos/id/11/360/200",
      avatar: "https://picsum.photos/id/110/36/36",
      duration: "28:45"
    },
    {
      id: 12,
      title: "Extreme Sports Compilation 2025",
      channel: "XtremeSports",
      views: "4.2M views",
      timestamp: "1 day ago",
      thumbnail: "https://picsum.photos/id/12/360/200",
      avatar: "https://picsum.photos/id/111/36/36",
      duration: "10:32"
    }
  ];

  // Sidebar menu items
  const menuItems = [
    { icon: "🏠", label: "Home", active: true },
    { icon: "🎬", label: "Shorts" },
    { icon: "📺", label: "Subscriptions" },
    { icon: "📂", label: "Library" },
    { icon: "📜", label: "History" },
    { icon: "▶️", label: "Your videos" },
    { icon: "⏰", label: "Watch later" },
    { icon: "👍", label: "Liked videos" }
  ];

  const categories = [
    "All", "Music", "Gaming", "Live", "JavaScript", "React", "News", "Sports", "Podcasts", "Cooking", "Comedy", "Travel", "Science", "Fitness"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: "${searchQuery}"`);
    // In a real app, you would fetch videos based on searchQuery
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-[#0F0F0F] border-b border-[#272727] px-4 py-2 z-50">
        <div className="flex items-center justify-between max-w-[1800px] mx-auto">
          {/* Left section - Logo & Menu */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-[#272727] rounded-full transition"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-1 cursor-pointer">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="red">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                <path d="M9.545 15.568L9.545 8.432L15.818 12L9.545 15.568z" fill="white" />
              </svg>
              <span className="text-white font-semibold text-xl tracking-tight">YouTube</span>
              <span className="text-gray-400 text-xs ml-0.5 mt-2">BD</span>
            </div>
          </div>

          {/* Center - Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-[600px] mx-6">
            <div className="flex w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="flex-1 bg-[#121212] border border-[#303030] rounded-l-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-[#222222] border border-[#303030] border-l-0 rounded-r-full px-6 hover:bg-[#2A2A2A] transition"
              >
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Right section - Icons */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-[#272727] rounded-full hidden sm:block">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-[#272727] rounded-full">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold text-sm">
              U
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`fixed top-14 left-0 bottom-0 bg-[#0F0F0F] overflow-y-auto z-40 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} border-r border-[#272727]`}>
        <div className="py-4">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className={`w-full flex items-center gap-5 px-4 py-2.5 hover:bg-[#272727] transition ${item.active ? 'bg-[#272727]' : ''}`}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span className="text-white text-sm">{item.label}</span>}
            </button>
          ))}
          {sidebarOpen && (
            <>
              <div className="border-t border-[#272727] my-3"></div>
              <div className="px-4 py-2">
                <p className="text-gray-400 text-xs">© 2025 YouTube Clone</p>
              </div>
            </>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className={`pt-14 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Categories Bar */}
        <div className="sticky top-14 bg-[#0F0F0F] border-b border-[#272727] z-30 overflow-x-auto">
          <div className="flex gap-3 px-4 py-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  idx === 0 
                    ? 'bg-white text-black' 
                    : 'bg-[#272727] text-white hover:bg-[#3A3A3A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="p-4 max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {videos.map((video) => (
              <div key={video.id} className="cursor-pointer group">
                {/* Thumbnail */}
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full aspect-video object-cover group-hover:rounded-none transition-all duration-300"
                  />
                  <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                    {video.duration}
                  </span>
                </div>
                
                {/* Video Info */}
                <div className="flex gap-3 mt-3">
                  <img 
                    src={video.avatar} 
                    alt={video.channel}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-sm line-clamp-2 mb-1">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">{video.channel}</p>
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <span>{video.views}</span>
                      <span>•</span>
                      <span>{video.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;