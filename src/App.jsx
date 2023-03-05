import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Todo from './components/Todo'
import Calculator from './components/Calculator'
import {ListItems} from './components/ListItems'
import Tableitems from './components/Tableitems'
import Todo2 from './components/Todo2'
import Child from './components/Child'
import ApiCall from './components/ApiCall'


function App() {
  const [count, setCount] = useState(0)
  const someData="I am from parent 222";
  const sum=(a,b)=>{
console.log(a+b);
  }

  // PROPS --->PARENT TO CHILD ONLY
  return (
    <div className="App">
  
  {
    /**
     * <ListItems/> 
     *  <Tableitems/>
     *  <Todo2/>
     *  <Child add={sum}/>
     *  <Todo/>

     */
  }
 

<ApiCall/>
   
    </div>
  )
}

export default App
