// ============================================================
//  MY MUSIC LIBRARY - Edit this file to add your own songs
// ============================================================
//
//  HOW TO ADD YOUR OWN SONGS:
//  1. Find the "MY SONGS" section below
//  2. Copy one of the existing song blocks and paste it
//  3. Fill in your song details:
//     - id:       Any unique string, e.g. "my-song-1"
//     - title:    Song title
//     - artist:   Artist name
//     - album:    Album name
//     - duration: Length in SECONDS (e.g. 3:45 = 225)
//     - cover:    URL to cover image (Cloudinary, Google Drive, etc.)
//     - audioUrl: Direct URL to your MP3/audio file
//
//  SUPPORTED AUDIO SOURCES:
//  - Cloudinary:    https://res.cloudinary.com/YOUR_CLOUD/video/upload/YOUR_FILE.mp3
//  - Dropbox:       https://dl.dropboxusercontent.com/s/XXXXX/song.mp3
//  - Google Drive:  https://drive.google.com/uc?export=download&id=FILE_ID
//  - Direct URL:    Any publicly accessible .mp3 / .ogg / .wav link
//
//  HOW TO ADD YOUR OWN PLAYLISTS:
//  1. Find the "MY PLAYLISTS" section below
//  2. Copy a playlist block and fill it in
//  3. In "trackIds", list the "id" values of songs you want in it
//
// ============================================================

import { Track } from "./data";

// ============================================================
//  MY SONGS
//  Add or edit entries here. Each song needs a unique "id".
// ============================================================

export const mySongs: Track[] = [
  // ── EXAMPLE 1: Cloudinary-hosted MP3 ─────────────────────
  // {
  //   id: "my-1",
  //   title: "My Song Title",
  //   artist: "Artist Name",
  //   album: "Album Name",
  //   duration: 210,   // 3 min 30 sec = 210
  //   cover: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/YOUR_COVER.jpg",
  //   audioUrl: "https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/YOUR_SONG.mp3",
  // },

  // ── EXAMPLE 2: Dropbox-hosted MP3 ────────────────────────
  // {
  //   id: "my-2",
  //   title: "Another Song",
  //   artist: "Another Artist",
  //   album: "Some Album",
  //   duration: 185,
  //   cover: "https://picsum.photos/seed/mysong2/300/300",  // placeholder cover
  //   audioUrl: "https://dl.dropboxusercontent.com/s/XXXXXXXXXX/mysong.mp3",
  // },

  // ── ADD YOUR REAL SONGS BELOW ─────────────────────────────
  // {
  //   id: "my-3",
  //   title: "",
  //   artist: "",
  //   album: "",
  //   duration: 0,
  //   cover: "",
  //   audioUrl: "",
  // },
    {
      id: "idris-01",
      title: "Surah Al-Fatiha",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099661/001_-_Surah_Al-Fatiha_qrmukj.mp3",
    },
];

// ============================================================
//  MY PLAYLISTS
//  Add your custom playlists here.
//  "trackIds" must match the "id" values from mySongs above
//  OR any id from the built-in tracks in data.ts ("1"–"12").
// ============================================================

export const myPlaylists: Array<{
  id: string;
  name: string;
  description: string;
  cover: string;
  trackIds: string[];
}> = [
  // ── EXAMPLE PLAYLIST ─────────────────────────────────────
  // {
  //   id: "my-pl-1",
  //   name: "My Cloud Mix",
  //   description: "My personal favorites from the cloud",
  //   cover: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/YOUR_COVER.jpg",
  //   trackIds: ["my-1", "my-2", "1", "3"],  // mix of your songs + built-in
  // },

  // ── ADD YOUR PLAYLISTS BELOW ──────────────────────────────
];
