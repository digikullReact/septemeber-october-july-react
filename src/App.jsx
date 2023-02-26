import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Todo from './components/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Todo/>
  
   
    </div>
  )
}

export default App
