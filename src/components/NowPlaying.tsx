import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const currentTrack = {
    title: 'Midnight Dreams',
    artist: 'Luna Wave',
    album: 'Starlight Sessions',
    image: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?w=400',
    duration: 245, // seconds
    currentTime: 127 // seconds
  };

  const progress = (currentTrack.currentTime / currentTrack.duration) * 100;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isExpanded) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-purple-900 to-black z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsExpanded(false)}
            className="p-2 hover:bg-white/10 rounded-full transition"
          >
            <ChevronUp className="w-6 h-6 rotate-180" />
          </button>
          <h3 className="text-sm">Now Playing</h3>
          <div className="w-10" />
        </div>

        {/* Album Art */}
        <div className="flex-1 flex items-center justify-center px-8">
          <ImageWithFallback
            src={currentTrack.image}
            alt={currentTrack.title}
            className="w-full max-w-sm aspect-square rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Track Info */}
        <div className="px-8 py-6 space-y-6">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl mb-1 truncate">{currentTrack.title}</h2>
              <p className="text-gray-400 truncate">{currentTrack.artist}</p>
            </div>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 transition ${isLiked ? 'text-pink-400' : 'text-gray-400'}`}
            >
              <Heart className={`w-7 h-7 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="bg-white/20 rounded-full h-1">
              <div
                className="bg-white h-full rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>{formatTime(currentTrack.currentTime)}</span>
              <span>{formatTime(currentTrack.duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8">
            <button className="p-3 hover:bg-white/10 rounded-full transition">
              <SkipBack className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white text-black p-5 rounded-full hover:scale-110 transition"
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-current" />
              ) : (
                <Play className="w-7 h-7 fill-current" />
              )}
            </button>
            <button className="p-3 hover:bg-white/10 rounded-full transition">
              <SkipForward className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => setIsExpanded(true)}
      className="fixed bottom-20 left-0 right-0 bg-gradient-to-r from-purple-900/95 to-pink-900/95 backdrop-blur-lg border-t border-white/10 p-3 cursor-pointer hover:from-purple-900 hover:to-pink-900 transition z-40"
    >
      <div className="flex items-center gap-3 max-w-2xl mx-auto">
        <ImageWithFallback
          src={currentTrack.image}
          alt={currentTrack.title}
          className="w-12 h-12 rounded object-cover"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm truncate">{currentTrack.title}</h3>
          <p className="text-xs text-gray-300 truncate">{currentTrack.artist}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={`p-2 transition ${isLiked ? 'text-pink-400' : 'text-gray-400'}`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            className="bg-white text-black p-2 rounded-full hover:scale-110 transition"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current" />
            )}
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white/20 h-0.5">
        <div
          className="bg-gradient-to-r from-purple-400 to-pink-400 h-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
