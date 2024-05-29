import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialStateProps } from "./reducer.types";

const initialState: InitialStateProps = {
  dates: {
    maximum: '',
    minimum: '',
  },
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  empty: false,
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    addMovieList: (_state, { payload: movies }: PayloadAction<InitialStateProps>) => {
      _state = movies
      return _state
    },
  }

})

export const { addMovieList } = homeSlice.actions
export default homeSlice.reducer