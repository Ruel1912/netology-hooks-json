
import './App.css'
import JsonFetch from './components/JsonFetch'
const { VITE_BACKEND_URL: backendUrl } = import.meta.env

function App() {

  return (
    <>
      <JsonFetch url={`${backendUrl}/data`} />
      <JsonFetch url={`${backendUrl}/loading`} />
      <JsonFetch url={`${backendUrl}/error`} />
    </>
  )
}

export default App
