import MovieDetail from './MovieDetail'

export function MovieList({ movies }) {
  return (
    <div className='movieList'>
      {!movies ? (
        <p>No hay peliculas</p>
      ) : (
        movies.map(movie => {
          return (
            <MovieDetail
              key={movie.id}
              title={movie.title}
              year={movie.year}
              img={movie.img}
            />
          )
        })
      )}
    </div>
  )
}
