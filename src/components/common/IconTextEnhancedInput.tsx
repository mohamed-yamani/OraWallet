import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';
import React from 'react';

export const IconTextEnhancedInput = ({
  icon,
  rightIcon,
  rightText,
  leftText,
  onRightIconPress,
  onChange,
  svgComponent,

  ...props
}: {
  icon?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  placeholder?: string;
  rightText?: string;
  leftText?: string;
  inputType?: string;
  keyboardType?: any;
  secureTextEntry?: boolean;
  onChange?: (text: string) => void;
  svgComponent?: any;
}) => {
  return (
    <View style={styles.inputContainer}>
      {svgComponent ? (
        svgComponent
      ) : (
        <MaterialIcons name={icon as any} size={24} color={Colors.primary} />
      )}

      {icon && <HorizontalLine />}

      {leftText && <Text style={styles.rightText}>{leftText}</Text>}

      <TextInput
        style={styles.textInput}
        {...props}
        placeholderTextColor={Colors.silverGray}
        onChangeText={onChange}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          <MaterialIcons name={rightIcon as any} size={24} color="gray" />
        </TouchableOpacity>
      )}
      {rightText && <Text style={styles.rightText}>{rightText}</Text>}
    </View>
  );
};

export const HorizontalLine = () => {
  return (
    <>
      <View style={{width: 12}} />
      <View style={{width: 0.5, height: 16, backgroundColor: 'grey'}} />
      <View style={{width: 12}} />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontFamily: 'Nunito-Regular',
  },

  rightText: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'Nunito-Regular',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D1D6',
    borderRadius: 8,
    paddingHorizontal: 20,
    height: 48,
    marginTop: 10,
  },
});
