import MovieDetail from './MovieDetail'

export function MovieList({ movies }) {
  return (
    <div className='movieList'>
      {movies.map(movie => {
        return (
          <MovieDetail
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            img={movie.Poster}
          />
        )
      })}
    </div>
  )
}
