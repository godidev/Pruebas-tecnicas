import { useEffect, useState } from 'react'

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search === '') {
      setError("Can't search for an empty movie")
      return
    }
    if (search.match(/^\d+$/)) {
      setError('Movie cant start with a number')
      return
    }

    if (search.length < 3) {
      setError('length must be at least 3 characters')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
