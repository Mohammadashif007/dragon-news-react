import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Root from './layouts/Root'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Root></Root>
    </div>
  )
}

export default App
