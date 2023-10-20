import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import PersonIcon from '../../assets/images/svgs/person.svg';
import KeySvg from '../../assets/images/svgs/key.svg';
import AtSvg from '../../assets/images/svgs/at.svg';
import PhoneSvg from '../../assets/images/svgs/phoneIcon.svg';

import Colors from '../../constants/Colors';
import Button from '../../components/common/button';
import CountryCodePicker from '../../components/CountryCodePicker';
import GenderSelector from '../../components/common/GenderSelector';
import ConfirmationCodeInputModal from '../../components/common/modals/confirmationCodeInputModal';
import {postToWallet} from '../../api/api';
import WalletContext from '../../contexts/WalletContext';
import {styles} from './styles';
import {
  HorizontalLine,
  IconTextEnhancedInput,
} from '../../components/common/IconTextEnhancedInput';
import GenderSelection from '../../components/GenderSelection';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const CreateWalletScreen: React.FC = () => {
  const context = useContext(WalletContext);

  if (!context) {
    throw new Error('WalletContext must be used within a WalletProvider');
  }

  const {createWalletDataToSend} = context;
  const {t} = useTranslation();
  const navigation = useNavigation();

  if (!createWalletDataToSend) {
    throw new Error('WalletContext must be used within a WalletProvider');
  }

  const [state, setState] = useState({
    showConfirmPassword: false,
    modalVisible: false,
    showPassword: false,
    showPin: false,
    phone: '',
    firstName: '',
    lastName: '',
    walletPin: '',
    emailAddress: '',
    countryCode: '+212',
    password: '',
    transactionId: '',
    confirmPassword: '',
    selectGender: 'None',
  });

  const areRequiredFieldsCompleted = () => {
    return (
      state.firstName &&
      state.lastName &&
      state.walletPin &&
      state.emailAddress &&
      state.phone &&
      state.password &&
      state.confirmPassword &&
      state.password === state.confirmPassword
    );
  };

  const updateState = (updates: Partial<typeof state>) =>
    setState(prev => ({...prev, ...updates}));

  const createWalletDataBody = {
    emailAddress: state.emailAddress,
    firstName: state.firstName,
    lastName: state.lastName,
    password: state.password,
    phone: `${state.countryCode}${state.phone}`,
    pin: state.walletPin,
    titlePrefix: state.selectGender,
  };

  const makePostRequest = async (endpoint: string, body: any) => {
    try {
      const responseData = await postToWallet(
        createWalletDataToSend.walletId,
        body,
        endpoint,
      );
      if (responseData?.transactionId) {
        updateState({transactionId: responseData.transactionId});
      }
      console.log('responseData', responseData);
    } catch (error) {
      console.error('Failed to fetch wallet data:', error);
    }
  };

  const creatWallet = () => makePostRequest('auth/login', createWalletDataBody);
  const confirmWallet = () =>
    makePostRequest('auth/login/validate', {
      ...createWalletDataBody,
      otp: createWalletDataToSend.otp,
      transactionId: state.transactionId,
    });

  const isRTL = false;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      enabled={true}
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 65 : -240}
      accessibilityViewIsModal={true}
      accessibilityLiveRegion="polite"
      accessibilityRole="alert"
      accessibilityLabel="alert"
      accessibilityHint="alert"
      accessibilityIgnoresInvertColors={false}
      accessibilityState={{disabled: false}}
      accessibilityElementsHidden={false}
      importantForAccessibility="auto"
      aria-expanded={true}>
      <ScrollView
        style={{flex: 1, backgroundColor: Colors.white}}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.container,
            {
              paddingTop: 30,
              alignItems: isRTL ? 'flex-end' : 'flex-start',
              // height: screenHeight,
              flex: 1,
            },
          ]}>
          <ConfirmationCodeInputModal
            onClose={() => updateState({modalVisible: false})}
            visible={state.modalVisible}
            onContinue={() => {
              confirmWallet();
              updateState({modalVisible: false});
              navigation.navigate('MainApp' as never);
            }}
          />

          <Text
            style={[
              styles.title,
              {textAlign: isRTL ? 'right' : 'left', marginTop: 0},
            ]}>
            {t('createWallet')}
          </Text>

          <Text
            style={[styles.headerText, {textAlign: isRTL ? 'right' : 'left'}]}>
            {t('createWalletSubtitle')}
          </Text>

          <View style={styles.formInputWrapper}>
            <IconTextEnhancedInput
              svgComponent={<PersonIcon width={14} height={16} />}
              icon="person"
              placeholder={t('firstName')}
              onChange={value => updateState({firstName: value})}
            />

            <IconTextEnhancedInput
              svgComponent={<PersonIcon width={14} height={16} />}
              icon="person"
              placeholder={t('lastName')}
              onChange={value => updateState({lastName: value})}
            />

            <IconTextEnhancedInput
              svgComponent={<KeySvg width={14} height={16} />}
              icon="vpn-key"
              placeholder={t('walletPin')}
              secureTextEntry={!state.showPin}
              rightIcon={state.showPin ? 'visibility-off' : 'visibility'}
              onRightIconPress={() => updateState({showPin: !state.showPin})}
              onChange={value => updateState({walletPin: value})}
            />

            {/* <GenderSelector
              selectedGender={state.selectGender}
              onGenderChange={value => updateState({selectGender: value})}
            /> */}
            <GenderSelection
              selectedGender={state.selectGender}
              onGenderChange={(value: string) =>
                updateState({selectGender: value})
              }
            />

            <IconTextEnhancedInput
              svgComponent={<AtSvg width={16} height={16} />}
              icon="email"
              placeholder={t('emailAddress')}
              keyboardType="email-address"
              onChange={value => updateState({emailAddress: value})}
            />

            {/* Phone Number */}
            {phoneInput()}

            {/* Password */}
            <IconTextEnhancedInput
              svgComponent={<KeySvg width={14} height={16} />}
              icon="lock"
              placeholder={t('password')}
              secureTextEntry={!state.showPassword}
              rightIcon={state.showPassword ? 'visibility-off' : 'visibility'}
              onRightIconPress={() =>
                updateState({showPassword: !state.showPassword})
              }
              onChange={value => updateState({password: value})}
            />

            {/* Confirm Password */}
            <IconTextEnhancedInput
              svgComponent={<KeySvg width={14} height={16} />}
              icon="lock"
              placeholder={t('confirmPassword')}
              secureTextEntry={!state.showConfirmPassword}
              rightIcon={
                state.showConfirmPassword ? 'visibility-off' : 'visibility'
              }
              onRightIconPress={() =>
                updateState({showConfirmPassword: !state.showConfirmPassword})
              }
              onChange={value => updateState({confirmPassword: value})}
            />

            <View style={{height: 70}} />
          </View>
        </View>
      </ScrollView>
      {submitButton()}
    </KeyboardAvoidingView>
  );

  function phoneInput() {
    return (
      <View style={[styles.inputContainer, {width: screenWidth - 40}]}>
        <PhoneSvg width={16} height={16} />
        <HorizontalLine />
        <View style={{width: 60, height: 20}}>
          <CountryCodePicker
            setCountryCode={(value: string) =>
              updateState({countryCode: value})
            }
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>{`   `}</Text>
          <View style={{height: '100%', backgroundColor: 'gray'}} />
          <TextInput
            placeholder="0 00 00 00 00"
            keyboardType="number-pad"
            value={state.phone}
            onChangeText={value => updateState({phone: value})}
            style={styles.input}
          />
        </View>
      </View>
    );
  }

  function submitButton() {
    return (
      <View
        style={{
          position: 'absolute' as 'absolute',
          bottom: 0,
          width: '100%',
          paddingHorizontal: 20,
          backgroundColor: Colors.white,
        }}>
        <Button
          label={t('continue')}
          onPress={() => {
            if (areRequiredFieldsCompleted()) {
              updateState({modalVisible: true});
              creatWallet();
            } else {
              Alert.alert(
                t('Incomplete Information'),
                t(
                  'Please fill out all required fields and ensure the passwords match.',
                ),
                [
                  {
                    text: t('OK'),
                    onPress: () => console.log('OK Pressed'),
                  },
                ],
                {cancelable: true},
              );
            }
          }}
          style={{
            backgroundColor: areRequiredFieldsCompleted()
              ? Colors.primary
              : '#d3d3d3',
            marginBottom: 5,
            marginTop: 20,
          }}
          leftIcon={
            <MaterialIcons
              name={isRTL ? 'arrow-back-ios' : 'arrow-forward-ios'}
              size={18}
              color="white"
            />
          }
        />
      </View>
    );
  }
};

export default CreateWalletScreen;
