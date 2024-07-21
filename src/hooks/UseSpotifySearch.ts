import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchSpotify } from "@/utils/spotify";

// Custom hook for debounced Spotify search
const useSpotifySearch = (query: string, type: string, delay: number = 500) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [query, delay]);

  // Use the useQuery hook to fetch data
  return useQuery({
    queryKey: ["spotifySearch", debouncedQuery, type],
    queryFn: () => searchSpotify(debouncedQuery, type),
    enabled: !!debouncedQuery,
  });
};

export default useSpotifySearch;
