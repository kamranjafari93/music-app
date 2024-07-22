import axios, { AxiosResponse } from "axios";
import {
  Album,
  Artist,
  SpotifyAlbumsResponse,
  SpotifySearchResponse,
} from "@/types/spotify";

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

export const fetchArtistById = async (artistId: string): Promise<Artist> => {
  const token = await fetchAccessToken();
  const response = await axios.get(
    `https://api.spotify.com/v1/artists/${artistId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};

export const fetchArtistAlbums = async (
  artistId: string,
): Promise<SpotifyAlbumsResponse> => {
  const token = await fetchAccessToken();
  const response: AxiosResponse<SpotifyAlbumsResponse> = await axios.get(
    `https://api.spotify.com/v1/artists/${artistId}/albums`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};

export const fetchAlbumById = async (albumId: string): Promise<Album> => {
  const token = await fetchAccessToken();
  const response: AxiosResponse<Album> = await axios.get(
    `https://api.spotify.com/v1/albums/${albumId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};
