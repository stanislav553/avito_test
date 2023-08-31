import {Box} from '@mui/material'
import style from './Pages.module.scss'

export function HomePage() {
  return (
    <Box
      className={style.container}
      style={{
        fontWeight: '600',
        fontSize: '40px',
        color: '#fff',
        textAlign: 'center'
      }}
    >
      Main Page
    </Box>
  )
}
