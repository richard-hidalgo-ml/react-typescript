import { useState } from 'react';

interface UseToggle {
  isActive: boolean;
  toggle: () => void;
}

export const useToggle = (): UseToggle => {
  const [isActive, setActive] = useState(false);
  return { isActive, toggle: () => setActive(!isActive) };
};
