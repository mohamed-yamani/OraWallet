import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAMES} from '../../navigation/routeNames';
import React from 'react';
import Colors from '../../constants/Colors';
import {useTranslation} from 'react-i18next';

const TransactionItem = ({
  image,
  name,
  username,
  description,
  arrowType,
  arrowColor,
  amount,
  date,
}: {
  image: any;
  name: string;
  username: string;
  description: string;
  arrowType: any;
  arrowColor: string;
  amount: string;
  date: string;
}) => {
  const isRTL = false;
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        flexDirection: isRTL ? 'row-reverse' : 'row',
        backgroundColor: Colors.white,
      }}
      onPress={() =>
        navigation.navigate(ROUTE_NAMES.PAY_WALLET_STACK.PAIMENT_ENVOI as never)
      }>
      <View style={styles.imageView}>
        <Image source={image} style={styles.image} />
      </View>
      <View
        style={{
          ...styles.textView,
          alignItems: isRTL ? 'flex-end' : 'flex-start',
        }}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.usernameText}>{username}</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.spacer} />
      <View style={styles.endView}>
        <Text style={styles.sendText}>{t('send')}</Text>
        <View style={styles.endInnerView}>
          <Feather name={arrowType} size={18} color={arrowColor} />
          <Text style={styles.amountText}>{amount}</Text>
          <Text style={styles.currencyText}>.00 DH</Text>
        </View>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 70,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'flex-start',
    gap: 10,
  },

  imageView: {
    height: 60,
    width: 60,
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#AEAEB2',
    overflow: 'hidden',
  },
  image: {
    height: 60,
    width: 60,
  },
  textView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
  },

  nameText: {
    color: Colors.midnightGray,
    fontSize: 14,
    fontWeight: 'bold',
    width: 150,
  },
  usernameText: {
    color: Colors.gray,
    fontSize: 12,
    fontWeight: 'normal',
    width: 150,
  },
  descriptionText: {
    color: Colors.grayDark,
    fontSize: 12,
    fontWeight: 'normal',
  },
  endView: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  sendText: {
    color: Colors.gray,
    fontSize: 8,
    fontWeight: 'bold',
    paddingRight: 3,
  },
  endInnerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  amountText: {
    color: Colors.midnightGray,
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 2,
  },
  currencyText: {
    color: Colors.midnightGray,
    fontSize: 8,
    fontWeight: 'bold',
    paddingRight: 3,
    paddingTop: 1,
  },
  dateText: {
    color: Colors.midnightGray,
    fontSize: 8,
    paddingRight: 3,
  },
  spacer: {
    flex: 1,
  },
});

export default TransactionItem;
