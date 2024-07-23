import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "./test-utils";
import SearchInput from "@/components/SearchInput/SearchInput";

vi.mock("@/hooks/useSpotifySearch", () => ({
  default: vi.fn(() => ({
    artists: [
      { id: "4dpARuHxo51G3z768sgnrY", name: "Adele" },
      { id: "2wY79sveU1sp5g7SokKOiI", name: "Sam Smith" },
    ],
    albums: [
      { id: "0Lg1uZvI312TPqxNWShFXL", name: "21" },
      { id: "3AvPX1B1HiFROvYjLb5Qwi", name: "25" },
    ],
    error: null,
    isLoading: false,
  })),
}));

describe("SearchInput component", () => {
  test("renders search input and displays suggestions and remove search term", () => {
    render(<SearchInput />);

    const inputElement: HTMLInputElement = screen.getByTestId("searchInput");

    fireEvent.change(inputElement, { target: { value: "Fake" } });

    expect(screen.getByText("Adele")).toBeInTheDocument();
    expect(screen.getByText("Sam Smith")).toBeInTheDocument();
    expect(screen.getByText("21")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();

    const inputIconElement = screen.getByTestId("searchInputClearIcon");
    fireEvent.click(inputIconElement);

    expect(inputElement.value).toBe("");
  });
});
