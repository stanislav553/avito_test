import {Link, useParams} from 'react-router-dom'
import {Box, Typography} from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CircularProgress from '@mui/material/CircularProgress'
import style from './Pages.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import {useGetGameQuery} from '../services/games'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {useState} from 'react'
import IconButton from '@mui/material/IconButton'

export default function GamePage() {
  const {id} = useParams()
  const [page, setPage] = useState(1)
  const startElement = (page - 1) * 1
  const endElement = page * 1
  const {isLoading, isError, data: game} = useGetGameQuery(id)
  const lastElement = game?.screenshots.length

  if (isLoading)
    return (
      <Box>
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

  return game ? (
    <Box className={style.game_inner}>
      <Typography
        variant="h1"
        sx={{fontSize: '60px'}}
        className={style.game_title}
      >
        {game?.title}
      </Typography>

      <Box className={style.game_content}>
        <CardMedia
          className={style.game_poster}
          sx={{
            width: '345px'
          }}
          component="img"
          image={game?.thumbnail}
          alt={game?.title}
        />

        <Box>
          <Typography
            variant="span"
            className={style.game_minimal_system_requirements}
          >
            Минимальные системные требования:
          </Typography>
          <Typography variant="ul" className={style.game_info}>
            <Typography variant="li" className={style.game_system_requirements}>
              {game?.minimum_system_requirements?.graphics}
            </Typography>
            <Typography variant="li" className={style.game_system_requirements}>
              {game?.minimum_system_requirements?.memory}
            </Typography>
            <Typography variant="li" className={style.game_system_requirements}>
              {game?.minimum_system_requirements?.os}
            </Typography>
            <Typography variant="li" className={style.game_system_requirements}>
              {game?.minimum_system_requirements?.processor}
            </Typography>
            <Typography variant="li" className={style.game_system_requirements}>
              {game?.minimum_system_requirements?.storage}
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Box className={style.game_screenshots}>
        <Typography
          variant="span"
          sx={{
            marginBottom: '10px'
          }}
          className={style.game_screenshots_span}
        >
          Скриншоты:
        </Typography>

        <Box className={style.game_screenshots_content}>
          <IconButton
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1)
            }}
          >
            {<ArrowBackIosNewIcon className={style.game_arrow_slider} />}
          </IconButton>
          <Box>
            {game?.screenshots.slice(startElement, endElement).map(el => (
              <CardMedia
                className={style.game_screenshot}
                key={el?.id}
                component="img"
                image={el?.image}
                alt={game?.id}
              />
            ))}
          </Box>
          <IconButton
            disabled={page === lastElement}
            onClick={() => {
              setPage(page + 1)
            }}
          >
            <ArrowForwardIosIcon className={style.game_arrow_slider} />
          </IconButton>
        </Box>
      </Box>
      <Box className={style.game_details}>
        <Typography variant="span" sx={{marginBottom: '10px'}}>
          {game?.developer}
        </Typography>
        <Typography variant="span" sx={{marginBottom: '10px'}}>
          {game?.genre}
        </Typography>
        <Typography variant="span" sx={{marginBottom: '10px'}}>
          <CalendarMonthIcon fontSize="small" />
          {game?.release_date}
        </Typography>
        <Typography variant="span" sx={{marginBottom: '10px'}}>
          {game?.publisher}
        </Typography>
      </Box>

      <Link className={style.arrow_back} to={'/games'}>
        {<ArrowBackIcon fontSize="large" />}
      </Link>
    </Box>
  ) : (
    <>
      <Link to={'/games'}>{<ArrowBackIcon fontSize="large" />}</Link>
      <CircularProgress />
    </>
  )
}
