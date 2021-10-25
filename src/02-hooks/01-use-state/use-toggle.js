import { useState } from 'react';

export const useToggle = () => {
  const [isActive, setActive] = useState();
  return { isActive, toggle: () => setActive(!isActive) };
};
