import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Films from './pages/Films'
import Characters from './pages/Characters'
import Planets from './pages/Planets'
import Species from './pages/Species'
import Starships from './pages/Starships'
import Vehicles from './pages/Vehicles'
import NotFound from './pages/NotFound'

export const routes = [
  {
    path: '/',
    component: Welcome,
    exact: true
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/films',

    component: Films
  },
  {
    path: '/characters',
    component: Characters
  },
  {
    path: '/species',
    component: Species
  },
  {
    path: '/planets',
    component: Planets
  },
  {
    path: '/starships',
    component: Starships
  },
  {
    path: '/vehicles',
    component: Vehicles
  },
  {
    path: '*',
    component: NotFound
  }
]
