import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchSpotify } from "@/utils/spotify";
import { Album, Artist, SpotifySearchResponse } from "@/types/spotify";

interface useSpotifySearchResult {
  artists: Artist[];
  albums: Album[];
  error: Error | null;
  isLoading: boolean;
}

const useSpotifySearch = (
  query: string,
  type: string,
  delay: number = 500,
): useSpotifySearchResult => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [query, delay]);

  const response = useQuery<SpotifySearchResponse, Error>({
    queryKey: ["spotifySearch", debouncedQuery, type],
    queryFn: () => searchSpotify(debouncedQuery, type),
    enabled: !!debouncedQuery,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (response.error || !response.data) {
    return {
      artists: [],
      albums: [],
      error: response.error,
      isLoading: response.isLoading,
    };
  }

  return {
    artists: response.data.artists.items,
    albums: response.data.albums.items,
    error: null,
    isLoading: response.isLoading,
  };
};

export default useSpotifySearch;
