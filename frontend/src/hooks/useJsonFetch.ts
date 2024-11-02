import { useEffect, useState } from 'react'

export const useJsonFetch = (url: string, opt: any) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState(null)

  useEffect(() => {

    let canceled = false
    const fetchData = async () => {
      
      if (canceled) {
        return
      }
      setLoading(true)
      fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!canceled) {
          setData(json)
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
    }
    fetchData()

    return () => {
      canceled = true
    }
  }, [url, opt])

  return [data, isLoading, hasError]
}
