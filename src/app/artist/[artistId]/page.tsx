"use client";

import useSpotifyGetArtist from "@/hooks/useSpotifyGetArtist";
import React from "react";
import Header from "@/components/Header/Header";

const ArtistPage = ({ params }: { params: { artistId: string } }) => {
  const { data, error, isLoading } = useSpotifyGetArtist(params.artistId);

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading artist data</div>;

  return (
    <main>
      <Header isMinimal={true} />
    </main>
  );
};

export default ArtistPage;
