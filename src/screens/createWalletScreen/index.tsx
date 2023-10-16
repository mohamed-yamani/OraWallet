import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React, {useContext, useState} from 'react';
import Colors from '../../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import {getResponsivePaddingHorizontal} from '../../utils/responsiveDesign';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/common/button';
import {
  HorizontalLine,
  IconTextEnhancedInput,
} from '../../components/common/IconTextEnhancedInput';
import CountryCodePicker from '../../components/CountryCodePicker';
import GenderSelector from '../../components/common/GenderSelector';
import ConfirmationModal from '../../components/common/modals/ConfirmationModal';
import ConfirmationCodeInputModal from '../../components/common/modals/confirmationCodeInputModal';
import {postToWallet} from '../../api/api';
import {CreateWalletType} from '../../types/wallet';
import WalletContext from '../../contexts/WalletContext';

const screenWith = Dimensions.get('window').width;

const CreateWalletScreen = () => {
  const context = React.useContext(WalletContext);
  if (!context) {
    throw new Error('WalletContext must be used within a WalletProvider');
  }

  // const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [walletPin, setWalletPin] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [CountryCode, setCountryCode] = useState('+212');
  const [password, setPassword] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectGender, setSelectGender] = useState('MME');

  const {createWalletDataToSend} = context;

  const isRTL = false;
  const navigation = useNavigation();

  const {t} = useTranslation();

  // const walletId = '0606060606';
  const createWalletDataBody = {
    emailAddress: emailAddress,
    firstName: firstName,
    lastName: lastName,
    password: password,
    phone: CountryCode + phone,
    pin: walletPin,
    titlePrefix: selectGender,
  };

  const creatWallet = async () => {
    try {
      const responseData = await postToWallet(
        createWalletDataToSend.walletId,
        createWalletDataBody,
        'auth/login',
      );

      console.log('create wallet data ... ', responseData);

      if (responseData && responseData.transactioId) {
        setTransactionId(responseData.transactioId);
        console.log(`transactionId is : ${responseData.transactioId}`);
      }
    } catch (error) {
      console.error('Failed to fetch wallet data:', error);
    }
  };

  const confirmationDataToSend = {
    emailAddress: emailAddress,
    firstName: firstName,
    lastName: lastName,
    password: password,
    phone: CountryCode + phone,
    pin: walletPin,
    titlePrefix: selectGender,
    otp: createWalletDataToSend.otp,
    transactionId: transactionId,
  };

  const confirmWallet = async () => {
    console.log(
      'confirmation data to send ... ... ... ...',
      confirmationDataToSend,
    );

    try {
      const responseData = await postToWallet(
        createWalletDataToSend.walletId,
        confirmationDataToSend,
        'auth/login/validate',
      );
      console.log('confirm wallet data ... ', responseData);
      setTransactionId(responseData.transactionId);
    } catch (error) {
      console.error('Failed to fetch wallet data:', error);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {paddingTop: 45, alignItems: isRTL ? 'flex-end' : 'flex-start'},
      ]}>
      {/* <ConfirmationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)} // Function to close the modal
      /> */}

      <ConfirmationCodeInputModal
        onClose={() => setModalVisible(false)}
        visible={modalVisible}
        onContinue={() => {
          confirmWallet();
          console.log(`otp is ----> : ${createWalletDataToSend.otp}`);
          setModalVisible(false);
          navigation.navigate('MainApp' as never);
        }}
      />

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
        {t('createWallet')}
      </Text>

      <Text style={[styles.headerText, {textAlign: isRTL ? 'right' : 'left'}]}>
        {t('createWalletSubtitle')}
      </Text>

      <View
        style={[
          styles.formInputWrapper,
          {paddingHorizontal: getResponsivePaddingHorizontal()},
        ]}>
        {/* First name */}
        <IconTextEnhancedInput
          icon="person"
          placeholder={t('firstName')}
          onChange={setFirstName}
        />

        {/* Last name */}
        <IconTextEnhancedInput
          icon="person"
          placeholder={t('lastName')}
          onChange={setLastName}
        />

        {/* Wallet PIN */}
        <IconTextEnhancedInput
          icon="lock"
          placeholder={t('walletPin')}
          secureTextEntry={!showPassword}
          rightIcon={showPassword ? 'visibility-off' : 'visibility'}
          onRightIconPress={() => setShowPassword(!showPassword)}
          onChange={setWalletPin}
        />

        {/* Gender */}
        <GenderSelector
          selectedGender={selectGender}
          onGenderChange={setSelectGender}
        />

        {/* Adresse email */}
        <IconTextEnhancedInput
          icon="email"
          placeholder={t('emailAddress')}
          keyboardType="email-address"
          onChange={setEmailAddress}
        />

        {/* phone number */}
        <View
          style={[
            styles.inputContainer,
            {width: screenWith - getResponsivePaddingHorizontal() * 2},
          ]}>
          <MaterialIcons name="phone" size={24} color={Colors.primary} />
          <HorizontalLine />

          <View style={{width: 60, height: 20}}>
            <CountryCodePicker setCountryCode={setCountryCode} />
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16, marginHorizontal: 2}}>{` `}</Text>
            <View style={{height: '100%', backgroundColor: 'gray'}} />
            <TextInput
              placeholder="0 00 00 00 00"
              keyboardType="number-pad"
              value={phone}
              onChangeText={setPhone}
              style={styles.input}
            />
          </View>
        </View>

        {/* Mot de passe */}
        <IconTextEnhancedInput
          icon="lock"
          placeholder={t('password')}
          secureTextEntry={!showPassword}
          rightIcon={showPassword ? 'visibility-off' : 'visibility'}
          onRightIconPress={() => setShowPassword(!showPassword)}
          onChange={setPassword}
        />

        {/* Confirmer mot de passe */}
        <IconTextEnhancedInput
          icon="lock"
          placeholder={t('confirmPassword')}
          secureTextEntry={!showConfirmPassword}
          rightIcon={showConfirmPassword ? 'visibility-off' : 'visibility'}
          onRightIconPress={() => setShowConfirmPassword(!showConfirmPassword)}
          onChange={setConfirmPassword}
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
          label={t('continue')}
          // onPress={() => setModalVisible(true)}
          onPress={() => {
            setModalVisible(true);
            creatWallet();

            console.log(
              `data is : firstName : ${firstName} : lastName : ${lastName} : walletPin : ${walletPin} : emailAddress : ${emailAddress} : phoneNumber : ${
                CountryCode + phone
              } : password : ${password} : confirmPassword : ${confirmPassword} gender : ${selectGender}`,
            );
            // navigation.navigate('MainApp' as never);
          }}
          style={{backgroundColor: Colors.primary, marginTop: 20}}
          leftIcon={
            // <MaterialIcons
            //   name={isRTL ? 'arrow-back-ios' : 'arrow-forward-ios'}
            //   size={18}
            //   color="white"
            // />
            <MaterialIcons
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
    paddingHorizontal: 22,
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
    marginTop: 35,
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
