import { useState } from 'react';
import { Play, Heart, Share2, Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const vibes = [
  { id: 1, name: 'Chill', emoji: '😌', active: true },
  { id: 2, name: 'Energetic', emoji: '⚡', active: false },
  { id: 3, name: 'Focus', emoji: '🎯', active: false },
  { id: 4, name: 'Party', emoji: '🎉', active: false },
  { id: 5, name: 'Sad', emoji: '💙', active: false },
  { id: 6, name: 'Happy', emoji: '☀️', active: false }
];

const recommendations = [
  {
    id: 1,
    type: 'playlist',
    title: 'Late Night Lofi',
    description: 'Perfect for winding down after a long day',
    image: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?w=400',
    curator: 'VibeStream',
    likes: 1243,
    tracks: 32
  },
  {
    id: 2,
    type: 'album',
    title: 'Neon Nights',
    description: 'The latest from Echo Dreams',
    image: 'https://images.unsplash.com/photo-1633704685725-4c225ff0bd8a?w=400',
    artist: 'Echo Dreams',
    likes: 892,
    year: 2024
  },
  {
    id: 3,
    type: 'playlist',
    title: 'Sunset Jazz Sessions',
    description: 'Smooth jazz for relaxing evenings',
    image: 'https://images.unsplash.com/photo-1582730147924-d92f4da00252?w=400',
    curator: 'JazzMaster',
    likes: 2156,
    tracks: 45
  },
  {
    id: 4,
    type: 'track',
    title: 'Cosmic Drift',
    description: 'Trending in your area',
    image: 'https://images.unsplash.com/photo-1637759898746-283c2d6c24c5?w=400',
    artist: 'Luna Wave',
    likes: 5421,
    duration: '4:32'
  }
];

export function Discover() {
  const [selectedVibes, setSelectedVibes] = useState([1]);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleVibe = (vibeId: number) => {
    setSelectedVibes(prev =>
      prev.includes(vibeId)
        ? prev.filter(id => id !== vibeId)
        : [...prev, vibeId]
    );
  };

  const toggleLike = (postId: number) => {
    setLikedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Vibe Selector */}
      <section>
        <h2 className="mb-4">Select Your Vibe</h2>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {vibes.map((vibe) => (
            <button
              key={vibe.id}
              onClick={() => toggleVibe(vibe.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition ${
                selectedVibes.includes(vibe.id)
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <span>{vibe.emoji}</span>
              <span className="text-sm">{vibe.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Recommendations Feed */}
      <section>
        <h2 className="mb-4">Recommended For You</h2>
        <div className="space-y-6">
          {recommendations.map((item) => (
            <article
              key={item.id}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition"
            >
              {/* Image */}
              <div className="relative aspect-square">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <button className="absolute bottom-4 right-4 bg-white text-black rounded-full p-4 hover:scale-110 transition shadow-xl">
                  <Play className="w-6 h-6 fill-current" />
                </button>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs capitalize">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">
                    {'artist' in item ? item.artist : item.curator}
                  </p>
                </div>

                <p className="text-sm text-gray-300">{item.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>
                    {'tracks' in item && `${item.tracks} tracks`}
                    {'duration' in item && item.duration}
                    {'year' in item && item.year}
                  </span>
                  <span>{item.likes.toLocaleString()} likes</span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => toggleLike(item.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition ${
                      likedPosts.includes(item.id)
                        ? 'bg-pink-500/20 text-pink-400'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${likedPosts.includes(item.id) ? 'fill-current' : ''}`} />
                    <span className="text-sm">Like</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition">
                    <Plus className="w-5 h-5" />
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
