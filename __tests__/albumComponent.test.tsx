import { describe, expect, test, vi } from "vitest";
import { render, screen } from "./test-utils";
import { albums } from "@/mock/album";
import AlbumComponent from "@/components/Album/Album";
import { Track } from "@/types/spotify";

vi.mock("@/hooks/useSpotifyGetAlbum", () => ({
  default: vi.fn(() => ({
    album: albums[0],
    error: null,
    isLoading: false,
  })),
}));

describe("Album Component", () => {
  test("Album image should be loaded", () => {
    render(<AlbumComponent albumId={albums[0].id} />);

    const albumImage: HTMLImageElement =
      screen.getByTestId("albumImagePrimary");

    expect(decodeURIComponent(albumImage.src)).toContain(
      albums[0].images[0].url,
    );
  });

  test("Album tracks should be loaded", () => {
    render(<AlbumComponent albumId={albums[0].id} />);

    if (albums && albums.length > 0 && albums[0].tracks) {
      albums[0].tracks.map((track: Track) => {
        const trackElement: HTMLElement = screen.getByTestId(
          `track-${track.id}`,
        );

        expect(trackElement).toHaveTextContent(track.name);
      });
    }
  });
});
