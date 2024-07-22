import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchAlbumById } from "@/utils/spotify";
import { Album } from "@/types/spotify";

const useSpotifyGetAlbum = (albumId: string): UseQueryResult<Album, Error> => {
  return useQuery<Album, Error>({
    queryKey: ["spotifyGetAlbum", albumId],
    queryFn: () => fetchAlbumById(albumId),
    staleTime: 1000 * 60 * 60, // 1 hour
    enabled: !!albumId,
  });
};

export default useSpotifyGetAlbum;
