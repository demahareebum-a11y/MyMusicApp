"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";
import { usePlaylistStore } from "@/lib/playlistStore";
import PlaylistDetail from "@/components/PlaylistDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PlaylistPage({ params }: PageProps) {
  const { id } = use(params);
  const { playlists } = usePlaylistStore();
  const playlist = playlists.find((p) => p.id === id);

  if (!playlist) return notFound();

  return (
    <div>
      {/* Hero Section */}
      <div className="px-4 sm:px-6 pt-6 sm:pt-10 pb-6 sm:pb-8 bg-gradient-to-b from-zinc-700 to-zinc-900 flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 shrink-0 shadow-2xl rounded-md overflow-hidden">
          <Image src={playlist.cover} alt={playlist.name} fill className="object-cover" />
        </div>
        <div className="text-center sm:text-left">
          <p className="text-white text-xs uppercase font-semibold tracking-widest mb-1">Playlist</p>
          <h1 className="text-white text-2xl sm:text-4xl font-black mb-2">{playlist.name}</h1>
          {playlist.description && (
            <p className="text-zinc-300 text-sm">{playlist.description}</p>
          )}
          <p className="text-zinc-400 text-xs mt-2">{playlist.tracks.length} songs</p>
        </div>
      </div>

      {/* Track List */}
      <PlaylistDetail playlist={playlist} />
    </div>
  );
}
