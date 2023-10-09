import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const NameIcon = ({
  name,
  lastName,
  icon,
  image,
}: {
  name: string;
  lastName: string;
  icon?: string;
  image?: string;
}) => {
  const getRandomColor = () => {
    const colors = [
      '#AD70B7',
      '#FFC034',
      '#FF5733',
      '#33FF57',
      '#3380FF',
      '#FF3380',
      '#808080',
      '#46B2E0',
      '#E092B1',
      '#6CD9B3',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  if (image != null) {
    // Replace with your icon rendering logic.
    // Example: <Icon name={icon} size={64} color="black" />
    return (
      <View style={styles.iconContainer}>
        <Image
          source={image ? image : require('../../assets/images/pr2.png')}
          style={{width: 64, height: 64, borderRadius: 12}}
        />
      </View>
    );
  }

  const initials = `${name[0]}${lastName[0]}`;

  return (
    <View style={[styles.iconContainer, {backgroundColor: getRandomColor()}]}>
      <Text style={styles.initials}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  initials: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Nunito-Black',
  },
});

export default NameIcon;
