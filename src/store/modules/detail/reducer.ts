import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { InitialStateProps } from "./reducer.types"

const initialState: InitialStateProps = {
  showDetail: false,
  adult: false,
  backdrop_path: '',
  genre_ids: [],
  id: null,
  original_language: '',
  original_title: '',
  overview: '',
  popularity: null,
  poster_path: '',
  release_date: '',
  title: '',
  video: false,
  vote_average: null,
  vote_count: null,
}

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    openDetail: (_state, { payload }: PayloadAction<InitialStateProps>) => {
      _state = {
        ...payload,
        showDetail: true,
      }
      return _state
    },
    closeDetail: (_state) => {
      _state.showDetail = false
      return _state
    }
  }

})

export const { openDetail, closeDetail } = detailSlice.actions
export default detailSlice.reducer