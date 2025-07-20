// src/components/Counter.jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '0 10px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '0 10px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: '0 10px' }}>Reset</button>
    </div>
  );
}

export default Counter;
