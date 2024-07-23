import { useQuery } from "@tanstack/react-query";
import { fetchAlbumById } from "@/utils/spotify";
import { Album, SpotifyAlbumResponse, Track } from "@/types/spotify";

interface useSpotifyGetAlbumResult {
  album: Album | null;
  error: Error | null;
  isLoading: boolean;
}

const useSpotifyGetAlbum = (albumId: string): useSpotifyGetAlbumResult => {
  const response = useQuery<SpotifyAlbumResponse, Error>({
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

  const tracks: Track[] = response.data.tracks?.items ?? [];
  const album = { ...response.data, tracks };

  return {
    album: album,
    error: null,
    isLoading: response.isLoading,
  };
};

export default useSpotifyGetAlbum;
