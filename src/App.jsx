import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Todo from './components/Todo'
import Calculator from './components/Calculator'
import ListItems from './components/ListItems'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  
<ListItems/>  
   
    </div>
  )
}

export default App
