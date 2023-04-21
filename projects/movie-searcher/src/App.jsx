import './App.css'
import { MovieForm } from './components/MovieForm'
import { MovieList } from './components/MovieList'
import result from './data/results.json'

function App() {
  const movies = result.Search

  const mappedMovies = movies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    img: movie.Poster,
  }))

  return (
    <>
      <MovieForm />
      <MovieList movies={mappedMovies} />
    </>
  )
}

export default App
