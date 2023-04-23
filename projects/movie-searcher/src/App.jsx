import { useState } from 'react'
import './App.css'
import { MovieForm } from './components/MovieForm'
import { MovieList } from './components/MovieList'
import { useMovies } from './hooks/useMovies'

function App() {
  const [movies, setMovies] = useState()
  const fetchMovies = useMovies()

  const handleSearch = search => {
    fetchMovies(search).then(movies => {
      setMovies(movies)
    })
  }

  return (
    <>
      <MovieForm onSearch={handleSearch} />
      <MovieList movies={movies} />
    </>
  )
}

export default App
