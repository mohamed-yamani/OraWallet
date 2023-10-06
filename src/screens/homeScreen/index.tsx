import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import {MainTabComponent} from './TabsComponents';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <MainTabComponent />
    </SafeAreaView>
  );
};

export default HomeScreen;
