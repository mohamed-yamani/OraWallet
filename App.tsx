import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import 'react-native-gesture-handler';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n/i18n';
import {WalletProvider} from './src/contexts/WalletProvider';

const App = () => {
  return (
    <WalletProvider>
      <I18nextProvider i18n={i18n}>
        <RootNavigator />
      </I18nextProvider>
    </WalletProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
