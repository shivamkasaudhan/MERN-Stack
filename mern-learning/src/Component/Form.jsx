import React, { useState } from 'react'

const Form = () => {
    // const[name, setName] = useState("");
    // const[Age, setAge] = useState("");
    // const[Email, setEmail] = useState("");
    // const[password, setPass] = useState("");

    const [formData,setFormData] = useState({
        Name:'',
        Age: '',
        Email:'',
        password:''
    })
    const handleInput=(e)=>{
        const {name,value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

    }
    // const handleName = (e)=>{
    //     setName(e.target.value)
    // }
    // const handleAge = (e)=>{
    //     setAge(e.target.value)
    // }
    // const handleEmail = (e)=>{
    //     setEmail(e.target.value)
    // }
    // const handlePass = (e)=>{
    //     setPass(e.target.value)
    // }
    
    
  return (
    <form className='form' onSubmit={handleSubmit}>
        <label >
            Name: 
            <input type="text" name='Name' onChange={handleInput} value={formData.Name} />
        </label>
        <label >
            Age: 
            <input type="number" name='Age' onChange={handleInput} value={formData.Age} />
        </label>
        <label >
            Email: 
            <input type="email" name='Email' onChange={handleInput} value={formData.Email} />
        </label>
        <label >
            Password: 
            <input type="password" name='password' onChange={handleInput} value={formData.password} />
        </label>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form 