"use client";

import useSpotifyGetArtist from "@/hooks/useSpotifyGetArtist";
import React, { useMemo } from "react";
import Header from "@/components/Header/Header";
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { addArtist, removeArtist } from "@/store/favoriteArtistsSlice";
import Image from "next/image";
import useSpotifyGetArtistAlbums from "@/hooks/useSpotifyGetArtistAlbums";
import { Album } from "@/types/spotify";

const ArtistPage = ({ params }: { params: { artistId: string } }) => {
  const dispatch: AppDispatch = useDispatch();

  const favArtists = useSelector(
    (state: RootState) => state.favoriteArtists.artists,
  );

  const {
    data: artist,
    error: artist_error,
    isLoading: artist_is_loading,
  } = useSpotifyGetArtist(params.artistId);

  const {
    data: albums_object,
    error: albums_errors,
    isLoading: albums_is_loading,
  } = useSpotifyGetArtistAlbums(params.artistId);

  const isAmongFavoriteArtists: boolean = useMemo(() => {
    return favArtists.some((artist) => artist.id === params.artistId);
  }, [favArtists, params.artistId]);

  const artistDescription: string = useMemo(() => {
    if (!artist) return "";

    return `${artist.name} has ${artist.followers.total} followers on Spotify. Their popularity score on the platform is ${artist.popularity}. Their music spans genres such as ${artist.genres.join(", ")}.`;
  }, [artist]);

  const getAlbumDescription = (album: Album) => {
    if (!album) return "";

    return `Album ${album.name} was released on ${album.release_date}. It features a total of ${album.total_tracks} tracks.`;
  };

  const toggleFavorite = (): void => {
    if (isAmongFavoriteArtists) {
      dispatch(removeArtist(params.artistId));
    } else if (artist) {
      dispatch(addArtist(artist));
    }
  };

  const albums: Album[] = useMemo(() => {
    if (albums_errors || albums_is_loading || !albums_object) return [];

    return albums_object.items.slice(0, 6);
  }, [albums_errors, albums_is_loading, albums_object]);

  if (artist_is_loading) return <div>Loading...</div>;
  if (artist_error || !artist) return <div>Error loading artist data</div>;

  console.log("artist", artist);
  console.log("albums", albums, albums_errors, albums_is_loading);

  return (
    <main>
      <Header isMinimal={true} />
      <section className="w-11/12 max-w-3xl mt-10 mx-auto flex flex-col">
        <nav className="flex justify-between items-center">
          <Link href={"/"}>
            <div>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-gray-500 w-5"
              />
              <span className="text-sm text-gray-400 pl-2">back</span>
            </div>
          </Link>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleFavorite}
          >
            <FontAwesomeIcon
              icon={isAmongFavoriteArtists ? faHeart : faHeartRegular}
              className={`w-5 ${isAmongFavoriteArtists ? "text-red-500" : "text-gray-400"}`}
            />
            <span
              className={`font-normal text-sm ml-1 ${isAmongFavoriteArtists ? "text-red-500" : "text-gray-400"}`}
            >
              {isAmongFavoriteArtists
                ? "Remove as favorite"
                : "Add as favorite"}
            </span>
          </div>
        </nav>

        <article className="mt-14 flex flex-col md:flex-row">
          <div className="shrink-0">
            <Image
              src={artist.images[0].url}
              alt={artist.name}
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col mt-6 md:mt-0 md:ml-12">
            <h1 className="text-xl font-bold mb-2">{artist.name}</h1>
            <p className="text-sm text-gray-500 mb-3">{artistDescription}</p>
          </div>
        </article>

        {albums.length > 0 && (
          <div className="flex flex-col mt-14">
            <h2 className="text-lg font-bold mb-2">Albums</h2>
            <div className="flex flex-wrap flex-col md:flex-row ">
              {albums.map((album) => (
                <Link
                  href={`/album/${album.id}`}
                  key={album.id}
                  className="flex mb-6 md:odd:pr-3 basis-2/4 grow-1 shrink-0"
                >
                  <div className="shrink-0">
                    <Image
                      src={album.images[0].url}
                      alt={album.name}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex flex-col ml-4">
                    <h1 className="text-sm font-bold mb-2">{album.name}</h1>
                    <p className="text-xs text-gray-500 mb-3">
                      {getAlbumDescription(album)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default ArtistPage;
