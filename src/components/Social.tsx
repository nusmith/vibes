import { useState } from 'react';
import { Heart, MessageCircle, Share2, Music } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stories = [
  {
    id: 1,
    user: 'Luna Wave',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    hasNew: true
  },
  {
    id: 2,
    user: 'Echo Dreams',
    avatar: 'https://images.unsplash.com/photo-1724333192036-304fa9af2423?w=400',
    hasNew: true
  },
  {
    id: 3,
    user: 'Neon Pulse',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    hasNew: false
  },
  {
    id: 4,
    user: 'Velvet Sky',
    avatar: 'https://images.unsplash.com/photo-1724333192036-304fa9af2423?w=400',
    hasNew: true
  }
];

const posts = [
  {
    id: 1,
    user: {
      name: 'Echo Dreams',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      verified: true
    },
    type: 'album',
    content: {
      title: 'Midnight Reverie',
      description: 'My new album is finally here! 🎵✨ Poured my heart into every track. Hope you enjoy the journey.',
      image: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?w=800',
      trackCount: 12
    },
    likes: 3421,
    comments: 189,
    shares: 56,
    timestamp: '2h ago'
  },
  {
    id: 2,
    user: {
      name: 'Luna Wave',
      avatar: 'https://images.unsplash.com/photo-1724333192036-304fa9af2423?w=400',
      verified: true
    },
    type: 'track',
    content: {
      title: 'Cosmic Drift',
      description: 'New single out now! This one is special. 💫',
      image: 'https://images.unsplash.com/photo-1633704685725-4c225ff0bd8a?w=800',
      duration: '4:32'
    },
    likes: 2156,
    comments: 94,
    shares: 32,
    timestamp: '5h ago'
  },
  {
    id: 3,
    user: {
      name: 'Neon Pulse',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      verified: false
    },
    type: 'playlist',
    content: {
      title: 'Summer Nights 2024',
      description: 'My go-to playlist for beach sunsets 🌅',
      image: 'https://images.unsplash.com/photo-1582730147924-d92f4da00252?w=800',
      trackCount: 28
    },
    likes: 892,
    comments: 41,
    shares: 18,
    timestamp: '1d ago'
  }
];

export function Social() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Stories */}
      <section>
        <h2 className="mb-4">Stories</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4">
          {stories.map((story) => (
            <button
              key={story.id}
              className="flex flex-col items-center gap-2 min-w-[80px]"
            >
              <div
                className={`relative rounded-full p-1 ${
                  story.hasNew
                    ? 'bg-gradient-to-tr from-purple-500 to-pink-500'
                    : 'bg-white/20'
                }`}
              >
                <ImageWithFallback
                  src={story.avatar}
                  alt={story.user}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-black"
                />
              </div>
              <p className="text-xs text-center line-clamp-1 w-20">{story.user}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Feed */}
      <section>
        <h2 className="mb-4">Feed</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
            >
              {/* Header */}
              <div className="flex items-center gap-3 p-4">
                <ImageWithFallback
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm">{post.user.name}</h3>
                    {post.user.verified && (
                      <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs text-gray-400">{post.timestamp}</p>
                </div>
                <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs capitalize flex items-center gap-1">
                  <Music className="w-3 h-3" />
                  {post.type}
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-3">
                <p className="text-sm">{post.content.description}</p>
              </div>

              {/* Media */}
              <div className="relative">
                <ImageWithFallback
                  src={post.content.image}
                  alt={post.content.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg mb-1">{post.content.title}</h3>
                  <p className="text-sm text-gray-300">
                    {'trackCount' in post.content && `${post.content.trackCount} tracks`}
                    {'duration' in post.content && post.content.duration}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{post.likes.toLocaleString()} likes</span>
                  <div className="flex items-center gap-4">
                    <span>{post.comments} comments</span>
                    <span>{post.shares} shares</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition ${
                      likedPosts.includes(post.id)
                        ? 'bg-pink-500/20 text-pink-400'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                    <span className="text-sm">Like</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">Comment</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition">
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
