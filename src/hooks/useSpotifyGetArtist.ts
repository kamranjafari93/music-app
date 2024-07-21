import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchArtistById } from "@/utils/spotify";
import { Artist } from "@/types/spotify";

const useSpotifyGetArtist = (
  artistId: string,
): UseQueryResult<Artist, Error> => {
  return useQuery<Artist, Error>({
    queryKey: ["spotifyGetArtist", artistId],
    queryFn: () => fetchArtistById(artistId),
    staleTime: 1000 * 60 * 60, // 1 hour
    enabled: !!artistId,
  });
};

export default useSpotifyGetArtist;
