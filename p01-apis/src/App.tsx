import { useState } from 'react'
import './App.css'
import BeerList from './components/BeerList'
import ColorFilter from './components/ColorFilter'
import { NumberRange } from './@types/types'

function App() {
  const [ebcRange, setEbcRange] = useState<NumberRange>({ from: 4, to: 76 })

  const updateRange = (newRange: NumberRange) => {
    if (newRange.from !== ebcRange.from || newRange.to !== ebcRange.to) {
      setEbcRange(newRange);
    }
  }

  return (
    <>
      <header>
        <h1 className='title'>Beer Spectrum Search</h1>
        <p className='subtitle'>find your favorite beer by its color</p>
      </header>
      <main>
        <ColorFilter onChange={updateRange} />
        <BeerList ebcRange={ebcRange} />
      </main>
    </>
  )
}

export default App
