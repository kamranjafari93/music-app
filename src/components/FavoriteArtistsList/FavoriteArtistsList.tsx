import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { removeArtist } from "@/store/favoriteArtistsSlice";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function FavoriteArtistsList() {
  const artists = useSelector(
    (state: RootState) => state.favoriteArtists.artists,
  );

  const dispatch: AppDispatch = useDispatch();

  const handleRemoveArtist = (id: string) => {
    dispatch(removeArtist(id));
  };

  return (
    <section className="mt-12 flex justify-center w-full">
      <div className="border-2 border-slate-200 p-4 w-11/12 max-w-3xl">
        <h2 className="mt-0 mb-4 text-xl font-bold">My Favourite Artists</h2>
        {artists.length === 0 ? (
          <span className="font-normal text-sm text-slate-400">
            No favourites added yet.
          </span>
        ) : (
          <ul>
            {artists.map((artist) => (
              <li key={artist.id} className="flex justify-between align-middle">
                <span>{artist.name}</span>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleRemoveArtist(artist.id)}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="w-5 text-red-500"
                  />
                  <span className="font-normal text-sm text-red-500">
                    Remove
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default FavoriteArtistsList;
