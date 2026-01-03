import { Play, Heart, MoreVertical } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const playlists = [
  {
    id: 1,
    name: 'Chill Vibes',
    image: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?w=400',
    trackCount: 42,
    color: 'from-purple-600 to-blue-600'
  },
  {
    id: 2,
    name: 'Workout Mix',
    image: 'https://images.unsplash.com/photo-1633704685725-4c225ff0bd8a?w=400',
    trackCount: 28,
    color: 'from-red-600 to-orange-600'
  },
  {
    id: 3,
    name: 'Evening Jazz',
    image: 'https://images.unsplash.com/photo-1582730147924-d92f4da00252?w=400',
    trackCount: 35,
    color: 'from-green-600 to-teal-600'
  },
  {
    id: 4,
    name: 'Focus Flow',
    image: 'https://images.unsplash.com/photo-1637759898746-283c2d6c24c5?w=400',
    trackCount: 51,
    color: 'from-pink-600 to-purple-600'
  }
];

const artists = [
  { id: 1, name: 'Luna Wave', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400' },
  { id: 2, name: 'Echo Dreams', image: 'https://images.unsplash.com/photo-1724333192036-304fa9af2423?w=400' },
  { id: 3, name: 'Neon Pulse', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400' },
  { id: 4, name: 'Velvet Sky', image: 'https://images.unsplash.com/photo-1724333192036-304fa9af2423?w=400' }
];

const recentlyPlayed = [
  {
    id: 1,
    title: 'Midnight Dreams',
    artist: 'Luna Wave',
    image: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?w=400',
    duration: '3:45'
  },
  {
    id: 2,
    title: 'Electric Heart',
    artist: 'Neon Pulse',
    image: 'https://images.unsplash.com/photo-1633704685725-4c225ff0bd8a?w=400',
    duration: '4:12'
  },
  {
    id: 3,
    title: 'Starlight',
    artist: 'Echo Dreams',
    image: 'https://images.unsplash.com/photo-1582730147924-d92f4da00252?w=400',
    duration: '3:28'
  }
];

export function ListenNow() {
  return (
    <div className="space-y-8 pb-8">
      {/* Currently Listening */}
      <section>
        <h2 className="mb-4">Currently Listening</h2>
        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
          <div className="flex gap-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1644855640845-ab57a047320e?w=400"
              alt="Now playing album"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg mb-1">Midnight Dreams</h3>
              <p className="text-gray-400 text-sm">Luna Wave</p>
              <div className="mt-3 bg-white/20 rounded-full h-1">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-full rounded-full w-2/3" />
              </div>
            </div>
            <button className="text-pink-400">
              <Heart className="w-6 h-6 fill-current" />
            </button>
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2>Your Playlists</h2>
          <button className="text-purple-400 text-sm">See all</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition cursor-pointer"
            >
              <div className={`aspect-square bg-gradient-to-br ${playlist.color} relative`}>
                <ImageWithFallback
                  src={playlist.image}
                  alt={playlist.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <button className="absolute bottom-2 right-2 bg-white text-black rounded-full p-3 opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0">
                  <Play className="w-4 h-4 fill-current" />
                </button>
              </div>
              <div className="p-3">
                <h3 className="text-sm mb-1">{playlist.name}</h3>
                <p className="text-xs text-gray-400">{playlist.trackCount} tracks</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artists */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2>Your Artists</h2>
          <button className="text-purple-400 text-sm">See all</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4">
          {artists.map((artist) => (
            <div key={artist.id} className="flex flex-col items-center gap-2 min-w-[100px]">
              <ImageWithFallback
                src={artist.image}
                alt={artist.name}
                className="w-24 h-24 rounded-full object-cover ring-2 ring-purple-500/50"
              />
              <p className="text-sm text-center">{artist.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section>
        <h2 className="mb-4">Recently Played</h2>
        <div className="space-y-3">
          {recentlyPlayed.map((track) => (
            <div
              key={track.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition cursor-pointer group"
            >
              <ImageWithFallback
                src={track.image}
                alt={track.title}
                className="w-12 h-12 rounded object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm truncate">{track.title}</h3>
                <p className="text-xs text-gray-400 truncate">{track.artist}</p>
              </div>
              <span className="text-xs text-gray-400">{track.duration}</span>
              <button className="opacity-0 group-hover:opacity-100 transition">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
