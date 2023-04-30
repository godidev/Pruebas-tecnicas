import { useSearch } from '../hooks/useSearch'

export function MovieForm({ onSearch }) {
  const { search, handleChange, error } = useSearch()

  const handleSubmit = e => {
    e.preventDefault()
    if (!error) {
      onSearch(search)
    }
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
          onChange={handleChange}
          value={search || ''}
        />
        {error && (
          <p
            style={{
              color: 'red',
              border: '1px solid red',
              marginTop: '0px',
              padding: '5px',
            }}
          >
            {error}
          </p>
        )}
        <button>Search</button>
      </form>
    </div>
  )
}
