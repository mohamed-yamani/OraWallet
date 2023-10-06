import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/homeScreen';
import CreateWalletScreen from '../screens/createWalletScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomHeader from './NavigableHeader';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerBackground: () => (
          <View style={{height: 50, backgroundColor: Colors.white}} />
        ),
        drawerContentContainerStyle: {
          backgroundColor: 'white',
          flex: 1,
        },
      }}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          header: () => (
            <CustomHeader
              title={'Home'}
              navigation={navigation}
              showCarousel={true}
              showCloseButton={false}
            />
          ),
        })}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={({navigation}) => ({
          header: () => (
            <CustomHeader
              title={'Settings'}
              navigation={navigation}
              showCarousel={true}
              showCloseButton={false}
            />
          ),
        })}
      />
    </Drawer.Navigator>
  );
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: '100%', backgroundColor: 'yellow'}}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={CreateWalletScreen} />
            <Stack.Screen
              name="MainApp"
              component={MyDrawer}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
