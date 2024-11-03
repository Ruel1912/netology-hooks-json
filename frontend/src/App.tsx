
import './App.css'
import JsonFetch from './components/JsonFetch'
const { VITE_BACKEND_URL: backendUrl } = import.meta.env

function App() {

  return (
    <div className='p-8 w-full flex flex-col gap-6 items-center'>
      <JsonFetch url={`${backendUrl}/data`} />
      <JsonFetch url={`${backendUrl}/loading`} />
      <JsonFetch url={`${backendUrl}/error`} />
    </div>
  )
}

export default App
