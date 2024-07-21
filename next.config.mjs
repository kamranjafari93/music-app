import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
  serverRuntimeConfig: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  },
  publicRuntimeConfig: {},
};

export default nextConfig;
