import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1); // Initialize count with 1
  const [showCount, setShowCount] = useState(true); // Track whether count is shown

  // Toggle the visibility of the count
  const handleShowHide = () => {
    setShowCount((prevShow) => !prevShow);
  };

  // Increment the count
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      
      {/* Button to show/hide the count */}
      <input 
        type="button" 
        value={showCount ? 'Hide Count' : 'Show Count'} 
        onClick={handleShowHide} 
      />
      
      {/* Conditionally render the count */}
      {showCount && <h2>Count: {count}</h2>}
      
      {/* Button to increment the count */}
      <input 
        type="button" 
        value="Increment Count" 
        onClick={handleIncrement} 
      />
    </div>
  );
}

export default Counter;
