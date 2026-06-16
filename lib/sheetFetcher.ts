import { Track, Playlist } from "./data";

const GOOGLE_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmfYCWoYBUanByA6uqOktJjxP8bqjltc6vTxox7IgG98PLLlt8YAGJMgMb8q9J7zGLYtVy89d3wzm1/pub?output=csv";

const GOOGLE_SHEET_PLAYLIST_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmfYCWoYBUanByA6uqOktJjxP8bqjltc6vTxox7IgG98PLLlt8YAGJMgMb8q9J7zGLYtVy89d3wzm1/pub?gid=144435233&single=true&output=csv";

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

export async function fetchPlaylistsFromSheet(allSongs: Track[]): Promise<Playlist[]> {
  try {
    const response = await fetch(GOOGLE_SHEET_PLAYLIST_URL, { cache: "no-store" });
    const csvText = await response.text();
    const lines = csvText.split("\n").filter((line) => line.trim());

    // Create a lookup map for all songs
    const songMap = new Map<string, Track>();
    allSongs.forEach((song) => songMap.set(song.id, song));

    // Skip header row
    const playlists: Playlist[] = [];
    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      if (values.length >= 5 && values[0]) {
        const trackIds = values[4].split(",").map((id) => id.trim()).filter(Boolean);
        const tracks = trackIds
          .map((id) => songMap.get(id))
          .filter((t): t is Track => t !== undefined);

        playlists.push({
          id: values[0].trim(),
          name: values[1].trim(),
          description: values[2].trim(),
          cover: values[3].trim(),
          tracks,
        });
      }
    }
    return playlists;
  } catch (error) {
    console.error("Failed to fetch playlists from Google Sheet:", error);
    return [];
  }
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
