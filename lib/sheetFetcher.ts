import { Track, Playlist } from "./data";

const GOOGLE_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmfYCWoYBUanByA6uqOktJjxP8bqjltc6vTxox7IgG98PLLlt8YAGJMgMb8q9J7zGLYtVy89d3wzm1/pub?output=csv";

export async function fetchSongsFromSheet(): Promise<Track[]> {
  try {
    const response = await fetch(GOOGLE_SHEET_URL, { cache: "no-store" });
    const csvText = await response.text();
    const lines = csvText.split("\n").filter((line) => line.trim());

    // Skip header row
    const songs: Track[] = [];
    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      if (values.length >= 7 && values[0]) {
        songs.push({
          id: values[0].trim(),
          title: values[1].trim(),
          artist: values[2].trim(),
          album: values[3].trim(),
          duration: parseInt(values[4].trim(), 10) || 0,
          cover: values[5].trim(),
          audioUrl: values[6].trim(),
        });
      }
    }
    return songs;
  } catch (error) {
    console.error("Failed to fetch songs from Google Sheet:", error);
    return [];
  }
}

export function fetchPlaylistsFromSheet(allSongs: Track[]): Playlist[] {
  // Auto-generate playlists based on unique albums
  const albums = new Map<string, Track[]>();

  allSongs.forEach((song) => {
    if (!albums.has(song.album)) {
      albums.set(song.album, []);
    }
    albums.get(song.album)!.push(song);
  });

  const playlists: Playlist[] = [];

  albums.forEach((tracks, albumName) => {
    playlists.push({
      id: `album-${albumName.replace(/\s+/g, "-").toLowerCase()}`,
      name: albumName,
      description: `${tracks.length} songs`,
      cover: tracks[0]?.cover || "",
      tracks,
    });
  });

  return playlists;
}

function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current);
  return values;
}
