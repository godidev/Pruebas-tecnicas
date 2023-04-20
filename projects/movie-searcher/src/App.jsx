import './App.css'
import { MovieForm } from './components/MovieForm'
import { MovieList } from './components/MovieList'
import result from './data/results.json'

function App() {
  const movies = result.Search

  return (
    <>
      <MovieForm />
      <MovieList movies={movies} />
    </>
  )
}

export default App
