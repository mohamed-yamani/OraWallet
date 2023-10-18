import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Keyboard,
} from 'react-native';
// import { AntDesign } from '@expo/vector-icons'; // Assuming you're using Expo
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountdownTimer from '../../../components/CountdownTimer';
import Colors from '../../../constants/Colors';
import Button from '../button';
import {useTranslation} from 'react-i18next';
import WalletContext from '../../../contexts/WalletContext';

export default function ConfirmationCodeInputModal(props: {
  visible: boolean;
  onClose: () => void;
  onContinue?: () => void;
}) {
  const context = React.useContext(WalletContext);
  if (!context) {
    throw new Error('WalletContext must be used within a WalletProvider');
  }
  const {createWalletDataToSend} = context;
  const {t} = useTranslation();
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [code, setCode] = useState(['', '', '', '']);
  const input1 = useRef<TextInput | null>(null);
  const input2 = useRef<TextInput | null>(null);
  const input3 = useRef<TextInput | null>(null);
  const input4 = useRef<TextInput | null>(null);
  const input5 = useRef<TextInput | null>(null);
  const input6 = useRef<TextInput | null>(null);

  const handleTextChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;

    setCode(newCode);
    createWalletDataToSend.setOtp(newCode.join(''));

    if (text.length > 0) {
      switch (index) {
        case 0:
          if (input2.current) {
            input2.current.focus();
          }
          break;
        case 1:
          if (input3.current) {
            input3.current.focus();
          }
          break;
        case 2:
          if (input4.current) {
            input4.current.focus();
          }
          break;
        case 3:
          if (input5.current) {
            input5.current.focus();
          }
          break;
        case 4:
          if (input6.current) {
            input6.current.focus();
          }
          break;
        default:
          break;
      }
    }
  };

  const handleBackspace = (index: number) => {
    if (code[index] === '') {
      switch (index) {
        case 1:
          if (input1.current) {
            input1.current.focus();
          }
          break;
        case 2:
          if (input2.current) {
            input2.current.focus();
          }
          break;
        case 3:
          if (input3.current) {
            input3.current.focus();
          }
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (props.visible) {
      setTimeout(() => {
        if (input1.current) {
          input1.current.focus();
        }
      }, 100);
    }

    if (Platform.OS === 'ios') {
      const keyboardWillShowListener = Keyboard.addListener(
        'keyboardWillShow',
        () => {
          setKeyboardOpen(true);
        },
      );
      const keyboardWillHideListener = Keyboard.addListener(
        'keyboardWillHide',
        () => {
          setKeyboardOpen(false);
        },
      );

      return () => {
        keyboardWillShowListener.remove();
        keyboardWillHideListener.remove();
      };
    }
  }, [props.visible]);

  return (
    <Modal visible={props.visible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View
          style={[
            styles.dialog,
            {
              top: keyboardOpen ? -60 : 0,
            },
          ]}>
          <TouchableOpacity style={styles.closeButton} onPress={props.onClose}>
            <AntDesign name="close" size={24} color={Colors.midnightGray} />
          </TouchableOpacity>

          <Text style={styles.title}>{t('enterCode')}</Text>

          <View style={styles.codeInputContainer}>
            <TextInput
              ref={input1}
              style={styles.input}
              value={code[0]}
              maxLength={1}
              placeholder="_"
              placeholderTextColor={Colors.gray}
              onChangeText={text => handleTextChange(text, 0)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') handleBackspace(0);
              }}
              keyboardType="number-pad"
            />
            <TextInput
              ref={input2}
              style={styles.input}
              value={code[1]}
              placeholder="_"
              placeholderTextColor={Colors.gray}
              maxLength={1}
              onChangeText={text => handleTextChange(text, 1)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') handleBackspace(1);
              }}
              keyboardType="number-pad"
            />
            <TextInput
              ref={input3}
              style={styles.input}
              value={code[2]}
              maxLength={1}
              placeholder="_"
              placeholderTextColor={Colors.gray}
              onChangeText={text => handleTextChange(text, 2)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') handleBackspace(2);
              }}
              keyboardType="number-pad"
            />
            <TextInput
              ref={input4}
              style={styles.input}
              value={code[3]}
              maxLength={1}
              placeholder="_"
              placeholderTextColor={Colors.gray}
              onChangeText={text => handleTextChange(text, 3)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') handleBackspace(3);
              }}
              keyboardType="number-pad"
            />
            <TextInput
              ref={input5}
              style={styles.input}
              value={code[4]}
              maxLength={1}
              placeholder="_"
              placeholderTextColor={Colors.gray}
              onChangeText={text => handleTextChange(text, 4)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') handleBackspace(4);
              }}
              keyboardType="number-pad"
            />
            <TextInput
              ref={input6}
              style={styles.input}
              value={code[5]}
              maxLength={1}
              placeholder="_"
              placeholderTextColor={Colors.gray}
              onChangeText={text => handleTextChange(text, 5)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') handleBackspace(5);
              }}
              keyboardType="number-pad"
            />
          </View>

          <Text style={styles.resendCode}>
            {t('resendSMSCode')} {'  '}
            <CountdownTimer />
          </Text>

          <Button
            label={t('continue')}
            onPress={props.onContinue || props.onClose}
            style={{backgroundColor: Colors.primary, marginTop: 20}}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // This will give a dim background when the modal is open
  },

  dialog: {
    width: 350,
    height: 360,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 24,
    alignItems: 'center',
  },

  closeButton: {
    alignSelf: 'flex-end',
    height: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    marginBottom: 10,
  },

  codeInputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },

  title: {
    width: '90%',
    textAlign: 'center',
    color: '#48484A',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Nunito-Regular',
    lineHeight: 22,
  },

  resendCode: {
    color: '#20B37C',
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    fontWeight: '600',
    lineHeight: 22,
    marginTop: 20,
  },

  input: {
    width: 40,
    height: 60,
    margin: 5,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Nunito-Black',
    borderWidth: 0.5,
    borderColor: Colors.gray,
    borderRadius: 12,
  },
});
