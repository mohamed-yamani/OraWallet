import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import {UserCartInvoiceTabNavigator} from './userCartInvoiceTabNavigator';

const MainTabbedScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <UserCartInvoiceTabNavigator />
    </SafeAreaView>
  );
};

export default MainTabbedScreen;
