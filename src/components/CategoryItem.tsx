import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ColorPaletteInterface } from '../constants';
import { useTheme } from '../contexts/ThemeContext';

export interface CategoryItemProps {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  const { themeColors } = useTheme();

  const styles = CreateStyles(themeColors);
  return (
    <View style={styles.container} key={idCategory}>
      <Image source={{ uri: strCategoryThumb }} style={styles.thumbnail} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{strCategory}</Text>
        <Text style={styles.description} numberOfLines={5}>
          {strCategoryDescription}
        </Text>
      </View>
    </View>
  );
};

const CreateStyles = (themeColors: ColorPaletteInterface) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.background,
      flexDirection: 'row',
      margin: 8,
      borderRadius: 8,
      shadowColor: themeColors.secondaryBackgroundColor,
      shadowOffset: { height: 3, width: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      overflow: 'hidden',
    },
    thumbnail: {
      width: 150,
      height: 150,
      alignSelf: 'center',
    },
    subContainer: {
      padding: 8,
      flex: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      paddingBottom: 5,
      color: themeColors.textColor,
    },
    description: {
      fontSize: 16,
      fontWeight: '400',
      color: themeColors.textColor,
    },
  });

export default CategoryItem;
