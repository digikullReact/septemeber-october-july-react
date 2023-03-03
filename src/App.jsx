import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Todo from './components/Todo'
import Calculator from './components/Calculator'
import {ListItems} from './components/ListItems'
import Tableitems from './components/Tableitems'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  
  {
    /**
     * <ListItems/> 
     *  <Tableitems/>
     */
  }
 
<Todo/>
   
    </div>
  )
}

export default App
