import { useState } from 'react';
import { Search, X, TrendingUp, Clock, Music, User, List } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SearchModalProps {
  onClose: () => void;
}

const trendingSearches = [
  'Chill vibes',
  'Workout music',
  'Jazz classics',
  'Late night',
  'Focus beats'
];

const recentSearches = [
  'Luna Wave',
  'Midnight Dreams',
  'Summer playlist'
];

const searchResults = {
  tracks: [
    {
      id: 1,
      title: 'Midnight Dreams',
      artist: 'Luna Wave',
      album: 'Starlight Sessions',
      image: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?w=400'
    },
    {
      id: 2,
      title: 'Electric Heart',
      artist: 'Neon Pulse',
      album: 'Digital Love',
      image: 'https://images.unsplash.com/photo-1633704685725-4c225ff0bd8a?w=400'
    }
  ],
  artists: [
    {
      id: 1,
      name: 'Luna Wave',
      followers: '1.2M',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
    },
    {
      id: 2,
      name: 'Echo Dreams',
      followers: '892K',
      image: 'https://images.unsplash.com/photo-1724333192036-304fa9af2423?w=400'
    }
  ],
  playlists: [
    {
      id: 1,
      name: 'Chill Vibes',
      curator: 'VibeStream',
      trackCount: 42,
      image: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?w=400'
    }
  ]
};

export function SearchModal({ onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'tracks' | 'artists' | 'playlists'>('all');

  const hasQuery = query.length > 0;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for songs, artists, playlists..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="w-full bg-white/10 border border-white/20 rounded-full pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs - only show when searching */}
        {hasQuery && (
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {(['all', 'tracks', 'artists', 'playlists'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
                  activeTab === tab
                    ? 'bg-white text-black'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {!hasQuery ? (
          <>
            {/* Trending Searches */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <h2>Trending</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(search)}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm transition"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </section>

            {/* Recent Searches */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-purple-400" />
                <h2>Recent</h2>
              </div>
              <div className="space-y-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(search)}
                    className="flex items-center gap-3 w-full p-3 hover:bg-white/5 rounded-lg transition"
                  >
                    <Search className="w-5 h-5 text-gray-400" />
                    <span className="text-sm">{search}</span>
                  </button>
                ))}
              </div>
            </section>
          </>
        ) : (
          <>
            {/* Search Results */}
            {(activeTab === 'all' || activeTab === 'tracks') && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Music className="w-5 h-5 text-purple-400" />
                  <h2>Tracks</h2>
                </div>
                <div className="space-y-2">
                  {searchResults.tracks.map((track) => (
                    <button
                      key={track.id}
                      className="flex items-center gap-3 w-full p-3 hover:bg-white/5 rounded-lg transition"
                    >
                      <ImageWithFallback
                        src={track.image}
                        alt={track.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1 text-left min-w-0">
                        <h3 className="text-sm truncate">{track.title}</h3>
                        <p className="text-xs text-gray-400 truncate">{track.artist}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {(activeTab === 'all' || activeTab === 'artists') && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-purple-400" />
                  <h2>Artists</h2>
                </div>
                <div className="space-y-2">
                  {searchResults.artists.map((artist) => (
                    <button
                      key={artist.id}
                      className="flex items-center gap-3 w-full p-3 hover:bg-white/5 rounded-lg transition"
                    >
                      <ImageWithFallback
                        src={artist.image}
                        alt={artist.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 text-left min-w-0">
                        <h3 className="text-sm truncate">{artist.name}</h3>
                        <p className="text-xs text-gray-400">{artist.followers} followers</p>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {(activeTab === 'all' || activeTab === 'playlists') && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <List className="w-5 h-5 text-purple-400" />
                  <h2>Playlists</h2>
                </div>
                <div className="space-y-2">
                  {searchResults.playlists.map((playlist) => (
                    <button
                      key={playlist.id}
                      className="flex items-center gap-3 w-full p-3 hover:bg-white/5 rounded-lg transition"
                    >
                      <ImageWithFallback
                        src={playlist.image}
                        alt={playlist.name}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1 text-left min-w-0">
                        <h3 className="text-sm truncate">{playlist.name}</h3>
                        <p className="text-xs text-gray-400">
                          By {playlist.curator} • {playlist.trackCount} tracks
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}
