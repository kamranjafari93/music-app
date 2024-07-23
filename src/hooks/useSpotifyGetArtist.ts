import { useQuery } from "@tanstack/react-query";
import { fetchArtistById } from "@/utils/spotify";
import { Artist } from "@/types/spotify";

interface useSpotifyGetArtistResult {
  artist: Artist | null;
  error: Error | null;
  isLoading: boolean;
}
const useSpotifyGetArtist = (artistId: string): useSpotifyGetArtistResult => {
  const response = useQuery<Artist, Error>({
    queryKey: ["spotifyGetArtist", artistId],
    queryFn: () => fetchArtistById(artistId),
    staleTime: 1000 * 60 * 60, // 1 hour
    enabled: !!artistId,
  });

  if (response.error || !response.data) {
    return {
      artist: null,
      error: response.error,
      isLoading: response.isLoading,
    };
  }

  return {
    artist: response.data,
    error: null,
    isLoading: response.isLoading,
  };
};

export default useSpotifyGetArtist;
