"use client";

import React, { useMemo } from "react";
import Header from "@/components/Header/Header";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { Track } from "@/types/spotify";
import useSpotifyGetAlbum from "@/hooks/useSpotifyGetAlbum";
import NotFound from "@/components/NotFound/NotFound";
import CustomError from "@/components/Error/CustomError";
import { BulletList } from "react-content-loader";

interface AlbumComponentProps {
  albumId: string;
}
const AlbumComponent = ({ albumId }: AlbumComponentProps) => {
  const { album, error, isLoading } = useSpotifyGetAlbum(albumId);

  const tracks: Track[] = useMemo(() => {
    if (error || isLoading || !album || !album.tracks) return [];

    return album.tracks;
  }, [album, error, isLoading]);

  const albumDescription: string = useMemo(() => {
    if (!album) return "";

    return `Album ${album.name} was released on ${album.release_date}. It features a total of ${album.total_tracks} tracks.`;
  }, [album]);

  if (error) {
    console.error(error);
    // Send issue to Sentry

    return <CustomError />;
  }

  if (!album && !isLoading) return <NotFound />;

  return (
    <main>
      <Header isMinimal={true} />
      {isLoading && <BulletList aria-label="Loading" />}
      {album && (
        <section className="w-11/12 max-w-3xl mt-10 mx-auto flex flex-col">
          <nav
            className="flex justify-between items-center"
            aria-label="Album navigation"
          >
            <Link href={`/artist/${album.artists[0].id}`}>
              <div
                role="button"
                aria-label={`Go back to artist ${album.artists[0].name}`}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-gray-500 w-5"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-400 pl-2">back</span>
              </div>
            </Link>
          </nav>

          <article className="mt-14 flex flex-col md:flex-row">
            <div className="shrink-0">
              <Image
                data-testid="albumImagePrimary"
                src={album.images[0].url}
                alt={album.name}
                width={200}
                height={200}
                aria-label={`Image of album ${album.name}`}
              />
            </div>
            <div className="flex flex-col mt-6 md:mt-0 md:ml-12">
              <h1 className="text-xl font-bold mb-2">{album.name}</h1>
              <p className="text-sm text-gray-500 mb-3">{albumDescription}</p>
            </div>
          </article>

          {tracks.length > 0 && (
            <div className="flex flex-col mt-14">
              <h2 className="text-lg font-bold mb-2">Tracks</h2>
              <ul>
                {tracks.map((track) => (
                  <li
                    key={track.id}
                    className="text-sm text-gray-500 mb-1"
                    data-testid={`track-${track.id}`}
                    role="listitem"
                  >
                    {track.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}
    </main>
  );
};

export default AlbumComponent;
