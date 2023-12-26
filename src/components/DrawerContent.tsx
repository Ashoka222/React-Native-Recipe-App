// components/DrawerContent.js

import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { ColorPaletteInterface, DrawerList } from '../constants';
import { useTheme } from '../contexts/ThemeContext';
import { IconComponent } from '.';
import { NavigationService } from '../navigation';

interface DrawerListProps {
  icon: string;
  label: string;
  navigateTo: string;
}

const DrawerLayout: React.FC<DrawerListProps> = ({
  icon,
  label,
  navigateTo,
}) => {
  const { themeColors } = useTheme();

  return (
    <DrawerItem
      icon={({ color, size }) => (
        <IconComponent
          type="MaterialIcons"
          name={icon}
          color={themeColors.textColor}
          size={size}
        />
      )}
      label={label}
      onPress={() => {
        console.log(
          '🚀 ~ file: DrawerContent.tsx:40 ~ label:',
          label,
          '\nnavigateTo: ',
          navigateTo,
        );
        NavigationService.navigate(navigateTo);
      }}
      labelStyle={{ color: themeColors.textColor }}
    />
  );
};

const DrawerItems = () => {
  return DrawerList.map((item, index) => {
    return (
      <DrawerLayout
        key={index}
        icon={item.icon}
        label={item.label}
        navigateTo={item.navigateTo}
      />
    );
  });
};

const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const { themeColors } = useTheme();

  const styles = CreateStyles(themeColors);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View>
          <Image
            source={{ uri: 'https://www.themealdb.com/images/logo-small.png' }}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <DrawerItems />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const CreateStyles = (themeColors: ColorPaletteInterface) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.primaryBackgroundColor,
    },
    imageStyle: {
      width: 100,
      height: 100,
      alignSelf: 'center',
    },
  });

export default DrawerContent;
