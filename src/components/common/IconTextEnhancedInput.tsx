import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
      <Icon name={icon as any} size={24} color={Colors.primary} />

      {leftText && <Text style={styles.rightText}>{leftText}</Text>}

      <TextInput style={styles.textInput} {...props} />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          {/* <Ionicons name={rightIcon as any} size={24} color="gray" /> */}
          <Icon name={rightIcon as any} size={24} color="gray" />
        </TouchableOpacity>
      )}
      {rightText && <Text style={styles.rightText}>{rightText}</Text>}
    </View>
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
    paddingVertical: 10,
    paddingHorizontal: 24,
    height: 50,
    marginTop: 10,
  },
});
