import React, { useEffect, useState } from 'react'

const MultipleReturn = () => {
    const [user,setUser]=useState([]);
    const [loading,setLoading] =useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        async function fetchUser(){
            try{
                const response =await fetch('https://api.github.com/users');
                const data = await response.json();
                setUser(data);
                setLoading(false);
            }catch(error){
                setError(error);
                setLoading(false);
            }
        }
        fetchUser();

    },[])
    if(loading){
        return <p>Loading..</p>
    }
    if(error){
        return <p>Error: {error.message}</p>
    }
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map(user=>{
            return <li key={user.id}>
                {user.login}
            </li>
        })}
      </ul>
    </div>
  )
}

export default MultipleReturn
