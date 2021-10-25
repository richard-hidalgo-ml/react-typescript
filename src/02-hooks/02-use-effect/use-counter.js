import { useState, useEffect } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => window.setTimeout(() => setCount(count + 1), 1000), [count]);

  return count;
};
