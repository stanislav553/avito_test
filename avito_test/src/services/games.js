import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CACHE_LIFE_TIME, GAMES_API_URL} from '../constants'

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: GAMES_API_URL,
    headers: {
      'X-RapidAPI-Key': '13e159848cmshd55aeb5bea385b1p12b458jsn6dabea6dc9e5',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  }),
  keepUnusedDataFor: CACHE_LIFE_TIME,
  endpoints: builder => ({
    getGames: builder.query({
      query: () => ({
        url: '/games'
      })
    }),
    getGame: builder.query({
      query: gameId => ({
        url: `/game?id=${gameId}`
      })
    })
  })
})

export const {useGetGameQuery, useGetGamesQuery} = gamesApi
