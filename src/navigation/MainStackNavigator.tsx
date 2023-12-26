import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from '../screens';
import { SCREEN_NAMES } from '../constants';
import { useTheme } from '../contexts/ThemeContext';
import { DrawerNavigator } from '.';

const Stack = createNativeStackNavigator();

const getHeaderOptions = (title: string) => {
  const { themeColors } = useTheme();

  return {
    headerShown: true,
    headerBackTitleVisible: false,
    headerTitle: title,
    headerTintColor: themeColors.textColor,
    headerTitleStyle: { fontSize: 24 },
    headerStyle: { backgroundColor: themeColors.headerBackgroundColor },
  };
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={DrawerNavigator}
        name={SCREEN_NAMES.CATEGORIES_SCREEN}
        // options={getHeaderOptions('Categories')}
      />
      <Stack.Screen
        component={SettingsScreen}
        name={SCREEN_NAMES.SETTINGS_SCREEN}
        options={getHeaderOptions('Settings')}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
