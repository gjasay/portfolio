import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/main/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app'>
      <BrowserRouter>
        <div id='main'>
          <Main />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
