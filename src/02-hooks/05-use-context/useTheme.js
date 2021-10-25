import { createContext, useContext } from 'react';

const themes = {
  light: {
    text: 'rgba(0, 0, 0, 0.9)',
    background: 'white',
  },
  dark: {
    text: 'white',
    background: 'rgba(0, 0, 0, 0.9)',
  },
};

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, themes, useTheme };
