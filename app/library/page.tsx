import { playlists } from "@/lib/data";
import PlaylistCard from "@/components/PlaylistCard";

export default function LibraryPage() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-white text-2xl font-bold mb-6">Your Library</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {playlists.map((pl) => (
          <PlaylistCard key={pl.id} playlist={pl} />
        ))}
      </div>
    </div>
  );
}
