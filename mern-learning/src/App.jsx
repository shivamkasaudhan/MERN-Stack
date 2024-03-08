import react,{ useState } from 'react'
import Mobile from './Component/Mobile'
import './App.css'
import Data from './Component/Data';
import Form from './Component/Form';

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
    // <>
    //   

    // </>
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
      <Mobile/>
      <Data/>
      <Form/>
    </div>
  )
}

export default App
