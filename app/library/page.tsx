"use client";

import { usePlaylistStore } from "@/lib/playlistStore";
import PlaylistCard from "@/components/PlaylistCard";
import { Music2 } from "lucide-react";

export default function LibraryPage() {
  const { playlists } = usePlaylistStore();

  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8">
      <h1 className="text-white text-xl sm:text-2xl font-bold mb-6">Your Library</h1>

      {playlists.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
            <Music2 size={28} className="text-zinc-400" />
          </div>
          <p className="text-zinc-400 text-sm">No playlists yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {playlists.map((pl) => (
            <PlaylistCard key={pl.id} playlist={pl} />
          ))}
        </div>
      )}
    </div>
  );
}
