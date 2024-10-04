
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import GenrePage from './pages/GenrePage'
import CarouselPage from './pages/CarouselPage'
import Dashboard from './pages/Dashboard'
import MoviePage from './pages/MoviePage'

function App() {
 

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/home" element={<RegisterPage/>}/>
        <Route path="/genres" element={<GenrePage/>}/>
        <Route path="/carousel" element={<CarouselPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/movies" element={<MoviePage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        {/* if no page matches any above page the route will be this */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
