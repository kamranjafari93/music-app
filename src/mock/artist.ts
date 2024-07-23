import { Artist } from "@/types/spotify";

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
