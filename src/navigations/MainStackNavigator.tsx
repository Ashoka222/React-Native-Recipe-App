import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, IngredientsScreen } from '../screens';
import { SCREEN_NAMES } from '../constants';
import { useTheme } from '../contexts/ThemeContext';

const Stack = createNativeStackNavigator();

const getHeaderOptions = (title: string) => {
  const { themeColors } = useTheme();

  return {
    headerBackTitleVisible: false,
    headerTitle: title,
    headerTintColor: themeColors.textColor,
    headerTitleStyle: { fontSize: 24 },
    headerStyle: { backgroundColor: themeColors.headerBackgroundColor },
  };
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_NAMES.CATEGORIES_SCREEN}>
      <Stack.Screen
        component={CategoriesScreen}
        name={SCREEN_NAMES.CATEGORIES_SCREEN}
        options={getHeaderOptions('Categories')}
      />
      <Stack.Screen
        component={IngredientsScreen}
        name={SCREEN_NAMES.INGREDIENTS_SCREEN}
        options={getHeaderOptions('Ingredients')}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
