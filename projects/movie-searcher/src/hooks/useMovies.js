import result from '../data/results.json'

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
