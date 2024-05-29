import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Footer, Header } from '../commons/components'
import { Home } from '../pages/home'
import { Favorite } from '../pages/favorite'

export const MainRoutes = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favoritos" element={<Favorite />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
