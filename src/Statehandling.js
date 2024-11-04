import React, { useState } from 'react';

function Statehandling() {
  const [text, setText] = useState("Default"); 

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleReset = () => {
    setText("Default");
  };

  return (
    <div>
      <h1>
        State Handling - <span>{text}</span>
      </h1>
      
      <label>Enter Value</label>
      <br />
      <input 
        type="text" 
        id="name" 
        name="value" 
        placeholder="Enter text" 
        onChange={handleInputChange} 
      />
      
      <br />
      
      <input 
        type="button" 
        value="Reset to Default" 
        onClick={handleReset} 
      />
    </div>
  );
}

export default Statehandling;
