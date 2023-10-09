import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTE_NAMES} from './routeNames';
import CustomHeader from './NavigableHeader';
import HistoriqueScreen from '../screens/historiqueScreen';
import WalletDashboard from '../screens/walletDashboard';
import PaimentEnvoi from '../screens/PaiementEvoi';
import Retrait from '../screens/Retrait';
import TransfertScreen from '../screens/transfertScreen';
import {RefilStackGroup} from './RefilStackNavigation';

// Stack Navigation for PayWallet
const PayWalletStack = createNativeStackNavigator();

export function PayWalletStackGroup() {
  const isRTL = false;

  return (
    <>
      <PayWalletStack.Navigator
        screenOptions={{
          //   headerShown: falrse,
          animation: 'fade',
        }}>
        <PayWalletStack.Screen
          name={ROUTE_NAMES.PAY_WALLET_STACK.PAY_WALLET}
          component={WalletDashboard}
          options={({navigation}) => ({
            header: () => (
              <CustomHeader
                title={'payWallet'}
                navigation={navigation}
                showCarousel={true}
                showCloseButton={false}
              />
            ),
          })}
        />

        <PayWalletStack.Screen
          name={ROUTE_NAMES.PAY_WALLET_STACK.HISTORIQUE}
          component={HistoriqueScreen}
          options={({navigation}) => ({
            animation: 'fade',

            header: () => (
              <CustomHeader
                title={'historique'}
                navigation={navigation}
                showCarousel={false}
                showCloseButton={true}
              />
            ),
          })}
        />

        <PayWalletStack.Screen
          name={ROUTE_NAMES.PAY_WALLET_STACK.PAIMENT_ENVOI}
          component={PaimentEnvoi}
          options={({navigation}) => ({
            animation: 'fade',

            header: () => (
              <CustomHeader
                title={'paimentEnvoi'}
                navigation={navigation}
                showCarousel={true}
                showCloseButton={true}
              />
            ),
          })}
        />

        <PayWalletStack.Screen
          name={ROUTE_NAMES.PAY_WALLET_STACK.RETRAIT}
          component={Retrait}
          options={({navigation}) => ({
            animation: 'fade',

            header: () => (
              <CustomHeader
                title={'retrait'}
                navigation={navigation}
                showCarousel={true}
                showCloseButton={true}
              />
            ),
          })}
        />

        <PayWalletStack.Screen
          name={ROUTE_NAMES.PAY_WALLET_STACK.TRANSFERT}
          component={TransfertScreen}
          options={({navigation}) => ({
            animation: 'fade',

            header: () => (
              <CustomHeader
                title={'transfert'}
                navigation={navigation}
                showCarousel={true}
                showCloseButton={true}
              />
            ),
          })}
        />

        <PayWalletStack.Screen
          name={ROUTE_NAMES.PAY_WALLET_STACK.REFIL_GROUP}
          component={RefilStackGroup}
          options={({navigation}) => ({
            animation: 'fade',
            headerShown: false,

            header: () => (
              <CustomHeader
                title={'refil'}
                navigation={navigation}
                showCarousel={true}
                showCloseButton={true}
              />
            ),
          })}
        />

        {/* <PayWalletStack.Screen
          name={ROUTE_NAMES.PAY_WALLET_STACK.TELEPHONE}
          component={PayTelephone}
          options={({navigation}) => ({
            animation: 'fade',

            header: () => (
              <CustomHeader
                title={'payTelephone'}
                navigation={navigation}
                showCarousel={true}
                showCloseButton={true}
              />
            ),
          })}
        /> */}

        {/* PayWater */}
        {/* <PayWalletStack.Screen
          name={ROUTE_NAMES.PAY_WALLET_STACK.PAY_WATER}
          component={PayWater}
          options={({navigation}) => ({
            animation: 'fade',
            header: () => (
              <CustomHeader
                title={'payWater'}
                navigation={navigation}
                showCarousel={true}
                showCloseButton={true}
              />
            ),
          })}
        /> */}

        {/* PayElectricity */}
        {/* <PayWalletStack.Screen
          name={ROUTE_NAMES.PAY_WALLET_STACK.PAY_ELECTRICITY}
          component={PayElectricity}
          options={({navigation}) => ({
            animation: 'fade',
            header: () => (
              <CustomHeader
                title={'payElectricity'}
                navigation={navigation}
                showCarousel={true}
                showCloseButton={true}
              />
            ),
          })}
        /> */}

        {/* PayInternet */}
        {/* <PayWalletStack.Screen
          name={ROUTE_NAMES.PAY_WALLET_STACK.PAY_INTERNET}
          component={PayInternet}
          options={({navigation}) => ({
            animation: 'fade',
            header: () => (
              <CustomHeader
                title={'payTelephone'}
                navigation={navigation}
                showCarousel={true}
                showCloseButton={true}
              />
            ),
          })}
        /> */}
      </PayWalletStack.Navigator>
    </>
  );
}
