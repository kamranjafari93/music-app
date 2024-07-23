"use client";

import Header from "@/components/Header/Header";
import dynamic from "next/dynamic";

const FavoriteArtistsList = dynamic(
  () => import("@/components/FavoriteArtistsList/FavoriteArtistsList"),
);

export default function Home() {
  return (
    <main>
      <Header />
      <FavoriteArtistsList />
    </main>
  );
}
