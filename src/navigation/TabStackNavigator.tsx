import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SCREEN_NAMES } from '../constants';
import { CategoriesScreen, IngredientsScreen } from '../screens';
import { useTheme } from '../contexts/ThemeContext';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { IconComponent } from '../components';
import { View } from 'react-native';

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
    tabBarIcon: ({ color, size }) => {
      return (
        <IconComponent
          type="MaterialIcons"
          name={icon}
          color={color}
          size={size}
        />
      );
    },
  };
};

const TabStackNavigator: React.FC = () => {
  const navigator = useNavigation();
  const { themeColors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: themeColors.background,
        },
        tabBarActiveBackgroundColor: themeColors.background,
        tabBarInactiveBackgroundColor: themeColors.background,
        tabBarActiveTintColor: themeColors.activeTintColor,
        tabBarInactiveTintColor: themeColors.inactiveTintColor,
        headerLeft: () => {
          return (
            <IconComponent
              type="MaterialIcons"
              name={'menu'}
              color={themeColors.primaryColor}
              size={30}
              onPress={() => navigator.dispatch(DrawerActions.openDrawer())}
              style={{ paddingLeft: 10 }}
            />
          );
        },
        headerRight: () => {
          return (
            <View style={{ flexDirection: 'row' }}>
              <IconComponent
                type="MaterialIcons"
                name={'search'}
                color={themeColors.primaryColor}
                size={30}
                onPress={() => console.log('Search')}
                style={{ paddingRight: 10 }}
              />
              <IconComponent
                type="FontAwesome"
                name={'heart-o'}
                color={themeColors.primaryColor}
                size={30}
                // onPress={() => navigator.dispatch(DrawerActions.openDrawer())}
                style={{ paddingRight: 10 }}
              />
            </View>
          );
        },
      }}
    >
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
