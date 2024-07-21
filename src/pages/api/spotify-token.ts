import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

let cachedToken: string = "";
let tokenExpiryTime: number | null = null;

const getAccessToken = async (): Promise<string> => {
  const currentTime = Date.now();

  if (cachedToken && tokenExpiryTime && currentTime < tokenExpiryTime) {
    return cachedToken;
  }

  const credentials = `${serverRuntimeConfig.SPOTIFY_CLIENT_ID}:${serverRuntimeConfig.SPOTIFY_CLIENT_SECRET}`;
  const encodedCredentials = Buffer.from(credentials).toString("base64");
  const authorizationHeader = `Basic ${encodedCredentials}`;

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({ grant_type: "client_credentials" }),
    {
      headers: {
        Authorization: authorizationHeader,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  if (response.status < 200 || response.status >= 300) {
    throw new Error(
      `Failed to fetch access token, status code: ${response.status}`,
    );
  }

  cachedToken = response.data.access_token;
  tokenExpiryTime = currentTime + response.data.expires_in * 1000;

  return cachedToken;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = await getAccessToken();
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};
