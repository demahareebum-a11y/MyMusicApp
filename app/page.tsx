"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus } from "lucide-react";
import { tracks as builtinTracks } from "@/lib/data";
import { mySongs } from "@/lib/myMusic";
import { usePlaylistStore } from "@/lib/playlistStore";
import PlaylistCard from "@/components/PlaylistCard";
import HomeTrackList from "@/components/HomeTrackList";
import CreatePlaylistModal from "@/components/CreatePlaylistModal";

const allTracks = [...mySongs, ...builtinTracks];

export default function HomePage() {
  const { playlists } = usePlaylistStore();
  const [modalOpen, setModalOpen] = useState(false);
  const featured = playlists.slice(0, 6);
  const recentTracks = allTracks.slice(0, 8);

  return (
    <div className="px-6 py-8 pb-6">
      {/* Hero Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Image
            src="https://res.cloudinary.com/dnudhbjle/image/upload/v1781090654/mubbas-logo_grhyr4.png"
            alt="Mubba's Music"
            width={56}
            height={56}
            className="rounded-full"
          />
          <div>
            <p className="text-zinc-400 text-sm">Good evening</p>
            <h1 className="text-white text-3xl font-bold">Mubba&apos;s Music</h1>
          </div>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 bg-green-400 hover:bg-green-300 text-black text-sm font-bold px-4 py-2 rounded-full transition-colors"
        >
          <Plus size={16} />
          New Playlist
        </button>
      </div>

      {/* Featured Playlists */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-xl font-bold">Featured Playlists</h2>
        </div>
        {featured.length === 0 ? (
          <p className="text-zinc-500 text-sm">No playlists yet. Create one!</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {featured.map((pl) => (
              <PlaylistCard key={pl.id} playlist={pl} />
            ))}
          </div>
        )}
      </section>

      {/* Recent Tracks */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-xl font-bold">Popular Songs</h2>
        </div>
        <HomeTrackList tracks={recentTracks} />
      </section>

      <CreatePlaylistModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
