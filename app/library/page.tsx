"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { usePlaylistStore } from "@/lib/playlistStore";
import PlaylistCard from "@/components/PlaylistCard";
import CreatePlaylistModal from "@/components/CreatePlaylistModal";

export default function LibraryPage() {
  const { playlists } = usePlaylistStore();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-white text-xl sm:text-2xl font-bold">Your Library</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-1.5 sm:gap-2 bg-green-400 hover:bg-green-300 text-black text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors"
        >
          <Plus size={16} />
          New Playlist
        </button>
      </div>

      {playlists.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
            <Plus size={28} className="text-zinc-400" />
          </div>
          <p className="text-white font-semibold text-lg mb-2">Create your first playlist</p>
          <p className="text-zinc-400 text-sm mb-6">It&apos;s easy, we&apos;ll help you</p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-white text-black text-sm font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-transform"
          >
            Create playlist
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {playlists.map((pl) => (
            <PlaylistCard key={pl.id} playlist={pl} />
          ))}
        </div>
      )}

      <CreatePlaylistModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
