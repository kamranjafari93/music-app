export interface Artist {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  images: { width: number; height: number; url: string }[];
  popularity: number;
  type: string;
  uri: string | null;
}

export interface Album {
  id: string;
  name: string;
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  images: { width: number; height: number; url: string }[];
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface SpotifySearchResponse {
  artists: {
    items: Artist[];
  };
  albums: {
    items: Album[];
  };
}

export interface SpotifyAlbumsResponse {
  items: Album[];
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string | null;
  total: number;
}
