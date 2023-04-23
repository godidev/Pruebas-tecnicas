import MovieDetail from './MovieDetail'

export function MovieList({ movies }) {
  if (!movies) {
    return <p>No movies found</p>
  }

  return (
    <div className='movieList'>
      {movies.map(movie => {
        return (
          <MovieDetail
            key={movie.id}
            title={movie.title}
            year={movie.year}
            img={movie.img}
          />
        )
      })}
    </div>
  )
}
