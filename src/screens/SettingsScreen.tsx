import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Theme, useTheme } from '../contexts/ThemeContext';
import { ColorPaletteInterface } from '../constants';
import { IconComponent } from '../components';

interface ThemeOptionsProps {
  mode: Theme;
  label: string;
}

const ThemeOptions: ThemeOptionsProps[] = [
  { mode: 'default', label: 'Default' },
  { mode: 'light', label: 'Light' },
  { mode: 'dark', label: 'Dark' },
];

const SettingsScreen: React.FC = () => {
  const { theme, toggleTheme, themeColors } = useTheme();
  const styles = CreateStyles(themeColors);

  const isActiveTheme = (selectedTheme: Theme) => theme === selectedTheme;

  const ThemeItem: React.FC<ThemeOptionsProps> = ({ mode, label }) => {
    const isActive = isActiveTheme(mode);
    return (
      <TouchableOpacity
        style={styles.themeItem}
        onPress={() => {
          toggleTheme(mode);
        }}
      >
        <Text style={styles.themeTitleTextStyle}>{label}</Text>
        <IconComponent
          type="MaterialIcons"
          name={isActive ? 'radio-button-checked' : 'radio-button-unchecked'}
          color={themeColors.activeTintColor}
          size={25}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>Theme</Text>
      <FlatList
        data={ThemeOptions}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item, index }) => <ThemeItem key={index} {...item} />}
      />
    </View>
  );
};

const CreateStyles = (themeColors: ColorPaletteInterface) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.primaryBackgroundColor,
      padding: 16,
    },
    titleTextStyle: {
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 8,
      color: themeColors.textColor,
    },
    themeItem: {
      padding: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    themeTitleTextStyle: {
      fontSize: 18,
      fontWeight: '400',
      color: themeColors.textColor,
    },
  });

export default SettingsScreen;
