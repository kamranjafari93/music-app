import axios, { AxiosResponse } from "axios";
import {
  Artist,
  SpotifyAlbumResponse,
  SpotifyAlbumsResponse,
  SpotifySearchResponse,
} from "@/types/spotify";

const SPOTIFY_BASE_URL: string = "https://api.spotify.com/v1/";

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
    `${SPOTIFY_BASE_URL}search`,
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
  const response = await axios.get(`${SPOTIFY_BASE_URL}artists/${artistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchArtistAlbums = async (
  artistId: string,
): Promise<SpotifyAlbumsResponse> => {
  const token = await fetchAccessToken();
  const response: AxiosResponse<SpotifyAlbumsResponse> = await axios.get(
    `${SPOTIFY_BASE_URL}artists/${artistId}/albums`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};

export const fetchAlbumById = async (
  albumId: string,
): Promise<SpotifyAlbumResponse> => {
  const token = await fetchAccessToken();
  const response: AxiosResponse<SpotifyAlbumResponse> = await axios.get(
    `${SPOTIFY_BASE_URL}albums/${albumId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};
