"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Track, Playlist, playlists as defaultPlaylists, tracks as builtinTracks } from "./data";
import { mySongs, myPlaylists } from "./myMusic";
import { fetchSongsFromSheet, fetchPlaylistsFromSheet } from "./sheetFetcher";

// Merge built-in tracks + your cloud songs into one lookup map
const allTracks: Record<string, Track> = {};
[...builtinTracks, ...mySongs].forEach((t) => { allTracks[t.id] = t; });

// Convert myPlaylists (trackIds) → full Playlist objects
const myFullPlaylists: Playlist[] = myPlaylists.map((p) => ({
  id: p.id,
  name: p.name,
  description: p.description,
  cover: p.cover,
  tracks: p.trackIds.map((id) => allTracks[id]).filter((t): t is Track => t !== undefined),
}));

// Merge default + your playlists (your playlists come first)
const initialPlaylists: Playlist[] = [...myFullPlaylists, ...defaultPlaylists];

// Store Google Sheet data (fetched at runtime)
let sheetSongs: Track[] = [];
let sheetPlaylists: Playlist[] = [];

// Initialize from Google Sheet
if (typeof window !== "undefined") {
  fetchSongsFromSheet().then(async (songs) => {
    sheetSongs = songs;
    sheetPlaylists = await fetchPlaylistsFromSheet(songs);
    // Update store with new data
    const merged = buildAllTracks();
    usePlaylistStore.setState({ 
      allTracks: merged, 
      playlists: buildAllPlaylists() 
    });
  });
}

function buildAllTracks(): Record<string, Track> {
  const merged: Record<string, Track> = {};
  [...builtinTracks, ...mySongs, ...sheetSongs].forEach((t) => {
    merged[t.id] = t;
  });
  return merged;
}

function buildAllPlaylists(): Playlist[] {
  return [...myFullPlaylists, ...sheetPlaylists];
}

interface PlaylistStore {
  playlists: Playlist[];
  allTracks: Record<string, Track>;
  createPlaylist: (name: string, description?: string) => Playlist;
  deletePlaylist: (id: string) => void;
  renamePlaylist: (id: string, name: string) => void;
}

export const usePlaylistStore = create<PlaylistStore>()(
  persist(
    (set, get) => ({
      playlists: initialPlaylists,
      allTracks,

      createPlaylist: (name: string, description: string = "") => {
        const newPlaylist: Playlist = {
          id: `pl-${Date.now()}`,
          name,
          description,
          cover: `https://picsum.photos/seed/${Date.now()}/300/300`,
          tracks: [],
        };
        set((s: { playlists: Playlist[] }) => ({ playlists: [...s.playlists, newPlaylist] }));
        return newPlaylist;
      },

      deletePlaylist: (id: string) => {
        set((s: { playlists: Playlist[] }) => ({ playlists: s.playlists.filter((p: Playlist) => p.id !== id) }));
      },

      renamePlaylist: (id: string, name: string) => {
        set((s: { playlists: Playlist[] }) => ({
          playlists: s.playlists.map((p: Playlist) => (p.id === id ? { ...p, name } : p)),
        }));
      },
    }),
    {
      name: "mubba-playlists",
      // Only persist user-created/modified playlists, NOT the initial ones
      // so that adding songs to myMusic.ts always takes effect
      merge: (persisted: any, current: any) => {
        if (!persisted || !persisted.state) return current;
        const userPlaylists = persisted.state.playlists.filter(
          (p: Playlist) => !initialPlaylists.find((ip) => ip.id === p.id)
        );
        // Re-resolve tracks from fresh allTracks to avoid stale undefined entries
        const mergedPlaylists = [...initialPlaylists, ...userPlaylists].map((p: Playlist) => ({
          ...p,
          tracks: p.tracks.filter((t: Track) => t !== undefined && t.id !== undefined),
        }));
        return {
          ...current,
          playlists: mergedPlaylists,
        };
      },
    }
  )
);
