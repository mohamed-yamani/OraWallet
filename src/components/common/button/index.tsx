import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import styles from './styles';
// import {useLayout} from '../../contexts/LayoutContext';

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  style,
  textStyle,
  disabled = false,
  disabledStyle,
  leftIcon,
  rightIcon,
}) => {
  //   const {isRTL} = useLayout();
  const isRTL = false;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        disabled ? disabledStyle : null,
        isRTL ? {flexDirection: 'row-reverse'} : null,
      ]}
      onPress={onPress}
      disabled={disabled}>
      {rightIcon ? rightIcon : <View style={{width: 24}} />}
      <View style={styles.buttonTextContainer}>
        <Text style={[styles.buttonText, textStyle]}>{label}</Text>
      </View>
      {leftIcon ? leftIcon : <View style={{width: 24}} />}
    </TouchableOpacity>
  );
};

export default Button;
