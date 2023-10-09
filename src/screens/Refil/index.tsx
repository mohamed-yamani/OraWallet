import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import AntDesign from '@expo/vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getResponsivePaddingHorizontal} from '../../utils/responsiveDesign';
import {IconTextEnhancedInput} from '../../components/common/IconTextEnhancedInput';
import RecipientScrollList from '../../components/RecipientScrollList';
import Button from '../../components/common/button';
import Colors from '../../constants/Colors';
import {useTranslation} from 'react-i18next';

const Refil = () => {
  const isRTL = false;
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <RecipientScrollList />

      {/* <Spacer height={40} /> */}
      <Text>{t('somme')}</Text>
      <IconTextEnhancedInput
        placeholder="1000.00"
        rightText={isRTL ? '' : 'DH'}
        leftText={isRTL ? 'DH' : ''}
      />

      {/* <Spacer height={40} /> */}
      <View style={{height: 40}} />
      <Text>{t('raison')}</Text>
      <IconTextEnhancedInput placeholder={t('raison')} />

      <View style={{flex: 1}} />

      <Button
        label={t('initiateRefil')}
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

export default Refil;

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
