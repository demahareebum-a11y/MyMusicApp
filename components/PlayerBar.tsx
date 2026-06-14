"use client";

import Image from "next/image";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Repeat1,
  Volume2,
  VolumeX,
  Heart,
  ListMusic,
} from "lucide-react";
import { usePlayerStore } from "@/lib/store";
import { formatDuration } from "@/lib/data";

export default function PlayerBar() {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    nextTrack,
    prevTrack,
    volume,
    setVolume,
    progress,
    setProgress,
    duration,
    shuffle,
    toggleShuffle,
    repeat,
    toggleRepeat,
  } = usePlayerStore();

  const currentTime = (progress / 100) * duration;

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    setProgress(Math.max(0, Math.min(100, pct)));
  };

  return (
    <div className="h-20 bg-zinc-900 border-t border-zinc-800 flex items-center px-4 gap-4 shrink-0">
      {/* Track info */}
      <div className="flex items-center gap-3 w-64 min-w-0">
        {currentTrack ? (
          <>
            <div className="relative w-14 h-14 shrink-0">
              <Image
                src={currentTrack.cover}
                alt={currentTrack.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-medium truncate">{currentTrack.title}</p>
              <p className="text-zinc-400 text-xs truncate">{currentTrack.artist}</p>
            </div>
            <button className="text-zinc-400 hover:text-green-400 transition-colors ml-2 shrink-0">
              <Heart size={16} />
            </button>
          </>
        ) : (
          <div className="flex items-center gap-3 text-zinc-500">
            <div className="w-14 h-14 bg-zinc-800 rounded flex items-center justify-center shrink-0">
              <ListMusic size={20} />
            </div>
            <div>
              <p className="text-sm">No track selected</p>
              <p className="text-xs">Browse and play a song</p>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex-1 flex flex-col items-center gap-1 max-w-xl">
        <div className="flex items-center gap-5">
          <button
            onClick={toggleShuffle}
            className={`transition-colors ${shuffle ? "text-green-400" : "text-zinc-400 hover:text-white"}`}
          >
            <Shuffle size={18} />
          </button>
          <button
            onClick={prevTrack}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <SkipBack size={20} fill="currentColor" />
          </button>
          <button
            onClick={togglePlay}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform text-black"
          >
            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
          </button>
          <button
            onClick={nextTrack}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <SkipForward size={20} fill="currentColor" />
          </button>
          <button
            onClick={toggleRepeat}
            className={`transition-colors relative ${repeat !== "off" ? "text-green-400" : "text-zinc-400 hover:text-white"}`}
          >
            {repeat === "one" ? <Repeat1 size={18} /> : <Repeat size={18} />}
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-2 w-full">
          <span className="text-zinc-400 text-xs w-10 text-right">
            {formatDuration(Math.floor(currentTime))}
          </span>
          <div
            className="flex-1 h-1 bg-zinc-700 rounded-full cursor-pointer group"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-white group-hover:bg-green-400 rounded-full relative transition-colors"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <span className="text-zinc-400 text-xs w-10">
            {formatDuration(Math.floor(duration))}
          </span>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-2 w-36 justify-end">
        <button
          onClick={() => setVolume(volume > 0 ? 0 : 0.7)}
          className="text-zinc-400 hover:text-white transition-colors"
        >
          {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
        <div className="flex-1 h-1 bg-zinc-700 rounded-full cursor-pointer group" onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const vol = (e.clientX - rect.left) / rect.width;
          setVolume(Math.max(0, Math.min(1, vol)));
        }}>
          <div
            className="h-full bg-zinc-400 group-hover:bg-white rounded-full transition-colors"
            style={{ width: `${volume * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
