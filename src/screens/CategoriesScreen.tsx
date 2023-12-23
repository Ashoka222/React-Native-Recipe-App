import React, { useContext, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { ColorPaletteInterface } from '../constants';

const CategoriesScreen = () => {
  const { toggleTheme, themeColors } = useTheme();

  const styles = CreateStyles(themeColors);

  return (
    <View style={styles.container}>
      <Button title="Dark" onPress={() => toggleTheme('dark')} />
      <Button title="Light" onPress={() => toggleTheme('light')} />
      <Button title="Default" onPress={() => toggleTheme('default')} />
    </View>
  );
};

const CreateStyles = (themeColors: ColorPaletteInterface) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.primaryBackgroundColor,
    },
  });

export default CategoriesScreen;
