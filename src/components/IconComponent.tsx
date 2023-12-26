import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { StyleProp, TextStyle } from 'react-native';

type FontType =
  | 'FontAwesome'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Ionicons';

interface IconComponentProps {
  type: FontType;
  name: string;
  color: string;
  size: number;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
}

const IconComponent: React.FC<IconComponentProps> = ({
  type,
  name,
  color,
  size,
  onPress,
  style,
}) => {
  let IconComponent;

  switch (type) {
    case 'FontAwesome':
      // console.log('🚀 ~ file: IconComponent: FontAwesome');
      IconComponent = FontAwesomeIcon;
      break;
    case 'MaterialIcons':
      // console.log('🚀 ~ file: IconComponent: MaterialIcons');
      IconComponent = MaterialIcon;
      break;
    case 'MaterialCommunityIcons':
      // console.log('🚀 ~ file: IconComponent: MaterialCommunityIcons');
      IconComponent = MaterialCommunityIcon;
      break;
    case 'Ionicons':
      // console.log('🚀 ~ file: IconComponent: Ionicons');
      IconComponent = IoniconsIcon;
      break;
    default:
      console.error(
        `Invalid icon type: ${type}. Supported types are 'FontAwesome', 'MaterialIcons', 'MaterialCommunityIcons', and 'Ionicons'.`,
      );
      return null;
  }

  return (
    <IconComponent
      name={name}
      size={size}
      color={color}
      onPress={onPress}
      style={style}
    />
  );
};

export default IconComponent;
