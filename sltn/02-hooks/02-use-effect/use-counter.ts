import { useState, useEffect } from 'react';

export const useCounter = (): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setCount(count + 1), 1000);
    return () => window.clearTimeout(timer);
  }, [count]);

  return count;
};
