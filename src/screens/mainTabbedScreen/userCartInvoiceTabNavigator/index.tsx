import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View, Dimensions} from 'react-native';
// import { useTranslation } from 'react-i18next';
// import { useLayout } from '../../../contexts/LayoutContext';
import InvoiceListComponent from './invoiceListComponent';
import UserListComponent from './userListComponent';
import ShoppingCartComponent from './shoppingCartComponent';
import Colors from '../../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
import FacturesIcon from '../../../assets/images/svgs/factures.svg';
import PaniersIcon from '../../../assets/images/svgs/paniers.svg';
import PersonnesIcon from '../../../assets/images/svgs/personnes.svg';

const Tab = createMaterialTopTabNavigator();

export function UserCartInvoiceTabNavigator() {
  const {t} = useTranslation();
  const screenWidth = Dimensions.get('window').width;
  const isRTL = false;

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 0,
        height: 100,
        width: screenWidth,
        backgroundColor: Colors.white,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
      }}>
      <Tab.Navigator
        initialRouteName="Personnes"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#F2F2F7',
            height: 40,
            borderRadius: 8,
            marginHorizontal: 15,
          },

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            marginBottom: 8,
          },

          tabBarIndicatorStyle: {
            height: 33,
            marginBottom: 3,
            borderRadius: 8,
            backgroundColor: '#A6A6AF',

            width: '30%',
            marginLeft: '1%',
            marginRight: '1%',
          },

          tabBarItemStyle: {
            marginLeft: 15, // margin at the start of each tab
            marginRight: 15, // margin at the end of each tab
          },

          tabBarPressColor: '#F2F2F7',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(0, 0, 0, 1)',
        }}>
        {!isRTL ? (
          <>
            <Tab.Screen
              name="Personnes"
              component={UserListComponent}
              options={
                getTabOptions(
                  {
                    label: t('personnes'),
                    iconComponent: (
                      <PersonnesIcon width={12} height={14} fill={'black'} />
                    ),
                  },
                  isRTL,
                ) as any
              }
            />
            <Tab.Screen
              name="Paniers"
              component={ShoppingCartComponent}
              options={
                getTabOptions(
                  {
                    label: t('paniers'),
                    iconComponent: (
                      <PaniersIcon width={16} height={14} fill={'black'} />
                    ),
                  },
                  isRTL,
                ) as any
              }
            />
            <Tab.Screen
              name="Factures"
              component={InvoiceListComponent}
              options={
                getTabOptions(
                  {
                    label: t('factures'),
                    iconComponent: (
                      <FacturesIcon width={10} height={14} fill={'black'} />
                    ),
                  },
                  isRTL,
                ) as any
              }
            />
          </>
        ) : (
          <>
            <Tab.Screen
              name="Factures"
              component={InvoiceListComponent}
              options={
                getTabOptions(
                  {
                    label: t('factures'),
                    iconComponent: (
                      <Ionicons
                        name="receipt"
                        size={18}
                        color={Colors.primary}
                      />
                    ),
                  },
                  isRTL,
                ) as any
              }
            />
            <Tab.Screen
              name="Paniers"
              component={ShoppingCartComponent}
              options={
                getTabOptions(
                  {
                    label: t('paniers'),
                    iconComponent: (
                      <Ionicons name="cart" size={18} color={Colors.primary} />
                    ),
                  },
                  isRTL,
                ) as any
              }
            />
            <Tab.Screen
              name="Personnes"
              component={UserListComponent}
              options={
                getTabOptions(
                  {
                    label: t('personnes'),
                    iconComponent: (
                      <Ionicons name="add" size={18} color={Colors.primary} />
                    ),
                  },
                  isRTL,
                ) as any
              }
            />
          </>
        )}
      </Tab.Navigator>
    </View>
  );
}

const getTabOptions = (
  {label, iconComponent}: {label: string; iconComponent: any},
  isRTL: boolean,
) => ({
  tabBarLabel: label,
  tabBarIcon: ({color, focused}: {color: string; focused: boolean}) => (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: isRTL ? 'row-reverse' : 'row',
      }}>
      {React.cloneElement(iconComponent, {
        fill: focused ? 'white' : 'black',
      })}
      <Text
        style={{
          color,
          fontSize: 10,
          marginTop: 2,
          width: 70,
          textAlign: 'center',
          fontFamily: 'Nunito-Black',
        }}>
        {label.toLowerCase()}
      </Text>
    </View>
  ),
});
