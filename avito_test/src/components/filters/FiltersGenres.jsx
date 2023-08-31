import {GENRES_LIST} from '../../constants'
import {MenuItem, Select} from '@mui/material'

import {useDispatch} from 'react-redux'
import {filterByGenres} from '../../store/reducers/filterReducer'

export default function FiltersGenres() {
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(filterByGenres(e.target.value))
  }

  return (
    <>
      <Select
        autoWidth
        style={{
          color: '#aaaaaa',
          background: '#32383e',
          minWidth: '130px',
          flex: '1 1 auto'
        }}
        defaultValue={GENRES_LIST[0]}
        label="genre"
        onChange={handleChange}
      >
        {GENRES_LIST.map(genre => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}
