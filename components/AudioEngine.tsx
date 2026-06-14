"use client";

import { useEffect, useRef } from "react";
import { usePlayerStore } from "@/lib/store";

export default function AudioEngine() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const {
    currentTrack,
    isPlaying,
    volume,
    progress,
    setProgress,
    setDuration,
    setIsPlaying,
    nextTrack,
    repeat,
  } = usePlayerStore();

  // Create audio element once
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.crossOrigin = "anonymous";
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  // Load new track
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;
    audioRef.current.src = currentTrack.audioUrl;
    audioRef.current.load();
    if (isPlaying) audioRef.current.play().catch(() => {});
  }, [currentTrack?.id]);

  // Play/pause
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Volume
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  // Sync progress from store (seeking)
  const lastProgress = useRef(0);
  useEffect(() => {
    if (!audioRef.current) return;
    const diff = Math.abs(progress - lastProgress.current);
    // Only seek if user-triggered (large diff)
    if (diff > 2) {
      audioRef.current.currentTime = (progress / 100) * (audioRef.current.duration || 1);
    }
  }, [progress]);

  // Time update -> store
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
      lastProgress.current = pct;
      setProgress(pct);
    };

    const onDurationChange = () => setDuration(audio.duration || 0);

    const onEnded = () => {
      if (repeat === "one") {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        nextTrack();
      }
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("durationchange", onDurationChange);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("durationchange", onDurationChange);
      audio.removeEventListener("ended", onEnded);
    };
  }, [repeat]);

  return null;
}
