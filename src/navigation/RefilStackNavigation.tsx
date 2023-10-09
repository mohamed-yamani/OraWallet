// Refil Stack Navigation
import React from 'react';
import {ROUTE_NAMES} from './routeNames';
import CustomHeader from './NavigableHeader';
import Destinataires from '../components/Destinataires';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Refil from '../screens/Refil';

const RefilStack = createNativeStackNavigator();

export const RefilStackGroup = () => {
  const isRTL = false;

  return (
    <RefilStack.Navigator>
      <RefilStack.Screen
        name={ROUTE_NAMES.REFIL_STACK.REFIL}
        component={Refil}
        options={({navigation}) => ({
          animation: 'fade',
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
      <RefilStack.Screen
        name={ROUTE_NAMES.REFIL_STACK.DESTINATAIRES}
        component={Destinataires}
        options={({navigation}) => ({
          animation: 'fade',
          header: () => (
            <CustomHeader
              title={'destinataires'}
              navigation={navigation}
              showCloseButton={true}
              showCarousel={false}
            />
          ),
        })}
      />
    </RefilStack.Navigator>
  );
};
