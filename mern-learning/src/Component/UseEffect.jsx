import React, { useEffect, useState } from 'react'

const UseEffect = () => {

  const [Clicked,setClicked]=useState();
  const [count,setCount]=useState(0);

  useEffect(()=>{
//code to run after render or update
      console.log('Using Use State');
      return (
        ()=>{
          console.log("return clean use state")
        }
      )

  },[Clicked,count])
  return (
    <div>
      <button onClick={()=>setClicked('First')}>First</button>
      <button onClick={()=>setClicked('Second')}>Second</button>
      <button onClick={()=>setClicked('Third')}>Third</button>
      <button onClick={()=>{setCount(count+1)}}>
        Increment
      </button>
      <br/>
      <h1>{Clicked}</h1>
      <h1>{count}</h1>

    </div>
  )
}

export default UseEffect