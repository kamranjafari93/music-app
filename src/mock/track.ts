import { Track } from "@/types/spotify";
import { artists } from "@/mock/artist";

export const tracks: Track[] = [
  {
    artists: [
      {
        external_urls: {
          spotify: artists[0].external_urls.spotify,
        },
        href: artists[0].href,
        id: artists[0].id,
        name: artists[0].name,
        type: artists[0].type,
        uri: artists[0].uri,
      },
    ],
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
    ],
    disc_number: 1,
    duration_ms: 276437,
    explicit: false,
    external_urls: {
      spotify: "https://open.spotify.com/track/6HZf0s8L9KlxkolS0AvFcH",
    },
    href: "https://api.spotify.com/v1/tracks/6HZf0s8L9KlxkolS0AvFcH",
    id: "6HZf0s8L9KlxkolS0AvFcH",
    is_local: false,
    name: "End Of An Era - Extended",
    preview_url:
      "https://p.scdn.co/mp3-preview/24b1225663610325465e2ec4ff414c20aa3b6f15?cid=fba37e80d4a44b22a03b4d373c49f1b8",
    track_number: 1,
    type: "track",
    uri: "spotify:track:6HZf0s8L9KlxkolS0AvFcH",
  },
];
