import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchArtistAlbums } from "@/utils/spotify";
import { SpotifyAlbumsResponse } from "@/types/spotify";

const useSpotifyGetArtistAlbums = (
  artistId: string,
): UseQueryResult<SpotifyAlbumsResponse, Error> => {
  return useQuery<SpotifyAlbumsResponse, Error>({
    queryKey: ["spotifyGetArtistAlbums", artistId],
    queryFn: () => fetchArtistAlbums(artistId),
    staleTime: 1000 * 60 * 60 * 4, // 4 hours
    enabled: !!artistId,
  });
};

export default useSpotifyGetArtistAlbums;
