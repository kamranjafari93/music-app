import { Album } from "@/types/spotify";
import { artists } from "@/mock/artist";
import { tracks } from "@/mock/track";

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
    tracks: tracks,
  },
];
