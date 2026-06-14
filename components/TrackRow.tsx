"use client";

import Image from "next/image";
import { Play, Pause } from "lucide-react";
import { Track, formatDuration } from "@/lib/data";
import { usePlayerStore } from "@/lib/store";

interface TrackRowProps {
  track: Track;
  index: number;
  queue: Track[];
}

export default function TrackRow({ track, index, queue }: TrackRowProps) {
  const { currentTrack, isPlaying, setQueue, togglePlay } = usePlayerStore();
  const isActive = currentTrack?.id === track.id;

  const handlePlay = () => {
    if (isActive) {
      togglePlay();
    } else {
      setQueue(queue, index);
    }
  };

  return (
    <div
      className={`flex items-center gap-4 px-4 py-2 rounded-lg group cursor-pointer hover:bg-white/5 transition-colors ${
        isActive ? "bg-white/10" : ""
      }`}
      onClick={handlePlay}
    >
      {/* Index / Play indicator */}
      <div className="w-8 flex items-center justify-center shrink-0">
        {isActive && isPlaying ? (
          <div className="flex items-end gap-0.5 h-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-0.5 bg-green-400 rounded-full animate-bounce"
                style={{ height: `${[12, 8, 14][i - 1]}px`, animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        ) : (
          <>
            <span className={`text-sm group-hover:hidden ${isActive ? "text-green-400" : "text-zinc-400"}`}>
              {index + 1}
            </span>
            <Play size={14} className="hidden group-hover:block text-white" fill="currentColor" />
          </>
        )}
      </div>

      {/* Cover */}
      <div className="relative w-10 h-10 shrink-0">
        <Image
          src={track.cover}
          alt={track.title}
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Title / Artist */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate ${isActive ? "text-green-400" : "text-white"}`}>
          {track.title}
        </p>
        <p className="text-xs text-zinc-400 truncate">{track.artist}</p>
      </div>

      {/* Album */}
      <p className="text-xs text-zinc-400 truncate hidden md:block w-40">{track.album}</p>

      {/* Duration */}
      <p className="text-xs text-zinc-400 w-10 text-right">{formatDuration(track.duration)}</p>
    </div>
  );
}
