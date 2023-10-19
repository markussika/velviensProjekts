
import React, { useState } from 'react';
function App() {
  const [change, setChange] = useState(1);
  const [count, setCount] = useState(0);
function handleChange(event){
  setChange(event.target.value)
}

  return(
    <>
    
    <h1>sveiki!</h1>
    
    <div>
      <h2>cik lodes sodien gusitis izdzera? atbilde ir  {count} </h2>
      <input type = "number" value={change} onChange = {handleChange}></input>
      <button onClick={() => setCount(count + change)}>
        +1
      </button>
    </div>
    <div>
      
      <button onClick={() => setCount(count - change)}>
        -1
      </button>

    </div>
    
    </>
  )
}

export default App;
