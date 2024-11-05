import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(3); 
  const [showCount, setShowCount] = useState(true); 

  
  const handleShowHide = () => {
    setShowCount((prevShow) => !prevShow);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      
      {}
      <input 
        type="button" 
        value={showCount ? 'Hide Count' : 'Show Count'} 
        onClick={handleShowHide} 
      />
      
      {}
      {showCount && <h2>Count: {count}</h2>}
      
      {}
      <input 
        type="button" 
        value="Increment Count" 
        onClick={handleIncrement} 
      />
    </div>
  );
}

export default Counter;
