// ChatScreen.tsx

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose any other icon library if you prefer
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatScreen: React.FC<{route: any}> = ({route}) => {
  const userId = route.params?.userId;
  const userName = route.params?.userName;
  const userImageUrl = route.params?.userImageUrl;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {id: '1', text: 'Hello there!', sender: 'other'},
    {id: '2', text: 'Hi! How are you?', sender: 'me'},
    {id: '3', text: "I'm good, thanks for asking.", sender: 'other'},
    {id: '0', text: 'What are you up to?', sender: 'me'},
  ]);

  const handleSend = () => {
    if (message === '') {
      return;
    }
    setMessages([
      ...messages,
      {id: `${messages.length}`, text: message, sender: 'me'},
    ]);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize: 20, fontWeight: 'bold', color: '#333'}}>
        {userName}
      </Text> */}
      <FlatList
        data={messages}
        renderItem={({item}) => (
          <View
            style={[
              styles.messageBox,
              item.sender === 'me'
                ? styles.myMessageBox
                : styles.otherMessageBox,
            ]}>
            <Text
              style={[
                styles.messageText,
                {
                  color: item.sender === 'me' ? '#FFF' : '#333',
                },
              ]}>
              {item.text}
            </Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={styles.inputMContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={setMessage}
              placeholder="Aa"
            />
            <TouchableOpacity
              onPress={handleSend}
              style={[
                styles.sendButton,
                {
                  backgroundColor: 'transparentr',
                },
              ]}>
              <Icon name="send" size={20} color={Colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleSend}
          style={[
            styles.sendButton,
            {
              backgroundColor: 'transparent',
            },
          ]}>
          <Icon name="microphone" size={25} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={{height: 16}} />
      <View
        style={[
          styles.inputContainer,
          {
            justifyContent: 'center',
            alignItems: 'center',

            borderRadius: 25,
            paddingHorizontal: 10,
          },
        ]}>
        <TouchableOpacity
          onPress={handleSend}
          style={[styles.sendButton, {backgroundColor: '#efeeee'}]}>
          <Entypo name="attachment" size={20} color="#333" />
        </TouchableOpacity>
        <View style={{width: 10}} />
        <TouchableOpacity
          onPress={handleSend}
          style={[styles.sendButton, {backgroundColor: '#efeeee'}]}>
          {/* wallet  */}
          <Ionicons name="wallet" size={20} color="#333" />
        </TouchableOpacity>
        <View style={{width: 10}} />

        <TouchableOpacity
          onPress={handleSend}
          style={[
            styles.sendButton,
            {
              flexDirection: 'row',
              width: 120,
              backgroundColor: '#efeeee',
            },
          ]}>
          {/* deal ! */}
          <FontAwesome name="handshake-o" size={24} color="#333" />
          <Text
            style={{
              color: '#333',
              marginLeft: 5,
              fontWeight: 'bold',
              fontSize: 16,
              fontFamily: 'Nunito-Bold',
            }}>
            Deal !
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
  },
  messageBox: {
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  myMessageBox: {
    backgroundColor: Colors.primary,
    alignSelf: 'flex-end',
  },
  otherMessageBox: {
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Nunito-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderTopColor: '#efeeee',
  },
  input: {
    flex: 1,
    borderRadius: 25,
    paddingVertical: 8,
    backgroundColor: '#efeeee',
    marginRight: 10,
  },
  inputMContainer: {
    borderRadius: 25,
    paddingVertical: 5,
    backgroundColor: '#efeeee',
    marginRight: 10,
    flex: 1,
  },
  sendButton: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatScreen;
