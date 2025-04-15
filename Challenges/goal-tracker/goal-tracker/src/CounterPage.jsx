import React from "react";
import { useState } from "react";
import App from './App.jsx';

function CounterPage() {
  let [num, setNum] = useState(0);

  function increment() {
    setNum((prev) => prev + 1);
  }

  return (
    <>
      <h1>Waddup world.</h1>
      <button onClick={increment}>click me, i dare you: {num}</button>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default CounterPage;