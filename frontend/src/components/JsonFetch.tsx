import { useJsonFetch } from '../hooks/useJsonFetch'

interface JsonFetchProps {
  url: string
}
const JsonFetch = ({ url }: JsonFetchProps) => {
  const [data, isLoading, hasError] = useJsonFetch(url, {})
  console.log(data)
  return (
    <>
      {hasError && <p>{hasError}</p>}
      {isLoading && <p>Loading...</p>}
      <h1>{data}</h1>
    </>
  )
}

export default JsonFetch
