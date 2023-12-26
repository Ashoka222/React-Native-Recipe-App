import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ColorPaletteInterface } from '../constants';
import { useTheme } from '../contexts/ThemeContext';
import { NavigationService } from '../navigation';

export interface IngredientItemProps {
  idIngredient: number;
  strIngredient: string;
  strDescription: string;
  strType: string;
  // onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const IngredientItem: React.FC<IngredientItemProps> = ({
  idIngredient,
  strIngredient,
  strDescription,
  strType,
  // onPress,
}) => {
  const { themeColors } = useTheme();
  const styles = CreateStyles(themeColors);

  const onPressIngredient = () => {
    NavigationService.navigate('SettingsScreen');
  };

  return (
    <TouchableOpacity
      style={styles.container}
      key={idIngredient}
      onPress={onPressIngredient}
    >
      {/* <Image source={{ uri: strIngredientThumb }} style={styles.thumbnail} /> */}
      <View style={styles.subContainer}>
        <Text style={styles.title}>{strIngredient}</Text>
        <Text style={styles.description} numberOfLines={5}>
          {strDescription}
        </Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.button}>Click me</Text>
      </TouchableOpacity>
    </TouchableOpacity>
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
    button: {
      width: 100,
      height: 44,
      backgroundColor: 'red',
    },
  });

export default IngredientItem;
