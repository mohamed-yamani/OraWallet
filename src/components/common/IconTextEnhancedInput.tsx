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
}) => {
  return (
    <View style={styles.inputContainer}>
      {/* <MaterialIcons name={icon as any} size={24} color={Colors.primary} /> */}
      <MaterialIcons name={icon as any} size={24} color={Colors.primary} />

      {icon && <HorizontalLine />}

      {leftText && <Text style={styles.rightText}>{leftText}</Text>}

      <TextInput
        style={styles.textInput}
        {...props}
        placeholderTextColor={Colors.silverGray}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          {/* <Ionicons name={rightIcon as any} size={24} color="gray" /> */}
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
    paddingHorizontal: 24,
    height: 50,
    marginTop: 10,
  },
});
