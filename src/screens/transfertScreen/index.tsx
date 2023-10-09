import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import AntDesign from '@expo/vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {getResponsivePaddingHorizontal} from '../../utils/responsiveDesign';
import {IconTextEnhancedInput} from '../../components/common/IconTextEnhancedInput';
import Button from '../../components/common/button';
import Colors from '../../constants/Colors';

const Transfert = () => {
  // const {t} = useTranslation();
  const isRTL = false;

  return (
    <View style={styles.container}>
      <Text>{'fromAccount'}</Text>
      <IconTextEnhancedInput placeholder={'000 000 00000000 00 000'} />

      <View style={{height: 40}} />
      <Text>{'toAccount'}</Text>
      <IconTextEnhancedInput placeholder={'000 000 00000000 00 000'} />

      <View style={{height: 40}} />
      <Text>{'transferAmount'}</Text>
      <IconTextEnhancedInput
        placeholder="850.00"
        rightText={isRTL ? '' : 'DH'}
        leftText={isRTL ? 'DH' : ''}
      />

      {/* <Spacer height={40} /> */}
      <View style={{height: 40}} />
      <Text>{'transferReason'}</Text>
      <IconTextEnhancedInput placeholder="For monthly expenses" />

      <View style={{flex: 1}} />
      <Button
        label={'initiateTransfer'}
        onPress={() => {}}
        style={styles.buttonStyle}
        textStyle={styles.buttonTextStyle}
        leftIcon={
          <AntDesign name={isRTL ? 'left' : 'right'} size={18} color="white" />
        }
      />
    </View>
  );
};

export default Transfert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: getResponsivePaddingHorizontal(),
  },
  buttonStyle: {
    backgroundColor: Colors.primary,
    marginTop: 20,
  },
  buttonTextStyle: {
    color: Colors.white,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Nunito-Regular',
  },

  rightText: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'Nunito-Regular',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D1D6',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    height: 50,
    marginTop: 10,
  },
});
