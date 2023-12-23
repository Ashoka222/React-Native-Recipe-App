import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SCREEN_NAMES } from '../constants';
import { CategoriesScreen, IngredientsScreen } from '../screens';
import { useTheme } from '../contexts/ThemeContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const getHeaderOptions = (title: string, icon: string) => {
  const { themeColors } = useTheme();

  return {
    headerBackTitleVisible: false,
    headerTitle: title,
    headerTintColor: themeColors.textColor,
    headerTitleStyle: { fontSize: 24 },
    headerStyle: { backgroundColor: themeColors.headerBackgroundColor },
    tabBarLabel: title,
    // tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name={icon} color={color} size={size} />,
    tabBarIcon: ({ color }) => <MaterialIcons name={icon} color={color} size={30} />,
  };
};

const TabStackNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={SCREEN_NAMES.CATEGORIES_SCREEN}
        component={CategoriesScreen}
        options={getHeaderOptions('Categories', 'category')}
      />
      <Tab.Screen
        name={SCREEN_NAMES.INGREDIENTS_SCREEN}
        component={IngredientsScreen}
        options={getHeaderOptions('Ingredient', 'food-bank')}
      />
    </Tab.Navigator>
  );
};

export default TabStackNavigator;
