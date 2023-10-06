import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';

const DirectionalChevron = ({size = 18, color = Colors.primary}) => {
  // const {isRTL} = useLayout();
  const isRTL = false;
  const iconName = isRTL ? 'chevron-back' : 'chevron-forward';

  return <Ionicons name={iconName} size={size} color={color} />;
};

export default DirectionalChevron;
