import { useEffect } from 'react'
import './App.css'
import BeerList from './components/BeerList'
import Loader from './components/Loader'

function App() {

  return (
    <main>
      <BeerList fromEBC={1} toEBC={19} />
      <BeerList fromEBC={20} toEBC={39} />
      <BeerList fromEBC={40} toEBC={59} />
      <BeerList fromEBC={60} toEBC={79} />
    </main>
  )
}

export default App
