"use client";

import Header from "@/components/Header/Header";
import FavoriteArtistsList from "@/components/FavoriteArtistsList/FavoriteArtistsList";

export default function Home() {
  return (
    <main>
      <Header />
      <FavoriteArtistsList />
    </main>
  );
}
