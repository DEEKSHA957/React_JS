import React, { useState } from "react";

let IncrDecr=()=>{
  let [count, setCount] = useState(0);

  let Increment=()=>{
    setCount(count + 1);
  }
  let Decrement=()=>{
    setCount(count - 1);
  }
  return (
    <div className="App">
      <h2>count</h2>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}
export default IncrDecr;