"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Pause } from "lucide-react";
import { Playlist } from "@/lib/data";
import { usePlayerStore } from "@/lib/store";

interface PlaylistCardProps {
  playlist: Playlist;
}

export default function PlaylistCard({ playlist }: PlaylistCardProps) {
  const { currentTrack, isPlaying, setQueue, togglePlay } = usePlayerStore();
  const isActive = playlist.tracks.some((t) => t.id === currentTrack?.id);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isActive) {
      togglePlay();
    } else if (playlist.tracks.length > 0) {
      setQueue(playlist.tracks, 0);
    }
  };

  return (
    <Link href={`/playlist/${playlist.id}`} className="group bg-zinc-800/40 hover:bg-zinc-700/60 transition-colors rounded-lg p-4 flex flex-col gap-3">
      <div className="relative aspect-square rounded-md overflow-hidden shadow-lg">
        <Image
          src={playlist.cover}
          alt={playlist.name}
          fill
          className="object-cover"
        />
        <button
          onClick={handlePlayClick}
          className="absolute bottom-2 right-2 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 hover:scale-105 hover:bg-green-300"
        >
          {isActive && isPlaying ? (
            <Pause size={18} fill="black" className="text-black" />
          ) : (
            <Play size={18} fill="black" className="text-black ml-0.5" />
          )}
        </button>
      </div>
      <div>
        <p className="text-white font-semibold text-sm truncate">{playlist.name}</p>
        <p className="text-zinc-400 text-xs mt-0.5 line-clamp-2">{playlist.description}</p>
      </div>
    </Link>
  );
}
