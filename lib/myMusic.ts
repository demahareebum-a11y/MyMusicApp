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
      title: "Surat Al-Fatiha",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099661/001_-_Surah_Al-Fatiha_qrmukj.mp3",
    },
    {
      id: "idris-03",
      title: "Surat Aal-E-Imran",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099792/003_-_Surah_Aal-E-Imran_nismyp.mp3",
    },
    {
      id: "idris-04",
      title: "Surat An-Nisa",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099791/004_-_Surah_An-Nisa_qetaeb.mp3",
    },
    {
      id: "idris-05",
      title: "Surat Al-Maeda",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099785/005_-_Surah_Al-Maeda_zmdlob.mp3",
    },
    {
      id: "idris-06",
      title: "Surat Al-Anaam",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099788/006_-_Surah_Al-Anaam_jy2cya.mp3",
    },
    {
      id: "idris-07",
      title: "Surat Al-Araf",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099791/007_-_Surah_Al-Araf_lrlxo8.mp3",
    },
    {
      id: "idris-08",
      title: "Surat Al-Anfal",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099769/008_-_Surah_Al-Anfal_fsqp7q.mp3",
    },
    {
      id: "idris-09",
      title: "Surat At_Tawbah",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099787/009_-_Surah_at_Tawbah_kfiaxi.mp3",
    },
    {
      id: "idris-10",
      title: "Surat Yunus",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099773/010_-_Surah_Yunus_wxjagd.mp3",
    },
    {
      id: "idris-11",
      title: "Surat Hud",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099773/011_-_Surat_Hud_yrzsxk.mp3",
    },
    {
      id: "idris-12",
      title: "Surat Yusuf",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099767/012_-_Surat_Yusuf_1_hj8grq.mp3",
    },
    {
      id: "idris-13",
      title: "Surat Ar-Rad",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099756/013_-_Surat_Ar-Rad_1_fui3jk.mp3",
    },
    {
      id: "idris-14",
      title: "Surat Ibrahim",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099757/014_-_Surat_Ibrahim_1_ceb8qc.mp3",
    },
    {
      id: "idris-15",
      title: "Surat Al-Hijr",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099719/015_-_Surat_Al-Hijr_vrvepe.mp3",
    },
    {
      id: "idris-16",
      title: "Surat An-Nahl",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099780/016_-_Surat_An-Nahl_yati00.mp3",
    },
    {
      id: "idris-17",
      title: "Surat Al-Isra",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099775/017_-_Surat_Al-Isra_gx1d2o.mp3",
    },
    {
      id: "idris-18",
      title: "Surat Al-Kahf",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099779/018_-_Surat_Al-Kahf_z9esjp.mp3",
    },
    {
      id: "idris-19",
      title: "Surat Maryam",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099758/019_-_Surat_Maryam_jldziq.mp3",
    },
    {
      id: "idris-20",
      title: "Surat Ta-Ha",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099766/020_-_Surat_Ta-Ha_1_hsvcdf.mp3",
    },
    {
      id: "idris-21",
      title: "Surat Al-Anbiya",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099768/021_-_Surat_Al-Anbiya_zkh5bq.mp3",
    },
    {
      id: "idris-22",
      title: "Surat Al-Hajj",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099763/022_-_Surat_Al-Hajj_gnl1it.mp3",
    },
    {
      id: "idris-23",
      title: "Surat Al-Mumenoon",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099762/023_-_Surat_Al-Mumenoon_qippak.mp3",
    },
    {
      id: "idris-24",
      title: "Surat An-Noor",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099770/024_-_Surat_An-Noor_gnhjt9.mp3",
    },
    {
      id: "idris-25",
      title: "Surat Al-Furqan",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099762/025_-_Surat_Al-Furqan_ipzxkt.mp3",
    },
    {
      id: "idris-26",
      title: "Surat Ash-Shuara",
      artist: "Idris Abkar",
      album: "Quran Recitations",
      duration: 44,   // 3 min 30 sec = 210
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      audioUrl: "https://res.cloudinary.com/dnudhbjle/video/upload/v1781099763/026_-_Surat_Ash-Shuara_wv1fiy.mp3",
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
    {
      id: "idris-pl01",
      name: "Idris Abkar Quran",
      description: "Full Quran Recitation by Idris Abkar",
      cover: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781086631/idrees-abkar-banner_kmq9ly.jpg",
      trackIds: ["idris-01", "idris-03", "idris-04", "idris-05", "idris-06", "idris-07", "idris-08", "idris-09"],  // mix of your songs + built-in
    },
];
