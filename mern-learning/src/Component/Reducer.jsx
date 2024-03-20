import React, { useReducer } from 'react'

const Reducer = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const fetchData = async ()=>{
        dispatch({type: 'START '})
    }
     
  return (
    <div>
      <button onClick={fetchData}>Fetch</button>
    </div>
  )
}

export default Reducer
