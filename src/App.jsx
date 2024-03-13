import { useState } from 'react'
import './App.css'
import Main from './components/main/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app'>
        <div id='main'>
          <Main />
        </div>
    </div>
  )
}

export default App
