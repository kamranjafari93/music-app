import React from "react";

import ArtistComponent from "@/components/Artist/Artist";

const ArtistPage = ({ params }: { params: { artistId: string } }) => {
  return <ArtistComponent artistId={params.artistId} />;
};

export default ArtistPage;
