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

const ArtistPage = ({ params }: { params: { artistId: string } }) => {
  const { data, error, isLoading } = useSpotifyGetArtist(params.artistId);

  const dispatch: AppDispatch = useDispatch();

  const favArtists = useSelector(
    (state: RootState) => state.favoriteArtists.artists,
  );

  const isAmongFavoriteArtists: boolean = useMemo(() => {
    return favArtists.some((artist) => artist.id === params.artistId);
  }, [favArtists, params.artistId]);

  const toggleFavorite = (): void => {
    if (isAmongFavoriteArtists) {
      dispatch(removeArtist(params.artistId));
    } else if (data) {
      dispatch(addArtist(data));
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading artist data</div>;

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
      </section>
    </main>
  );
};

export default ArtistPage;
