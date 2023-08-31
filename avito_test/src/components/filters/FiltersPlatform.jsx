import {PLATFORMS_LIST} from '../../constants'
import {filterByPlatform} from '../../store/reducers/filterReducer'
import {useDispatch} from 'react-redux'
import {MenuItem, Select} from '@mui/material'

export default function ControllableStates() {
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(filterByPlatform(e.target.value))
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
        defaultValue={PLATFORMS_LIST[0]}
        label="genre"
        onChange={handleChange}
      >
        {PLATFORMS_LIST.map(platform => (
          <MenuItem key={platform} value={platform}>
            {platform}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}
