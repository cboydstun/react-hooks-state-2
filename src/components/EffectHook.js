import React, { useState, useEffect } from 'react';

function EffectHook({ name }) {
  const [count, setCount] = useState(0);
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click to update title
      </button>
      <h1>Hello {name}</h1>
    </div>
  );
}

export default EffectHook;