/* eslint-disable react/prop-types */
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import {CardActionArea} from '@mui/material'
import style from './Card.module.scss'

export function GameCard({game}) {
  return (
    <Card
      className={style.game_cards}
      sx={{
        height: '100%',
        backgroundColor: '#32383e'
      }}
    >
      <CardActionArea sx={{backgroundColor: '#32383e'}}>
        <CardMedia
          className={style.game_image}
          component="img"
          image={game.thumbnail}
          alt={game.title}
        />
        <CardContent
          sx={{
            padding: '10px'
          }}
          className={style.game_card_content}
        >
          <Typography
            gutterBottom
            variant="h5"
            className={style.game_card_title}
            component="div"
          >
            {game.title}
          </Typography>
          <Typography variant="span" className={style.game_card_details}>
            {game.release_date}
          </Typography>
          <Typography variant="span" className={style.game_card_details}>
            {game.platform}
          </Typography>
          <Typography variant="span" className={style.game_card_details}>
            {game.publisher}
          </Typography>
          <Typography variant="span" className={style.game_card_details}>
            {game.genre}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
