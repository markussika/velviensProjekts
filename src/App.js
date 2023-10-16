
import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  return(
    <>
    
    <h1>sveiki!</h1>
    
    <div>
      <h2>cik lodes sodien gusitis izdzera? atbilde ir - {count} </h2>
      <input type = 'numbers'></input>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
    <div>
      
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>

    </div>
    
    </>
  )
}

export default App;
