import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import Layout from './components/layout/Layout'
import GamePage from './pages/GamePage'
import {GamesPage} from './pages/GamesPage'
import {Provider} from 'react-redux'
import {store} from './store'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: 'games/',
          element: <GamesPage />
        },
        {
          path: '/games/:id',
          element: <GamePage />
        }
      ]
    }
  ])
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
