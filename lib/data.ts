export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number; // seconds
  cover: string;
  audioUrl: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  cover: string;
  tracks: Track[];
}

export const tracks: Track[] = [
  {
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: 200,
    cover: "https://picsum.photos/seed/blinding/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
];

export const playlists: Playlist[] = [
  {
    id: "pl1",
    name: "Today's Top Hits",
    description: "The biggest songs right now",
    cover: "https://picsum.photos/seed/tophits/300/300",
    tracks: [tracks[0], tracks[1], tracks[2], tracks[3]],
  },

];

export const categories = [
  { id: "c1", name: "Pop", color: "#E91E63", cover: "https://picsum.photos/seed/pop/300/300" },
  { id: "c2", name: "Hip-Hop", color: "#9C27B0", cover: "https://picsum.photos/seed/hiphop/300/300" },
  { id: "c3", name: "Rock", color: "#F44336", cover: "https://picsum.photos/seed/rock/300/300" },
  { id: "c4", name: "Electronic", color: "#2196F3", cover: "https://picsum.photos/seed/electronic/300/300" },
  { id: "c5", name: "R&B", color: "#FF9800", cover: "https://picsum.photos/seed/rnb/300/300" },
  { id: "c6", name: "Latin", color: "#4CAF50", cover: "https://picsum.photos/seed/latin/300/300" },
  { id: "c7", name: "K-Pop", color: "#00BCD4", cover: "https://picsum.photos/seed/kpop/300/300" },
  { id: "c8", name: "Jazz", color: "#795548", cover: "https://picsum.photos/seed/jazz/300/300" },
];

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
