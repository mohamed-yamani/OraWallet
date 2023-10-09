import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import React from 'react';
import Colors from '../../constants/Colors';

export const IconWithLabel = ({
  iconComponent,
  label,
  iconContainerStyle = {},
  onPress,
}: {
  iconComponent: React.ReactNode;
  label: string;
  iconContainerStyle?: any;
  onPress?: () => void;
}) => (
  <TouchableOpacity
    style={styles.iconWithTextContainer}
    onPress={() => onPress && onPress()}>
    <View style={{...styles.iconContainer, ...iconContainerStyle}}>
      {iconComponent}
    </View>
    <Text style={styles.labelText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconContainer: {
    width: 46,
    height: 46,
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconWithTextContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    width: '25%',
    margin: 5,
  },

  labelText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
