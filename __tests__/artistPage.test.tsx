import { describe, expect, test, vi } from "vitest";
import { render, screen } from "./test-utils";
import { albums, artists } from "@/mock/artist";
import ArtistComponent from "@/components/Artist/Artist";
import { fireEvent } from "@testing-library/dom";

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
});
