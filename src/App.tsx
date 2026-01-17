import  { useState } from 'react';
import { Home, Compass, Users, Headphones, Search } from 'lucide-react';
import { ListenNow } from './components/ListenNow';
import { Discover } from './components/Discover';
import { Social } from './components/Social';
import { Creator } from './components/Creator';
import { SearchModal } from './components/SearchModal';
import { NowPlaying } from './components/NowPlaying';

export default function App() {
  const [activeTab, setActiveTab] = useState('listen');
  const [showSearch, setShowSearch] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'listen':
        return <ListenNow />;
      case 'discover':
        return <Discover />;
      case 'social':
        return <Social />;
      case 'creator':
        return <Creator isPremium={isPremium} />;
      default:
        return <ListenNow />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pb-32">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent z-40 px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl">VibeStream</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowSearch(true)}
            className="p-2 hover:bg-white/10 rounded-full transition"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsPremium(!isPremium)}
            className={`px-3 py-1 rounded-full text-xs transition ${
              isPremium
                ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            {isPremium ? 'Premium' : 'Go Premium'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 px-4">
        {renderContent()}
      </main>

      {/* Now Playing Bar */}
      <NowPlaying />

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 z-50">
        <div className="flex items-center justify-around max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab('listen')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition ${
              activeTab === 'listen' ? 'text-purple-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Listen Now</span>
          </button>
          <button
            onClick={() => setActiveTab('discover')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition ${
              activeTab === 'discover' ? 'text-purple-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Compass className="w-6 h-6" />
            <span className="text-xs">Discover</span>
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition ${
              activeTab === 'social' ? 'text-purple-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Users className="w-6 h-6" />
            <span className="text-xs">Social</span>
          </button>
          <button
            onClick={() => setActiveTab('creator')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition ${
              activeTab === 'creator' ? 'text-purple-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Headphones className="w-6 h-6" />
            <span className="text-xs">Creator</span>
          </button>
        </div>
      </nav>

      {/* Search Modal */}
      {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
    </div>
  );
}
