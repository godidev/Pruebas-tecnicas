import result from '../data/results.json'
import noresult from '../data/no-results.json' //eslint-disable-line

export function useMovies() {
  const movies = result.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    img: movie.Poster,
  }))

  return { movies: mappedMovies }
}
