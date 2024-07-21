import axios, { AxiosResponse } from "axios";
import { SpotifySearchResponse } from "@/types/spotify";

export const fetchAccessToken = async (): Promise<string> => {
  const response = await axios.get("/api/spotify-token");
  return response.data.token;
};
export const searchSpotify = async (
  query: string,
  type: string,
): Promise<SpotifySearchResponse> => {
  const token = await fetchAccessToken();
  const response: AxiosResponse<SpotifySearchResponse> = await axios.get(
    `https://api.spotify.com/v1/search`,
    {
      params: { q: query, type },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};
