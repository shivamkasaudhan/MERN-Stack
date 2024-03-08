import React, { useState } from 'react'

const Form = () => {
    const[name, setName] = useState("");
    const[Age, setAge] = useState("");
    const[Email, setEmail] = useState("");
    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleAge = (e)=>{
        setAge(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
  return (
    <div className='form'>
        <label >
            name: 
            <input type="text" onChange={handleName} value={name} />
        </label>
        <label >
            Age: 
            <input type="number" onChange={handleAge} value={Age} />
        </label>
        <label >
            Email: 
            <input type="text" onChange={handleEmail} value={Email} />
        </label>
    </div>
  )
}

export default Form 