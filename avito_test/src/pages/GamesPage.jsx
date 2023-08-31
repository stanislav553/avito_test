import {GameCard} from '../components/cards/GameCard'
import {Box} from '@mui/material'
import style from './Pages.module.scss'
import CircularProgress from '@mui/material/CircularProgress'
import {Link} from 'react-router-dom'
import {useGetGamesQuery} from '../services/games'
import Filters from '../components/filters/Filters'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {GENRES_LIST, PLATFORMS_LIST} from '../constants'

export function GamesPage() {
  const {isLoading, isError, data: games} = useGetGamesQuery()
  const [filteredGames, setFilteredGames] = useState(games)
  const {filterByPlatform, filterByGenres, sortBy} = useSelector(
    state => state.filters
  )

  useEffect(() => {
    if (games) setFilteredGames(games)
  }, [games])

  useEffect(() => {
    let filtered = games
    if (filterByGenres !== GENRES_LIST[0]) {
      filtered = filtered?.filter(
        game => game?.genre.toLowerCase() === filterByGenres.toLowerCase()
      )
    }
    if (filterByPlatform !== PLATFORMS_LIST[0]) {
      filtered = filtered?.filter(
        game => game?.platform.toLowerCase() === filterByPlatform.toLowerCase()
      )
    }
    setFilteredGames(filtered)
  }, [filterByGenres, filterByPlatform])

  useEffect(() => {
    if (filteredGames) {
      let sortedGames = [...filteredGames]

      sortedGames?.sort((game1, game2) => {
        if (game1[sortBy] > game2[sortBy]) return -1
        if (game1[sortBy] < game2[sortBy]) return 1
        return 0
      })
      setFilteredGames(sortedGames)
    }
  }, [sortBy])

  if (isLoading)
    return (
      <Box className={style.loading}>
        <CircularProgress />
      </Box>
    )

  if (isError)
    return (
      <div
        style={{
          fontWeight: '600',
          fontSize: '40px',
          color: '#fff',
          textAlign: 'center'
        }}
      >
        Ошибка загрузки данных <br /> Повторите запрос
      </div>
    )
  if (!games)
    return (
      <div
        style={{
          fontWeight: '600',
          fontSize: '40px',
          color: '#fff',
          textAlign: 'center'
        }}
      >
        Данных нет
      </div>
    )

  return (
    <>
      <Filters />
      <Box className={style.container}>
        {filteredGames?.map(game => (
          <Link to={`${game?.id}`} key={game?.id}>
            <GameCard game={game} />
          </Link>
        ))}
      </Box>
    </>
  )
}
