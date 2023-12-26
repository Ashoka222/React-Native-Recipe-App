import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { useColorScheme } from 'react-native';
import { ColorPalette, ColorPaletteInterface } from '../constants';

// Define the theme type
export type Theme = 'light' | 'dark' | 'default';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (mode: Theme) => void;
  themeColors: ColorPaletteInterface;
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
);

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>('default');

  const isSystemDarkMode = useColorScheme() === 'dark';

  const toggleTheme = (mode: Theme) => {
    switch (mode) {
      case 'default':
        setTheme('default');
        break;

      case 'dark':
        setTheme('dark');
        break;

      case 'light':
        setTheme('light');
        break;

      default:
        setTheme('light');
        break;
    }
  };

  const themeColors =
    (theme === 'default' && isSystemDarkMode) || theme === 'dark'
      ? ColorPalette.DarkMode
      : ColorPalette.LightMode;

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
    themeColors,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the theme context
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
