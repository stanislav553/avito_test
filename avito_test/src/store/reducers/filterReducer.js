import {createSlice} from '@reduxjs/toolkit'
import {GENRES_LIST, PLATFORMS_LIST, SORT_BY_LIST} from '../../constants'
const initialState = {
  filterByPlatform: PLATFORMS_LIST[0],
  filterByGenres: GENRES_LIST[0],
  sortBy: SORT_BY_LIST[0]
}
const filterReducer = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterByPlatform: (state, action) => {
      state.filterByPlatform = action.payload
    },
    filterByGenres: (state, action) => {
      state.filterByGenres = action.payload
    },
    sortingBy: (state, action) => {
      state.sortBy = action.payload
    }
  }
})

export const {filterByPlatform, filterByGenres, sortingBy} =
  filterReducer.actions
export default filterReducer.reducer
