import './App.css'
import { MovieForm } from './components/MovieForm'
import { MovieList } from './components/MovieList'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  return (
    <>
      <MovieForm />
      <MovieList movies={movies} />
    </>
  )
}

export default App
