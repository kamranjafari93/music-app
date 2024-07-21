import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faSearch as faSearchSolid,
} from "@fortawesome/free-solid-svg-icons";
import React, { useMemo, useState } from "react";
import useSpotifySearch from "@/hooks/UseSpotifySearch";
import { Album, Artist } from "@/types/spotify";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, error, isLoading } = useSpotifySearch(
    searchTerm,
    "artist,album",
  );

  console.log(data, error, isLoading);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const canShowSuggestions: boolean = useMemo(() => {
    return Boolean(
      (data?.albums?.items && data.albums.items.length > 0) ||
        (data?.artists?.items && data.artists.items.length > 0),
    );
  }, [data]);

  const artists: Artist[] = useMemo(() => {
    return data?.artists?.items ? data.artists.items.slice(0, 2) : [];
  }, [data]);

  const albums: Album[] = useMemo(() => {
    return data?.albums?.items ? data.albums.items.slice(0, 2) : [];
  }, [data]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-11/12 max-w-3xl">
        <FontAwesomeIcon
          icon={faSearchSolid}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5"
        />
        <input
          type="text"
          placeholder="Search by artist or album"
          className="w-full bg-white p-3 pl-10 rounded-t-md rounded-b"
          value={searchTerm}
          onChange={handleChange}
        />
        {searchTerm && (
          <FontAwesomeIcon
            icon={faClose}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 cursor-pointer"
            onClick={() => setSearchTerm("")}
          />
        )}
        {canShowSuggestions && (
          <div className="absolute w-full mt-1.5 bg-white py-3 px-1 rounded-b-md rounded-t shadow-xl">
            {artists.length > 0 && (
              <>
                <span className="text-sm text-gray-400 pl-2">Artists</span>
                <ul>
                  {artists.map((artist) => (
                    <li
                      key={artist.id}
                      className="text-sm mb-0.5 p-1.5 cursor-pointer hover:bg-gray-200 rounded"
                    >
                      {artist.name}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {albums.length > 0 && (
              <>
                <span className="text-sm text-gray-400 pl-2">Albums</span>
                <ul>
                  {albums.map((album) => (
                    <li
                      key={album.id}
                      className="text-sm mb-0.5 p-1.5 cursor-pointer hover:bg-gray-200 rounded"
                    >
                      {album.name}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
