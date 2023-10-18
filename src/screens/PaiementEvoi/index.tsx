// PaimentEnvoi
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DirectionalChevron from '../../components/DirectionalChevron';
// import FacturesIcon from '../../../assets/images/svgs/factures.svg';
// import PaniersIcon from '../../../assets/images/svgs/paniers.svg';
// import PersonnesIcon from '../../../assets/images/svgs/personnes.svg';
import {useState} from 'react';
import React from 'react';
import Colors from '../../constants/Colors';
import MoneyTransferModal from '../../components/common/modals/MoneyTransferModal';
import PayBasketModal from '../../components/common/modals/PayBasketModal';
import PayBillModal from '../../components/common/modals/PayBillModal';
import ConfirmationCodeInputModal from '../../components/common/modals/confirmationCodeInputModal';
import ConfirmationModal from '../../components/common/modals/ConfirmationModal';
import {useTranslation} from 'react-i18next';

// import ConfirmationCodeInputModal from '../../components/ConfirmationCodeInputModal';
// import ConfirmationModal from '../../../components/modals/ConfirmationModal';
// import PayBasketModal from '../../../components/modals/PayBasketModal';
// import PayBillModal from '../../../components/modals/PayBillModal';

const PaimentEnvoi = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [
    verifyPaymentConfirmationModalVisible,
    setverifyPaymentConfirmationModalVisible,
  ] = useState(false);

  const [
    confirmPaymentConfirmationModalVisible,
    setconfirmPaymentConfirmationModalVisible,
  ] = useState(false);

  const {t} = useTranslation();

  const [basketModalVisible, setBasketModalVisible] = useState(false);

  //  PayBillModal
  const [payBillModalVisible, setPayBillModalVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.spacer} />
      <Text style={styles.descriptionText}>{t('paymentTypePrompt')}</Text>
      <View style={styles.divider} />

      <MoneyTransferModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)} // Function to close the modal
        onContinue={() => {
          console.log('onContinue pressed');
          setverifyPaymentConfirmationModalVisible(true);
          setModalVisible(false);
        }} // Function to close the modal
      />

      <PayBasketModal
        visible={basketModalVisible}
        onClose={() => setBasketModalVisible(false)}
        onPay={() => {
          console.log('onPay pressed');
          setverifyPaymentConfirmationModalVisible(true);
          setBasketModalVisible(false);
        }}
      />

      <PayBillModal
        visible={payBillModalVisible}
        onClose={() => setPayBillModalVisible(false)}
        onContinue={() => {
          console.log('onPay pressed');
          setverifyPaymentConfirmationModalVisible(true);
          setPayBillModalVisible(false);
        }}
      />

      <ConfirmationCodeInputModal
        visible={verifyPaymentConfirmationModalVisible}
        onClose={() => setverifyPaymentConfirmationModalVisible(false)} // Function to close the modal
        onContinue={() => {
          console.log('onContinue pressed');
          setconfirmPaymentConfirmationModalVisible(true);
          setverifyPaymentConfirmationModalVisible(false);
        }} // Function to close the modal
      />

      <ConfirmationModal
        visible={confirmPaymentConfirmationModalVisible}
        onClose={() => setconfirmPaymentConfirmationModalVisible(false)} // Function to close the modal
      />

      <OptionCard
        // icon={<PersonnesIcon width={16} height={16} fill={colors.silverGray} />}
        icon={<Ionicons name="person" size={24} color="#AEAEB2" />}
        text={t('sendMoneyOrPayPerson')}
        onPress={() => {
          console.log('sendMoneyOrPayPerson');
          setModalVisible(true);
        }}
      />
      <OptionCard
        text={t('payCurrentBasket')}
        onPress={() => {
          console.log('payCurrentBasket');
          setBasketModalVisible(true);
        }}
        // icon={<PaniersIcon width={16} height={16} fill={colors.silverGray} />
        icon={<Ionicons name="person" size={24} color="#AEAEB2" />}
      />
      <OptionCard
        text={t('payBill')}
        onPress={() => {
          console.log('payBill');
          setPayBillModalVisible(true);
        }}
        // icon={<FacturesIcon width={16} height={16} fill={colors.silverGray} />}
        icon={<Ionicons name="person" size={24} color="#AEAEB2" />}
      />
    </View>
  );
};

const OptionCard = ({
  icon,
  text,
  onPress,
}: {
  icon: any;
  text: string;
  onPress: () => void;
}) => {
  // const {isRTL} = useLayout();
  const isRTL = false;

  return (
    <TouchableOpacity onPress={onPress} style={{width: '100%'}}>
      <View
        style={{
          ...styles.optionContainer,
          flexDirection: isRTL ? 'row-reverse' : 'row',
        }}>
        <View style={styles.iconContainer}>
          {icon ? icon : <Ionicons name="person" size={24} color="#AEAEB2" />}
        </View>
        <Text style={styles.optionText}>{text}</Text>
        <View
          style={{
            ...styles.chevronContainer,
            alignItems: isRTL ? 'flex-start' : 'flex-end',
          }}>
          <DirectionalChevron />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PaimentEnvoi;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },

  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  spacer: {
    height: 10,
  },

  divider: {
    height: 10,
  },

  descriptionText: {
    color: Colors.midnightGray,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Nunito-Regular',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
    paddingHorizontal: 16,
  },

  optionContainer: {
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    // height: 50,
    marginHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
    justifyContent: 'flex-start',
    gap: 10,
  },

  iconContainer: {
    height: 35,
    width: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
    backgroundColor: 'transparent',
    borderColor: '#AEAEB2',
  },

  optionText: {
    color: Colors.midnightGray,
    fontSize: 13,
    fontWeight: '700',
    fontFamily: 'Nunito-Black',
  },

  chevronContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },

  facturesScreenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  title: {
    color: 'black',
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Nunito-Regular',
  },

  factureContainer: {
    alignItems: 'center',
    height: 70,
    marginHorizontal: 15,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },

  factureImageContainer: {
    height: 60,
    width: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#AEAEB2',
    overflow: 'hidden',
  },

  factureImage: {
    height: 40,
    width: 40,
  },

  factureTextBox: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },

  factureTitle: {
    color: Colors.midnightGray,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    fontWeight: 'bold',
  },

  factureDescription: {
    color: Colors.midnightGray,
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
  },

  facturePriceBox: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  facturePriceRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  factureItemCount: {
    color: Colors.gray,
    fontSize: 12,
    fontWeight: 'bold',
    paddingRight: 3,
  },

  facturePriceWhole: {
    color: Colors.midnightGray,
    fontSize: 16,
    fontFamily: 'Nunito-ExtraBold',
    paddingLeft: 2,
  },

  facturePriceDecimal: {
    color: Colors.midnightGray,
    fontSize: 10,
    fontFamily: 'Nunito-ExtraBold',
    paddingRight: 3,
    marginBottom: 3,
  },

  scrollView: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    width: '100%',
  },
});
