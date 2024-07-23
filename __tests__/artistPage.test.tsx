import { describe, expect, test, vi } from "vitest";
import { render, screen } from "./test-utils";
import { albums, artists } from "@/mock/artist";
import ArtistComponent from "@/components/Artist/Artist";
import { fireEvent } from "@testing-library/dom";
import { Album } from "@/types/spotify";

vi.mock("@/hooks/useSpotifyGetArtist", () => ({
  default: vi.fn(() => ({
    artist: artists[0],
    error: null,
    isLoading: false,
  })),
}));

vi.mock("@/hooks/useSpotifyGetArtistAlbums", () => ({
  default: vi.fn(() => ({
    albums: albums,
    error: null,
    isLoading: false,
  })),
}));

describe("Artist Page", () => {
  test("Favorite the artist and undo it", () => {
    render(<ArtistComponent artistId={artists[0].id} />);

    const favouriteStatus: HTMLElement = screen.getByTestId(
      "artistFavouriteStatus",
    );

    expect(favouriteStatus).toHaveTextContent("Add as favorite");

    const favouriteToggleBox: HTMLElement =
      screen.getByTestId("artistFavoriteBox");

    fireEvent.click(favouriteToggleBox);

    expect(favouriteStatus).toHaveTextContent("Remove as favorite");
  });

  test("Artist and album images should be loaded", () => {
    render(<ArtistComponent artistId={artists[0].id} />);

    const artistImage: HTMLImageElement =
      screen.getByTestId("artistImagePrimary");

    expect(decodeURIComponent(artistImage.src)).toContain(
      artists[0].images[0].url,
    );

    albums.map((album: Album) => {
      const albumImage: HTMLImageElement = screen.getByTestId(
        `artistAlbumImage-${album.id}`,
      );

      expect(decodeURIComponent(albumImage.src)).toContain(album.images[0].url);
    });
  });
});
