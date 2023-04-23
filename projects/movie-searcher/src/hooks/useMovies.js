export function useMovies() {
  const API_KEY = '26a6ad46'
  const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

  const fetchMovies = search => {
    const url = `${BASE_URL}&s=${search}`

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return (
          data.Search &&
          data.Search.map(movie => {
            return {
              id: movie.imdbID,
              title: movie.Title,
              year: movie.Year,
              img: movie.Poster,
            }
          })
        )
      })
      .catch(error => console.error(error))
  }

  return fetchMovies
}
