import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieProps } from "../../../commons/typing";

const initialState: MovieProps[] = []

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteMovies: (_state, { payload: favorite }: PayloadAction<MovieProps[]>) => {
      return _state = favorite
    }
  }
})

export const { addFavoriteMovies } = favoriteSlice.actions
export default favoriteSlice.reducer