import { useQuery } from "@tanstack/react-query";
import { fetchArtistAlbums } from "@/utils/spotify";
import { Album, SpotifyAlbumsResponse } from "@/types/spotify";

interface useSpotifyGetArtistAlbumsResult {
  albums: Album[];
  error: Error | null;
  isLoading: boolean;
}

const useSpotifyGetArtistAlbums = (
  artistId: string,
): useSpotifyGetArtistAlbumsResult => {
  const response = useQuery<SpotifyAlbumsResponse, Error>({
    queryKey: ["spotifyGetArtistAlbums", artistId],
    queryFn: () => fetchArtistAlbums(artistId),
    staleTime: 1000 * 60 * 60 * 4, // 4 hours
    enabled: !!artistId,
  });

  if (response.error || !response.data) {
    return {
      albums: [],
      error: response.error,
      isLoading: response.isLoading,
    };
  }

  return {
    albums: response.data.items,
    error: null,
    isLoading: response.isLoading,
  };
};

export default useSpotifyGetArtistAlbums;
