import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useMemo, useState } from "react";
import useSpotifySearch from "@/hooks/useSpotifySearch";
import { Album, Artist } from "@/types/spotify";
import Link from "next/link";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { artists, albums, error, isLoading } = useSpotifySearch(
    searchTerm,
    "artist,album",
  );

  if (error) {
    console.error(error);
    // Send issue to Sentry
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const canShowSuggestions: boolean = useMemo(() => {
    return Boolean(!isLoading && (artists.length > 0 || albums.length > 0));
  }, [isLoading, artists, albums]);

  const artistsSlice: Artist[] = useMemo(() => {
    return artists.slice(0, 2);
  }, [artists]);

  const albumsSlice: Album[] = useMemo(() => {
    return albums.slice(0, 2);
  }, [albums]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-11/12 max-w-3xl">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5"
          aria-hidden="true"
        />
        <input
          data-testid="searchInput"
          type="text"
          placeholder="Search by artist or album"
          className="w-full bg-white p-3 pl-10 rounded-t-md rounded-b"
          value={searchTerm}
          onChange={handleChange}
          role="searchbox"
          aria-label="Search for music by artist or album"
        />
        {searchTerm && (
          <FontAwesomeIcon
            icon={faClose}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 cursor-pointer"
            onClick={() => setSearchTerm("")}
            data-testid="searchInputClearIcon"
            aria-label="Clear search input"
          />
        )}
        {canShowSuggestions && (
          <div
            className="absolute w-full mt-1.5 bg-white py-3 px-1 rounded-b-md rounded-t shadow-xl"
            role="listbox"
          >
            {artistsSlice.length > 0 && (
              <>
                <span
                  className="text-sm text-gray-400 pl-2"
                  role="presentation"
                >
                  Artists
                </span>
                <ul role="group" aria-label="Artists">
                  {artistsSlice.map((artist) => (
                    <Link href={`/artist/${artist.id}`} key={artist.id}>
                      <li
                        className="text-sm mb-0.5 p-1.5 cursor-pointer hover:bg-gray-200 rounded"
                        role="option"
                        aria-selected="false"
                      >
                        {artist.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </>
            )}
            {albumsSlice.length > 0 && (
              <>
                <span
                  className="text-sm text-gray-400 pl-2"
                  role="presentation"
                >
                  Albums
                </span>
                <ul role="group" aria-label="Albums">
                  {albumsSlice.map((album) => (
                    <Link href={`/album/${album.id}`} key={album.id}>
                      <li
                        className="text-sm mb-0.5 p-1.5 cursor-pointer hover:bg-gray-200 rounded"
                        role="option"
                        aria-selected="false"
                      >
                        {album.name}
                      </li>
                    </Link>
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
