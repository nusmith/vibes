import { Lock, Plus, Play, MoreVertical, TrendingUp, Users, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CreatorProps {
  isPremium: boolean;
}

const createdPlaylists = [
  {
    id: 1,
    name: 'My Chill Collection',
    image: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?w=400',
    trackCount: 24,
    followers: 1289,
    likes: 3421,
    isPublic: true
  },
  {
    id: 2,
    name: 'Workout Energy',
    image: 'https://images.unsplash.com/photo-1633704685725-4c225ff0bd8a?w=400',
    trackCount: 31,
    followers: 892,
    likes: 2156,
    isPublic: true
  },
  {
    id: 3,
    name: 'Late Night Vibes',
    image: 'https://images.unsplash.com/photo-1582730147924-d92f4da00252?w=400',
    trackCount: 18,
    followers: 543,
    likes: 1234,
    isPublic: false
  }
];

const stats = [
  { label: 'Total Followers', value: '2.7K', icon: Users, color: 'text-blue-400' },
  { label: 'Total Likes', value: '6.8K', icon: Heart, color: 'text-pink-400' },
  { label: 'Monthly Listeners', value: '1.2K', icon: TrendingUp, color: 'text-green-400' }
];

export function Creator({ isPremium }: CreatorProps) {
  if (!isPremium) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full p-8 mb-6">
          <Lock className="w-16 h-16 text-purple-400" />
        </div>
        <h2 className="text-2xl mb-3">Creator Tier Access</h2>
        <p className="text-gray-400 mb-6 max-w-md">
          Unlock the Creator tier to share your curated playlists with the community, track your
          stats, and build your following.
        </p>
        <div className="space-y-4 text-left mb-8">
          <div className="flex items-start gap-3">
            <div className="bg-purple-500/20 rounded-full p-1 mt-0.5">
              <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <div>
              <p className="text-sm">Create unlimited public playlists</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-purple-500/20 rounded-full p-1 mt-0.5">
              <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <div>
              <p className="text-sm">Analytics and insights</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-purple-500/20 rounded-full p-1 mt-0.5">
              <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <div>
              <p className="text-sm">Verified creator badge</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-purple-500/20 rounded-full p-1 mt-0.5">
              <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <div>
              <p className="text-sm">Priority support</p>
            </div>
          </div>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full hover:opacity-90 transition">
          Upgrade to Creator Tier
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-8">
      {/* Stats Overview */}
      <section>
        <h2 className="mb-4">Your Stats</h2>
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/10"
            >
              <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
              <p className="text-xl mb-1">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Created Playlists */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2>Your Created Playlists</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm hover:opacity-90 transition">
            <Plus className="w-4 h-4" />
            Create
          </button>
        </div>

        <div className="space-y-4">
          {createdPlaylists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition group"
            >
              <div className="flex gap-4 p-4">
                <div className="relative">
                  <ImageWithFallback
                    src={playlist.image}
                    alt={playlist.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </button>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm mb-1 truncate">{playlist.name}</h3>
                      <p className="text-xs text-gray-400">{playlist.trackCount} tracks</p>
                    </div>
                    <button className="p-1 hover:bg-white/10 rounded transition">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{playlist.followers}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>{playlist.likes.toLocaleString()}</span>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs ${
                        playlist.isPublic
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {playlist.isPublic ? 'Public' : 'Private'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex border-t border-white/10">
                <button className="flex-1 py-3 text-xs text-gray-400 hover:bg-white/5 transition">
                  Edit
                </button>
                <button className="flex-1 py-3 text-xs text-gray-400 hover:bg-white/5 transition border-l border-white/10">
                  Share
                </button>
                <button className="flex-1 py-3 text-xs text-gray-400 hover:bg-white/5 transition border-l border-white/10">
                  Analytics
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
        <h3 className="mb-2">Creator Tips 💡</h3>
        <p className="text-sm text-gray-300 mb-4">
          Engage with your followers by updating playlists regularly and sharing them on social!
        </p>
        <button className="text-sm text-purple-400 hover:text-purple-300 transition">
          Learn more →
        </button>
      </section>
    </div>
  );
}
