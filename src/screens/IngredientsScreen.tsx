import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { ColorPaletteInterface, URL_CONSTANTS } from '../constants';
import { IngredientItem, IngredientItemProps } from '../components';

const IngredientsScreen = () => {
  const { themeColors } = useTheme();
  const styles = CreateStyles(themeColors);

  const [ingredients, setIngredients] = useState<IngredientItemProps[]>();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch(URL_CONSTANTS.INGREDIENTS).then(res =>
      res.json(),
    );

    setIngredients(response.meals);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ingredients}
        keyExtractor={item => item.idIngredient.toString()}
        renderItem={({ item }) => <IngredientItem {...item} />}
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

export default IngredientsScreen;
