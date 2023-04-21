import { useSearch } from '../hooks/useSearch'

export function MovieForm() {
  const { search, setSearch, error } = useSearch()
  const handleSubmit = e => {
    e.preventDefault()
    setSearch('')
  }

  return (
    <div className='movie-form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='film'>Search for a movie: </label>
        <input
          style={{
            border: '1px solid transparent',
            borderColor: error && 'red',
          }}
          placeholder='Avengers, The matrix...'
          name='film'
          id='film'
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
        <button>Search</button>
      </form>
    </div>
  )
}
