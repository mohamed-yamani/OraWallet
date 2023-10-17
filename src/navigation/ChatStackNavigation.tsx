import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE_NAMES} from './routeNames';
import CustomHeader from './NavigableHeader';
import React from 'react';
import ChatScreen from '../screens/ChatScreen';
import UserListScreen from '../screens/UserListScreen';

const ChatStack = createNativeStackNavigator();

export const ChatStackGroup = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name={ROUTE_NAMES.CHAT_STACK.CONTACTS}
        component={UserListScreen}
        options={({navigation}) => ({
          animation: 'fade',
          header: () => (
            <CustomHeader
              title={'Contacts'}
              navigation={navigation}
              showCarousel={false}
              showCloseButton={false}
            />
          ),
        })}
      />
      <ChatStack.Screen
        name={ROUTE_NAMES.CHAT_STACK.CHAT}
        component={ChatScreen}
        options={({navigation, route}) => ({
          // <- Note the addition of "route" here
          animation: 'fade',
          header: () => {
            const userName = route.params?.userName;
            return (
              <CustomHeader
                title={userName || 'Chat'} // Use the userName if it exists, otherwise default to 'Chat'
                navigation={navigation}
                showCarousel={false}
                showCloseButton={true}
              />
            );
          },
        })}
      />
    </ChatStack.Navigator>
  );
};
