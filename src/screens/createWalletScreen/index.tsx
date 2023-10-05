import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
// import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import React, {useState} from 'react';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import CountryPicker from 'react-native-country-picker-modal';
// import {useTranslation} from 'react-i18next';
// import {useLayout} from '../../contexts/LayoutContext';
import {getResponsivePaddingHorizontal} from '../../utils/responsiveDesign';
// import ErrorModal from '../../../components/modals/ErrorModal';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/common/button';
import {IconTextEnhancedInput} from '../../components/common/IconTextEnhancedInput';
// import {IconTextEnhancedInput} from '../../components/common/IconTextEnhancedInput';
// import {ROUTE_NAMES} from '../../navigation/routeNames';
// import {CountryCode} from '../../types';

const screenWith = Dimensions.get('window').width;

const CreateWalletScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countryCode, setCountryCode] = useState('MA');
  const [countryCallingCode, setCountryCallingCode] = useState('212'); // Morocco [MA]
  const [phone, setPhone] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const isRTL = false;
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {paddingTop: 65, alignItems: isRTL ? 'flex-end' : 'flex-start'},
      ]}>
      {/* <ConfirmationModal 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)} // Function to close the modal
            /> */}

      {/* <PaymentConfirmationModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} // Function to close the modal
      /> */}

      {/* <ErrorModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)} // Function to close the modal
      /> */}

      {/* <SuccessPurchaseModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)} // Function to close the modal
      /> */}

      <Text
        style={[
          styles.title,
          {textAlign: isRTL ? 'right' : 'left', marginTop: 0},
        ]}>
        {'createWallet'}
      </Text>

      <Text style={[styles.headerText, {textAlign: isRTL ? 'right' : 'left'}]}>
        {'createWalletSubtitle'}
      </Text>

      <View
        style={[
          styles.formInputWrapper,
          {paddingHorizontal: getResponsivePaddingHorizontal()},
        ]}>
        {/* Nom complet */}
        <IconTextEnhancedInput icon="person" placeholder={'fullName'} />

        {/* Adresse email */}
        <IconTextEnhancedInput
          icon="email"
          placeholder={'emailAddress'}
          keyboardType="email-address"
        />

        {/* phone number */}
        {/* <View
          style={[
            styles.inputContainer,
            {width: screenWith - getResponsivePaddingHorizontal() * 2},
          ]}>
          <MaterialIcons name="phone" size={24} color={Colors.primary} />
          <View style={styles.divider} />
          <CountryPicker
            countryCode={countryCode as CountryCode}
            withFlag
            withFilter
            withFlagButton
            withCountryNameButton={false}
            withCallingCodeButton={false}
            onSelect={country => {
              setCountryCode(country.cca2);
              setCountryCallingCode(country.callingCode[0]);
            }}
            containerButtonStyle={styles.flagContainer}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16, marginHorizontal: 2}}>
              {` +${countryCallingCode}`}
            </Text>
            <View style={{height: '100%', backgroundColor: 'gray'}} />
            <TextInput
              placeholder="0 00 00 00 00"
              keyboardType="number-pad"
              value={phone}
              onChangeText={setPhone}
              style={styles.input}
            />
          </View>
        </View> */}

        {/* Mot de passe */}
        <IconTextEnhancedInput
          icon="lock"
          placeholder={'password'}
          secureTextEntry={!showPassword}
          rightIcon={showPassword ? 'eye-off' : 'eye'}
          onRightIconPress={() => setShowPassword(!showPassword)}
        />

        {/* Confirmer mot de passe */}
        <IconTextEnhancedInput
          icon="lock"
          placeholder={'confirmPassword'}
          secureTextEntry={!showConfirmPassword}
          rightIcon={showConfirmPassword ? 'eye-off' : 'eye'}
          onRightIconPress={() => setShowConfirmPassword(!showConfirmPassword)}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            flex: 1,
          }}
        />

        <Button
          label={'continue'}
          // onPress={() => setModalVisible(true)}
          onPress={() => navigation.navigate('MainApp')}
          style={{backgroundColor: Colors.primary}}
          leftIcon={
            // <MaterialIcons
            //   name={isRTL ? 'arrow-back-ios' : 'arrow-forward-ios'}
            //   size={18}
            //   color="white"
            // />
            <Icon
              name={isRTL ? 'arrow-back-ios' : 'arrow-forward-ios'}
              size={18}
              color="white"
            />
          }
        />

        <View style={{height: getResponsivePaddingHorizontal()}}></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            height: 20,
          }}
        />
      </View>
    </View>
  );
};

export default CreateWalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D1D6',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 50,
    marginTop: 10,
    backgroundColor: Colors.white,
  },

  formInputWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },

  title: {
    color: Colors.midnightGray,
    fontSize: 22,
    fontFamily: 'Nunito-Bold',
    marginHorizontal: 20,
  },

  headerText: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: Colors.midnightGray,
    marginTop: 73,
    marginBottom: 20,
    marginHorizontal: 20,
  },

  input: {
    // flex: 1,
    marginLeft: 10,
    height: 40,
  },

  textInput: {
    flex: 1,
    marginLeft: 10,
  },

  divider: {
    height: '100%',
    width: 1,
    backgroundColor: 'gray',
    marginHorizontal: 10,
  },

  flagContainer: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },

  flagStyle: {
    height: 25,
    width: 40,
    borderRadius: 5,
  },

  scrollView: {
    paddingVertical: 10,
    paddingRight: 10,
    height: 100,
    width: '100%',
  },

  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: '#d2e7df',
  },
  initials: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.primary,
    fontFamily: 'Nunito-Black',
  },
});
