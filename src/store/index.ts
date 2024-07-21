import { configureStore } from "@reduxjs/toolkit";
import favoriteArtistsReducer from "./favoriteArtistsSlice";

const store = configureStore({
  reducer: {
    favoriteArtists: favoriteArtistsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
