import {Box} from '@mui/material'
import FiltersGenres from './FiltersGenres'
import FiltersPlatform from './FiltersPlatform'
import style from './Filters.module.scss'
import SortBy from '../SortBy'

export default function Filters() {
  return (
    <Box className={style.filters}>
      <FiltersPlatform />
      <FiltersGenres />
      <SortBy />
    </Box>
  )
}
