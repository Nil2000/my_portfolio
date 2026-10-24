export interface LastPlayed {
  title: string;
  artist: string;
  albumArt: string | null;
  url: string;
}

type SpotifyImage = { url?: string };
type SpotifyTrack = {
  name?: string;
  artists?: { name?: string }[];
  album?: { images?: SpotifyImage[] };
  external_urls?: { spotify?: string };
};

function credentials() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) return null;
  return { clientId, clientSecret, refreshToken };
}

function albumArtUrl(images: SpotifyImage[] | undefined) {
  // Spotify lists largest first; the last url is the thumbnail.
  const url = images?.map((image) => image.url).filter(Boolean).at(-1);
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" || parsed.hostname !== "i.scdn.co") return null;
    return url;
  } catch {
    return null;
  }
}

export function toLastPlayed(payload: unknown): LastPlayed | null {
  const track = (payload as { items?: { track?: SpotifyTrack }[] } | null)?.items?.[0]
    ?.track;
  const title = track?.name;
  const url = track?.external_urls?.spotify;
  const artist = (track?.artists ?? [])
    .map((artist) => artist.name)
    .filter((name): name is string => Boolean(name))
    .join(", ");
  if (!title || !artist || !url) return null;
  return { title, artist, albumArt: albumArtUrl(track?.album?.images), url };
}

async function getAccessToken(auth: NonNullable<ReturnType<typeof credentials>>) {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${auth.clientId}:${auth.clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: auth.refreshToken,
    }),
    cache: "no-store",
  });
  if (!response.ok) return null;
  const token = (await response.json()) as { access_token?: string };
  return token.access_token ?? null;
}

export async function getLastPlayed(): Promise<LastPlayed | null> {
  const auth = credentials();
  if (!auth) return null;

  try {
    const accessToken = await getAccessToken(auth);
    if (!accessToken) return null;

    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        next: { revalidate: 60 },
      },
    );
    if (!response.ok) return null;
    return toLastPlayed(await response.json());
  } catch {
    return null;
  }
}
