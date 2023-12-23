import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { ColorPaletteInterface } from '../constants';

const IngredientsScreen = () => {
  const { toggleTheme, themeColors } = useTheme();

  const styles = CreateStyles(themeColors);

  return <View style={styles.container}></View>;
};

const CreateStyles = (themeColors: ColorPaletteInterface) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.primaryBackgroundColor,
      marginTop: 60,
    },
  });

export default IngredientsScreen;
