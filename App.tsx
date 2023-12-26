import React from 'react';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { MainStackNavigator, navigationRef } from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function App(): React.JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeProvider>
        <MainStackNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
