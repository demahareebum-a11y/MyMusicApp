"use client";

import { Track } from "@/lib/data";
import TrackRow from "@/components/TrackRow";

interface HomeTrackListProps {
  tracks: Track[];
}

export default function HomeTrackList({ tracks }: HomeTrackListProps) {
  return (
    <div className="space-y-1">
      {/* Header */}
      <div className="flex items-center gap-4 px-4 pb-2 border-b border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider">
        <div className="w-8 text-center">#</div>
        <div className="w-10" />
        <div className="flex-1">Title</div>
        <div className="hidden md:block w-40">Album</div>
        <div className="w-10 text-right">Time</div>
      </div>
      {tracks.map((track, i) => (
        <TrackRow key={track.id} track={track} index={i} queue={tracks} />
      ))}
    </div>
  );
}
