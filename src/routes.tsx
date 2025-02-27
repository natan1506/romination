import { createBrowserRouter } from 'react-router-dom'

import { Initial } from './pages/Initial'
// import { Game } from './pages/game'

export const router = createBrowserRouter([
  { path: '/', element: <Initial /> },
  // { path: '/game/:id', element: <Game /> }
])
