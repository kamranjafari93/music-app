import { useQuery } from "@tanstack/react-query";
import { fetchAlbumById } from "@/utils/spotify";
import { Album } from "@/types/spotify";

interface useSpotifyGetAlbumResult {
  album: Album | null;
  error: Error | null;
  isLoading: boolean;
}

const useSpotifyGetAlbum = (albumId: string): useSpotifyGetAlbumResult => {
  const response = useQuery<Album, Error>({
    queryKey: ["spotifyGetAlbum", albumId],
    queryFn: () => fetchAlbumById(albumId),
    staleTime: 1000 * 60 * 60, // 1 hour
    enabled: !!albumId,
  });

  if (response.error || !response.data) {
    return {
      album: null,
      error: response.error,
      isLoading: response.isLoading,
    };
  }

  return {
    album: response.data,
    error: null,
    isLoading: response.isLoading,
  };
};

export default useSpotifyGetAlbum;
