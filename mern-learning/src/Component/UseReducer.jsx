import react,{ useState } from 'react'
import Mobile from './Component/Mobile'
import './App.css'
import Data from './Component/Data';
import Form from './Component/Form';
import UseEffect from './Component/UseEffect';
import Fetch from './Component/Fetch';
import MultipleReturn from './Component/MultipleReturn';
import A from './ContextApi/A'

function App() {
  console.log(useState("Hello"));
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);
  const handleClickInc = ()=>{
    setCount(count+1);
  }
  const handleClickDec = ()=>{
    setCount(count-1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
      <Mobile/>
      <Data/>
      <Form/>
      <UseEffect/>
      <Fetch/>
      <MultipleReturn/>
      <A/>
    </div>
  )
}

export default App
