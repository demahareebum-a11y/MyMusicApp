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
  {
    id: "2",
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: 203,
    cover: "https://picsum.photos/seed/levitating/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: "3",
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    album: "F*CK LOVE 3",
    duration: 141,
    cover: "https://picsum.photos/seed/stay123/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: "4",
    title: "Peaches",
    artist: "Justin Bieber",
    album: "Justice",
    duration: 198,
    cover: "https://picsum.photos/seed/peaches/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: "5",
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    duration: 178,
    cover: "https://picsum.photos/seed/good4u/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    id: "6",
    title: "Montero",
    artist: "Lil Nas X",
    album: "MONTERO",
    duration: 137,
    cover: "https://picsum.photos/seed/montero/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    id: "7",
    title: "Industry Baby",
    artist: "Lil Nas X & Jack Harlow",
    album: "MONTERO",
    duration: 212,
    cover: "https://picsum.photos/seed/industry/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    id: "8",
    title: "Butter",
    artist: "BTS",
    album: "Butter",
    duration: 164,
    cover: "https://picsum.photos/seed/butter/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  },
  {
    id: "9",
    title: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    duration: 238,
    cover: "https://picsum.photos/seed/heatwaves/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  },
  {
    id: "10",
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    duration: 167,
    cover: "https://picsum.photos/seed/asitwas/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
  },
  {
    id: "11",
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    duration: 174,
    cover: "https://picsum.photos/seed/watermelon/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
  },
  {
    id: "12",
    title: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    duration: 215,
    cover: "https://picsum.photos/seed/saveyourtears/300/300",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
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
  {
    id: "pl2",
    name: "Chill Vibes",
    description: "Relax and unwind",
    cover: "https://picsum.photos/seed/chillvibes/300/300",
    tracks: [tracks[8], tracks[9], tracks[10], tracks[11]],
  },
  {
    id: "pl3",
    name: "Pop Hits",
    description: "Best pop tracks",
    cover: "https://picsum.photos/seed/pophits/300/300",
    tracks: [tracks[4], tracks[5], tracks[6], tracks[7]],
  },
  {
    id: "pl4",
    name: "My Favorites",
    description: "Songs I love",
    cover: "https://picsum.photos/seed/favorites/300/300",
    tracks: [tracks[0], tracks[4], tracks[8], tracks[9], tracks[11]],
  },
  {
    id: "pl5",
    name: "Workout Mix",
    description: "High energy tracks",
    cover: "https://picsum.photos/seed/workout/300/300",
    tracks: [tracks[5], tracks[6], tracks[2], tracks[3]],
  },
  {
    id: "pl6",
    name: "Late Night Drive",
    description: "Perfect for night drives",
    cover: "https://picsum.photos/seed/latenight/300/300",
    tracks: [tracks[1], tracks[7], tracks[10], tracks[11]],
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
