"use client";
import { create } from "zustand";
import { Track } from "./data";

interface PlayerState {
  currentTrack: Track | null;
  queue: Track[];
  isPlaying: boolean;
  volume: number;
  progress: number; // 0-100
  duration: number;
  shuffle: boolean;
  repeat: "off" | "all" | "one";
  setCurrentTrack: (track: Track) => void;
  setQueue: (tracks: Track[], startIndex?: number) => void;
  togglePlay: () => void;
  setIsPlaying: (v: boolean) => void;
  setVolume: (v: number) => void;
  setProgress: (v: number) => void;
  setDuration: (v: number) => void;
  nextTrack: () => void;
  prevTrack: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  queue: [],
  isPlaying: false,
  volume: 0.7,
  progress: 0,
  duration: 0,
  shuffle: false,
  repeat: "off",

  setCurrentTrack: (track) => set({ currentTrack: track, progress: 0 }),

  setQueue: (tracks, startIndex = 0) => {
    set({ queue: tracks, currentTrack: tracks[startIndex], progress: 0, isPlaying: true });
  },

  togglePlay: () => set((s) => ({ isPlaying: !s.isPlaying })),
  setIsPlaying: (v) => set({ isPlaying: v }),
  setVolume: (v) => set({ volume: v }),
  setProgress: (v) => set({ progress: v }),
  setDuration: (v) => set({ duration: v }),

  nextTrack: () => {
    const { queue, currentTrack, shuffle, repeat } = get();
    if (!queue.length || !currentTrack) return;
    const idx = queue.findIndex((t) => t.id === currentTrack.id);
    if (repeat === "one") {
      set({ progress: 0, isPlaying: true });
      return;
    }
    let nextIdx: number;
    if (shuffle) {
      nextIdx = Math.floor(Math.random() * queue.length);
    } else {
      nextIdx = (idx + 1) % queue.length;
    }
    set({ currentTrack: queue[nextIdx], progress: 0, isPlaying: true });
  },

  prevTrack: () => {
    const { queue, currentTrack, progress } = get();
    if (!queue.length || !currentTrack) return;
    if (progress > 10) {
      set({ progress: 0 });
      return;
    }
    const idx = queue.findIndex((t) => t.id === currentTrack.id);
    const prevIdx = (idx - 1 + queue.length) % queue.length;
    set({ currentTrack: queue[prevIdx], progress: 0, isPlaying: true });
  },

  toggleShuffle: () => set((s) => ({ shuffle: !s.shuffle })),

  toggleRepeat: () =>
    set((s) => ({
      repeat: s.repeat === "off" ? "all" : s.repeat === "all" ? "one" : "off",
    })),
}));
