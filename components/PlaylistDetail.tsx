"use client";

import { Play, Pause } from "lucide-react";
import { Playlist } from "@/lib/data";
import { usePlayerStore } from "@/lib/store";
import TrackRow from "@/components/TrackRow";

interface PlaylistDetailProps {
  playlist: Playlist;
}

export default function PlaylistDetail({ playlist }: PlaylistDetailProps) {
  const { currentTrack, isPlaying, setQueue, togglePlay } = usePlayerStore();
  const isActive = playlist.tracks.some((t) => t.id === currentTrack?.id);

  const handlePlayAll = () => {
    if (isActive) {
      togglePlay();
    } else {
      setQueue(playlist.tracks, 0);
    }
  };

  return (
    <div className="px-6 py-6">
      {/* Play button */}
      <div className="mb-6">
        <button
          onClick={handlePlayAll}
          className="w-14 h-14 bg-green-400 hover:bg-green-300 rounded-full flex items-center justify-center transition-all hover:scale-105 shadow-lg"
        >
          {isActive && isPlaying ? (
            <Pause size={24} fill="black" className="text-black" />
          ) : (
            <Play size={24} fill="black" className="text-black ml-1" />
          )}
        </button>
      </div>

      {/* Track list header */}
      <div className="flex items-center gap-4 px-4 pb-3 border-b border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider mb-2">
        <div className="w-8 text-center">#</div>
        <div className="w-10" />
        <div className="flex-1">Title</div>
        <div className="hidden md:block w-40">Album</div>
        <div className="w-10 text-right">Time</div>
      </div>

      <div className="space-y-1">
        {playlist.tracks.map((track, i) => (
          <TrackRow key={track.id} track={track} index={i} queue={playlist.tracks} />
        ))}
      </div>
    </div>
  );
}
