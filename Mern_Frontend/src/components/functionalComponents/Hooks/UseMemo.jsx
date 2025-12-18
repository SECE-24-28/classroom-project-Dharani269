import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const expensiveCalculation = useMemo(() => {
    console.log('Expensive calculation running...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <h2>UseMemo Hook Example</h2>
      <p>Count: {count}</p>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type something..."
      />
      <p>Input: {input}</p>
    </div>
  );
};

export default UseMemo;