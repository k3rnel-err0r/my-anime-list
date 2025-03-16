import './App.css'
import './styles/table.css'
import AnimeTable from './components/AnimeTable'
import { animeData } from './data/animeData'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="title-container">
          <h1 className="anime-title">My Anime List</h1>
          <div className="title-underline"></div>
        </div>
        
        <AnimeTable animeList={animeData} />
      </div>
    </div>
  )
}

export default App
