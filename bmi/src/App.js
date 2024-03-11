import React, { useState, useMemo} from 'react'
import './App.css'
const App = () => {
  function heightChange(event){
    setHeight(event.target.value)
  }
  function weightChange(event){
    setWeight(event.target.value)

  }

  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const output = useMemo(()=>{
    const meter = height /100;
    return (weight/(meter*meter)).toFixed(1)
  },[height,weight])
  return (
    <main>
      <div>
        <h1>BMI Calculator</h1>
        <div className='input-section'>
          <p className='slider-output'>Weight: {weight} KG</p>
          <input 
          className='input-slider' 
          type='range' 
          step="1" 
          min="40" 
          max="200" 
          onChange={weightChange}
          />
          <p className='slider-output'>Height: {height} CM</p>
          <input 
          className='input-slider'
           type='range' 
           min='140'
           max='250'
           onChange={heightChange}
           />
        </div>
      </div>
      <div className='output-section'>
        <p>Your BMI is: </p>
        <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App
