import { createContext, useContext } from 'react';

interface Theme {
  text: string;
  background: string;
}

const themes: Record<string, Theme> = {
  light: {
    text: 'rgba(0, 0, 0, 0.9)',
    background: 'white',
  },
  dark: {
    text: 'white',
    background: 'rgba(0, 0, 0, 0.9)',
  },
};

const ThemeContext = createContext<Theme>(themes.light);

const useTheme = (): Theme => useContext<Theme>(ThemeContext);

export { ThemeContext, themes, useTheme };
