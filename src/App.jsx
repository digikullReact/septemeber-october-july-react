import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Todo from './components/Todo'
import Calculator from './components/Calculator'
import {ListItems} from './components/ListItems'
import Tableitems from './components/Tableitems'
import Todo2 from './components/Todo2'


function App() {
  const [count, setCount] = useState(0)
  const someData="I am from parent 222";
  const dataFun=()=>{
console.log(99)
  }

  // PROPS --->PARENT TO CHILD ONLY
  return (
    <div className="App">
  
  {
    /**
     * <ListItems/> 
     *  <Tableitems/>
     */
  }
 
<Todo2 somethingElse={someData} dataFun={dataFun}/>
   
    </div>
  )
}

export default App
