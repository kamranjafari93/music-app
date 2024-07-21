import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchSpotify } from "@/utils/spotify";

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

  return useQuery({
    queryKey: ["spotifySearch", debouncedQuery, type],
    queryFn: () => searchSpotify(debouncedQuery, type),
    enabled: !!debouncedQuery,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

export default useSpotifySearch;
