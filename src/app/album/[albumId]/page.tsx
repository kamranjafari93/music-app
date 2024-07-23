import React from "react";

import AlbumComponent from "@/components/Album/Album";

const AlbumPage = ({ params }: { params: { albumId: string } }) => {
  return <AlbumComponent albumId={params.albumId} />;
};

export default AlbumPage;
