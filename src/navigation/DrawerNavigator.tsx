import React from 'react';
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { SCREEN_NAMES } from '../constants';
import { SettingsScreen } from '../screens';
import { TabStackNavigator } from '.';
import { DrawerContent } from '../components';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    // <Drawer.Navigator {...props}>
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name={SCREEN_NAMES.CATEGORIES_SCREEN}
        component={TabStackNavigator}
      />

      {/* <Drawer.Screen
        name={SCREEN_NAMES.SETTINGS_SCREEN}
        component={SettingsScreen}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
