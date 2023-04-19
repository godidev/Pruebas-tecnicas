export function MovieForm() {
  return (
    <div className='movie-form'>
      <form>
        <label htmlFor='film'>Search for a movie: </label>
        <input placeholder='Avengers, The matrix...' name='film' id='film' />
        <button>Search</button>
      </form>
    </div>
  )
}
