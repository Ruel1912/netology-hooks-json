import { useState, useEffect } from 'react'

export const useJsonFetch = (url: string, opts: RequestInit = {}) => {
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(url, opts)

        if (!response.ok) {
          throw new Error((await response.json())?.status || response.statusText)
        }

        const data = await response.json()
        setResult(data)

      } catch (error) {
        if (error instanceof SyntaxError) {
          setError('Response is not valid JSON')
        } else {
          setError(error.message || 'Network error')
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url])

  return [result, isLoading, error]
}
