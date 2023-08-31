import {Link} from 'react-router-dom'
import {Box} from '@mui/material'
import style from './Header.module.scss'

export default function Header() {
  return (
    <Box className={style.header}>
      <Box className={style.header_content}>
        <Link to={`/`} className={style.header_buttons}>
          Главная страница
        </Link>
        <Link to={`/games`} className={style.header_buttons}>
          Игры
        </Link>
      </Box>
    </Box>
  )
}
