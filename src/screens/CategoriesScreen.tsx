import React, { useContext, useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { ColorPaletteInterface, URL_CONSTANTS } from '../constants';
import { CategoryItem, CategoryItemProps } from '../components';

const CategoriesScreen: React.FC = () => {
  const { themeColors } = useTheme();
  const styles = CreateStyles(themeColors);

  const [categories, setCategories] = useState<CategoryItemProps[]>();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch(URL_CONSTANTS.CATEGORIES).then(res =>
      res.json(),
    );

    setCategories(response.categories);
  };

  return (
    <View style={[styles.container]}>
      <FlatList
        data={categories}
        keyExtractor={item => item.idCategory.toString()}
        renderItem={({ item }) => <CategoryItem {...item} />}
      />
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
