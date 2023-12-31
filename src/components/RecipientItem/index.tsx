import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import DirectionalChevron from '../DirectionalChevron';
import Colors from '../../constants/Colors';

const RecipientItem = ({
  name,
  description,
  imageSource,
}: {
  name: string;
  description: string;
  imageSource: any;
}) => {
  const isRTL = false;
  return (
    <View
      style={[
        styles.factureContainer,
        {
          flexDirection: isRTL ? 'row-reverse' : 'row',
        },
      ]}>
      <View style={styles.iconContainer}>
        <Image source={imageSource} style={{height: 48, width: 48}} />
      </View>
      <View
        style={[
          styles.textContainer,
          {
            alignItems: isRTL ? 'flex-end' : 'flex-start',
          },
        ]}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
          {name}
        </Text>
        <View style={{height: 3}} />
        <Text style={{color: 'black', fontSize: 12}}>{description}</Text>
      </View>
      <View style={{flex: 1, alignItems: isRTL ? 'flex-start' : 'flex-end'}}>
        <DirectionalChevron />
      </View>
    </View>
  );
};

export default RecipientItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },

  factureContainer: {
    alignItems: 'center',
    height: 72,
    marginHorizontal: 15,
    padding: 12,
    backgroundColor: '#FAFAFA',
    borderRadius: 24,
    marginTop: 10,

    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },

  lastDestinatairesTitle: {
    color: Colors.midnightGray,
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  iconContainer: {
    height: 48,
    width: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#AEAEB2',
    overflow: 'hidden',
  },

  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
});
