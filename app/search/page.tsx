"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { tracks as builtinTracks, categories } from "@/lib/data";
import { mySongs } from "@/lib/myMusic";
import TrackRow from "@/components/TrackRow";

const tracks = [...mySongs, ...builtinTracks];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = query.trim()
    ? tracks.filter(
        (t) =>
          t.title.toLowerCase().includes(query.toLowerCase()) ||
          t.artist.toLowerCase().includes(query.toLowerCase()) ||
          t.album.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="px-6 py-8">
      <h1 className="text-white text-2xl font-bold mb-6">Search</h1>

      {/* Search Input */}
      <div className="relative mb-8 max-w-lg">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-zinc-800 text-white rounded-full pl-10 pr-4 py-3 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>

      {/* Results */}
      {query.trim() ? (
        <section>
          <h2 className="text-white text-lg font-bold mb-4">
            {results.length > 0 ? `Results for "${query}"` : `No results for "${query}"`}
          </h2>
          {results.length > 0 && (
            <div className="space-y-1">
              <div className="flex items-center gap-4 px-4 pb-2 border-b border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider">
                <div className="w-8 text-center">#</div>
                <div className="w-10" />
                <div className="flex-1">Title</div>
                <div className="hidden md:block w-40">Album</div>
                <div className="w-10 text-right">Time</div>
              </div>
              {results.map((track, i) => (
                <TrackRow key={track.id} track={track} index={i} queue={results} />
              ))}
            </div>
          )}
        </section>
      ) : (
        <section>
          <h2 className="text-white text-lg font-bold mb-4">Browse Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="relative rounded-lg overflow-hidden h-28 cursor-pointer hover:scale-105 transition-transform"
                style={{ backgroundColor: cat.color }}
              >
                <div className="absolute inset-0 p-4">
                  <p className="text-white font-bold text-lg">{cat.name}</p>
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-80 overflow-hidden">
                  <Image
                    src={cat.cover}
                    alt={cat.name}
                    fill
                    className="object-cover rounded-tl-lg rotate-12 translate-x-3 translate-y-3"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
