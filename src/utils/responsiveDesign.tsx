import {Dimensions} from 'react-native';

export const getResponsivePaddingHorizontal = () => {
  const screenWidth = Dimensions.get('window').width;

  if (screenWidth < 360) {
    // Small Phones
    return 10;
  } else if (screenWidth < 400) {
    // Average Phones
    return 20;
  } else if (screenWidth < 768) {
    // Large Phones to Small Tablets
    return 50;
  } else if (screenWidth < 1024) {
    // Tablets
    return 150;
  } else {
    // Large Tablets and above
    return 200;
  }
};
