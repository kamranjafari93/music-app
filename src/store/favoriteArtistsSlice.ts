import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Artist } from "@/types/spotify";

interface FavoriteArtistsState {
  artists: Artist[];
}

const initialState: FavoriteArtistsState = {
  artists: [],
};

const favoriteArtistsSlice = createSlice({
  name: "favoriteArtists",
  initialState,
  reducers: {
    addArtist: (state, action: PayloadAction<Artist>) => {
      state.artists.push(action.payload);
    },
    removeArtist: (state, action: PayloadAction<string>) => {
      state.artists = state.artists.filter(
        (artist) => artist.id !== action.payload,
      );
    },
  },
});

export const { addArtist, removeArtist } = favoriteArtistsSlice.actions;
export default favoriteArtistsSlice.reducer;
