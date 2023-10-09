import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Button from '../../components/common/button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getResponsivePaddingHorizontal} from '../../utils/responsiveDesign';
import {IconTextEnhancedInput} from '../../components/common/IconTextEnhancedInput';

const Retrait = () => {
  const isRTL = false;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        padding: getResponsivePaddingHorizontal(),
      }}>
      <Text>{'accountNumber'}</Text>
      <IconTextEnhancedInput placeholder={'000 000 00000000 00 000'} />

      <View style={{height: 40}} />
      <Text>{'amount'}</Text>
      <IconTextEnhancedInput
        placeholder="850.00"
        // rightText='DH'
        rightText={isRTL ? '' : 'DH'}
        leftText={isRTL ? 'DH' : ''}
      />

      <View style={{height: 40}} />
      <Text>{'reason'}</Text>
      <IconTextEnhancedInput placeholder="Lorem ipsum dolor sit amet" />

      <View style={{height: 40}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          flex: 1,
        }}
      />

      <Button
        label={'initiateTransferOrInvoice'}
        onPress={() => {}}
        style={{backgroundColor: Colors.primary, marginTop: 20}}
        textStyle={{color: Colors.white}}
        leftIcon={
          <AntDesign name={isRTL ? 'left' : 'right'} size={18} color="white" />
        }
      />
    </View>
  );
};

export default Retrait;

const styles = StyleSheet.create({
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

  divider: {
    height: '100%',
    width: 1,
    backgroundColor: 'gray',
    marginHorizontal: 10,
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
});
