import React, { useState, useReducer } from 'react';
import Mobile from './Component/Mobile';
import './App.css';
import Data from './Component/Data';
import Form from './Component/Form';
import UseEffect from './Component/UseEffect';
import Fetch from './Component/Fetch';
import MultipleReturn from './Component/MultipleReturn';
import A from './ContextApi/A';
import Reducer from './Component/Reducer';

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case "incr":
      return { ...state, count: state.count + 1 };
    case "desc":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleClickInc = () => {
    dispatch({ type: "incr" });
  };

  const handleClickDec = () => {
    dispatch({ type: "desc" });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
      <Mobile />
      <Data />
      <Form />
      <UseEffect />
      <Fetch />
      <MultipleReturn />
      <A />
      {/* <Reducer/> */}
    </div>
  );
}

export default App;
