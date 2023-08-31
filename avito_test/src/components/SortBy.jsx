import {MenuItem, Select} from '@mui/material'

import {useDispatch} from 'react-redux'
import {sortingBy} from '../store/reducers/filterReducer'
import {SORT_BY_LIST} from '../constants'

export default function SortBy() {
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(sortingBy(e.target.value))
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
        defaultValue={SORT_BY_LIST[0]}
        label="sort"
        onChange={handleChange}
      >
        {SORT_BY_LIST.map(sort => (
          <MenuItem key={sort} value={sort}>
            {sort}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}
