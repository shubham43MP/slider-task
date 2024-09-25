import { useState } from 'react'
import './App.css'
import { Slider } from './components/slider/Slider'

function App() {
  const [_, setValue] = useState(50) // this is just for demonstration, how will parent component track the child compoent's value

  return (
    <div className='slider-container'>
      <Slider max={200} min={20} width={300} value={50} onChange={setValue}/>
    </div>
  )
}

export default App
