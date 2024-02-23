import './App.css'
import BeerList from './components/BeerList'

function App() {

  return (
    <main>
      <BeerList fromEBC={1} toEBC={79} />
    </main>
  )
}

export default App
