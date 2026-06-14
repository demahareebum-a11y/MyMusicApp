"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Home, Search, Library, Music2, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { usePlaylistStore } from "@/lib/playlistStore";
import CreatePlaylistModal from "@/components/CreatePlaylistModal";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Search", href: "/search", icon: Search },
  { label: "Your Library", href: "/library", icon: Library },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { playlists, deletePlaylist } = usePlaylistStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm("Delete this playlist?")) {
      deletePlaylist(id);
      if (pathname === `/playlist/${id}`) router.push("/library");
    }
  };

  return (
    <>
      <aside className="hidden md:flex w-64 bg-black flex-col h-full shrink-0">
        {/* Logo */}
        <div className="p-6 pb-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://res.cloudinary.com/dnudhbjle/image/upload/v1781090654/mubbas-logo_grhyr4.png"
              alt="Mubba's Music Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-white font-bold text-lg leading-tight">
              Mubba&apos;s<br />Music
            </span>
          </Link>
        </div>

        {/* Main Nav */}
        <nav className="px-3 space-y-1">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-4 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-white bg-zinc-800"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              <Icon size={22} />
              {label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="mx-6 my-4 border-t border-zinc-800" />

        {/* Playlists Header */}
        <div className="px-6 flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            Playlists
          </span>
          <button
            onClick={() => setModalOpen(true)}
            className="text-zinc-400 hover:text-white transition-colors"
            title="Create playlist"
          >
            <Plus size={18} />
          </button>
        </div>

        {/* Playlist list */}
        <div className="flex-1 overflow-y-auto px-3 space-y-0.5">
          {playlists.length === 0 && (
            <p className="text-zinc-500 text-xs px-3 py-2">No playlists yet</p>
          )}
          {playlists.map((pl) => (
            <div
              key={pl.id}
              className="relative"
              onMouseEnter={() => setHoveredId(pl.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link
                href={`/playlist/${pl.id}`}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors pr-8 ${
                  pathname === `/playlist/${pl.id}`
                    ? "text-white bg-zinc-800"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                <Music2 size={16} className="shrink-0" />
                <span className="truncate">{pl.name}</span>
              </Link>
              {hoveredId === pl.id && (
                <button
                  onClick={(e) => handleDelete(e, pl.id)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-red-400 transition-colors p-1"
                  title="Delete playlist"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
      </aside>

      <CreatePlaylistModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
