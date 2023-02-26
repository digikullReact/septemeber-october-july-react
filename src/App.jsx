import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Todo from './components/Todo'
import Calculator from './components/Calculator'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  
  <Calculator/>
  
   
    </div>
  )
}

export default App
