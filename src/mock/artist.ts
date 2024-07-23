import { Album, Artist } from "@/types/spotify";

export const artists: Artist[] = [
  {
    id: "6M2wZ9GZgrQXHCFfjv46we",
    name: "Dua Lipa",
    popularity: 88,
    type: "artist",
    uri: "spotify:artist:6M2wZ9GZgrQXHCFfjv46we",
    external_urls: {
      spotify: "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we",
    },
    followers: { href: null, total: 44029402 },
    genres: ["dance pop", "pop", "uk pop"],
    href: "https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab6761610000e5eb0c68f6c95232e716f0abee8d",
        width: 640,
      },
      {
        height: 320,
        url: "https://i.scdn.co/image/ab676161000051740c68f6c95232e716f0abee8d",
        width: 320,
      },
      {
        height: 160,
        url: "https://i.scdn.co/image/ab6761610000f1780c68f6c95232e716f0abee8d",
        width: 160,
      },
    ],
  },
];

export const albums: Album[] = [
  {
    album_type: "album",
    artists: artists,
    available_markets: [
      "AR",
      "AU",
      "BE",
      "BO",
      "BR",
      "BG",
      "CA",
      "CL",
      "CO",
      "CR",
      "CY",
      "CZ",
    ],
    external_urls: {
      spotify: "https://open.spotify.com/album/0XY0qeZ7czMgtb340QJRxK",
    },
    href: "https://api.spotify.com/v1/albums/0XY0qeZ7czMgtb340QJRxK",
    id: "0XY0qeZ7czMgtb340QJRxK",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2735f530395ba026f49363c6d11",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e025f530395ba026f49363c6d11",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048515f530395ba026f49363c6d11",
        width: 64,
      },
    ],
    name: "Radical Optimism (Extended Versions)",
    release_date: "2024-06-28",
    release_date_precision: "day",
    total_tracks: 11,
    type: "album",
    uri: "spotify:album:0XY0qeZ7czMgtb340QJRxK",
  },
];
