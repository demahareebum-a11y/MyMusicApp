import { notFound } from "next/navigation";
import Image from "next/image";
import { playlists } from "@/lib/data";
import PlaylistDetail from "@/components/PlaylistDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PlaylistPage({ params }: PageProps) {
  const { id } = await params;
  const playlist = playlists.find((p) => p.id === id);

  if (!playlist) return notFound();

  return (
    <div>
      {/* Hero Section */}
      <div className="px-6 pt-10 pb-8 bg-gradient-to-b from-zinc-700 to-zinc-900 flex items-end gap-6">
        <div className="relative w-48 h-48 shrink-0 shadow-2xl rounded-md overflow-hidden">
          <Image src={playlist.cover} alt={playlist.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-white text-xs uppercase font-semibold tracking-widest mb-1">Playlist</p>
          <h1 className="text-white text-4xl font-black mb-2">{playlist.name}</h1>
          <p className="text-zinc-300 text-sm">{playlist.description}</p>
          <p className="text-zinc-400 text-xs mt-2">{playlist.tracks.length} songs</p>
        </div>
      </div>

      {/* Track List */}
      <PlaylistDetail playlist={playlist} />
    </div>
  );
}

export function generateStaticParams() {
  return playlists.map((p) => ({ id: p.id }));
}
