import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
// import {
//   FontAwesome,
//   MaterialCommunityIcons,
//   Entypo,
// } from '@expo/vector-icons'; // Assuming you're using Expo
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

// import colors from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';
// import {useLayout} from '../../contexts/LayoutContext';
import TransactionItem from './TransactionItem';

import {ROUTE_NAMES} from '../../navigation/routeNames';
import Colors from '../../constants/Colors';
import {IconWithLabel} from '../../components/common/IconWithLabel';
import {useTranslation} from 'react-i18next';
import HistoriqueScreen from '../historiqueScreen';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const CARD_HEIGHT = SCREEN_WIDTH < 768 ? 151 : 250;

const WalletDashboard = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const isRTL = false;

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.iconRowContainer,
          flexDirection: isRTL ? 'row-reverse' : 'row',
        }}>
        {/* Withdraw */}
        <IconWithLabel
          onPress={() =>
            navigation.navigate(ROUTE_NAMES.PAY_WALLET_STACK.RETRAIT as never)
          }
          iconComponent={
            <FontAwesome
              name="credit-card"
              size={24}
              color={Colors.midnightGray}
            />
          }
          label={t('withdraw')}
        />
        {/* Transfer */}

        <IconWithLabel
          onPress={() =>
            navigation.navigate(ROUTE_NAMES.PAY_WALLET_STACK.TRANSFERT as never)
          }
          iconComponent={
            <MaterialCommunityIcons
              name="bank-transfer"
              size={24}
              color={Colors.midnightGray}
            />
          }
          label={t('transfer')}
        />
        {/* Pay/Send */}

        <IconWithLabel
          onPress={() =>
            navigation.navigate(
              ROUTE_NAMES.PAY_WALLET_STACK.PAIMENT_ENVOI as never,
            )
          }
          iconComponent={
            <FontAwesome name="paper-plane" size={24} color={Colors.white} />
          }
          label={t('pay')}
          iconContainerStyle={{
            backgroundColor: Colors.midnightGray,
          }}
        />

        {/* Refil */}

        <IconWithLabel
          onPress={() =>
            navigation.navigate(
              ROUTE_NAMES.PAY_WALLET_STACK.REFIL_GROUP as never,
            )
          }
          iconComponent={
            <Entypo name="wallet" size={24} color={Colors.white} />
          }
          label={t('refil')}
          iconContainerStyle={{
            backgroundColor: Colors.primary,
          }}
        />
      </View>
      <View style={styles.divider} />
      <View
        style={{
          ...styles.iconRowContainer,
          flexDirection: isRTL ? 'row-reverse' : 'row',
        }}>
        {/* Telephone */}
        <IconWithLabel
          onPress={() =>
            navigation.navigate(ROUTE_NAMES.PAY_WALLET_STACK.TELEPHONE as never)
          }
          iconComponent={<FontAwesome name="mobile" size={37} color="black" />}
          label={t('telephone')}
        />

        {/* Eau */}
        <IconWithLabel
          onPress={() =>
            navigation.navigate(ROUTE_NAMES.PAY_WALLET_STACK.PAY_WATER as never)
          }
          iconComponent={
            <MaterialCommunityIcons name="water-pump" size={24} color="black" />
          }
          label={t('eau')}
        />

        {/* Electricite */}
        <IconWithLabel
          onPress={() =>
            navigation.navigate(
              ROUTE_NAMES.PAY_WALLET_STACK.PAY_ELECTRICITY as never,
            )
          }
          iconComponent={<FontAwesome name="bolt" size={24} color="black" />}
          label={t('electricite')}
        />

        {/* Internet */}
        <IconWithLabel
          onPress={() =>
            navigation.navigate(
              ROUTE_NAMES.PAY_WALLET_STACK.PAY_INTERNET as never,
            )
          }
          iconComponent={
            <MaterialCommunityIcons name="wifi" size={24} color="black" />
          }
          label={t('internet')}
        />
      </View>
      {/* <Historique /> */}

      <View
        style={[
          styles.historiqueTitleContainer,
          {
            flexDirection: isRTL ? 'row-reverse' : 'row',
          },
        ]}>
        <Text style={styles.historiqueTitleText}>{t('historique')}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              ROUTE_NAMES.PAY_WALLET_STACK.HISTORIQUE as never,
            )
          }>
          <Text
            style={{
              color: Colors.primary,
              fontSize: 12,
              fontFamily: 'Nunito-Bold',
            }}>
            {t('seeAll')}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{height: 10}}></View>

      <ScrollView
        style={{
          width: '100%',
          height: SCREEN_HEIGHT - (CARD_HEIGHT + 380),
        }}
        showsVerticalScrollIndicator={false}>
        <HistoriqueScreen isScreen={false} />
        {/* <TransactionItem
          image={require('../../assets/images/img5.jpg')}
          name="Virgin"
          username="@jonedoe42"
          description="Lorem ipsum"
          arrowType="arrow-up-right"
          arrowColor="green"
          amount={'299'}
          date="18 Août 2023"
        />
        <TransactionItem
          image={require('../../assets/images/img4.jpg')}
          name="John Doe"
          username="@jonedoe1337"
          description="Lorem ipsum"
          arrowType="arrow-down-left"
          arrowColor="red"
          amount={'299'}
          date="18 Août 2023"
        />
        <TransactionItem
          image={require('../../assets/images/inwi.png')}
          name="Inwi"
          username="@inwi"
          description="Lorem ipsum"
          arrowType="arrow-down-left"
          arrowColor="red"
          amount={'299'}
          date="18 Août 2023"
        />
        <TransactionItem
          image={require('../../assets/images/maroc_telecom.jpg')}
          name="Maroc Telecom"
          username="@maroc-telecom42"
          description="Lorem ipsum"
          arrowType="arrow-up-right"
          arrowColor="green"
          amount={'299'}
          date="18 Août 2023"
        />
        <TransactionItem
          image={require('../../assets/images/orange.jpg')}
          name="Orange"
          username="@orange17"
          description="Lorem ipsum"
          arrowType="arrow-down-left"
          arrowColor="red"
          amount={'299'}
          date="18 Août 2023"
        />
        <TransactionItem
          image={require('../../assets/images/Onep.png')}
          name="Onep"
          username="@onep-maroc"
          description="Lorem ipsum"
          arrowType="arrow-down-left"
          arrowColor="red"
          amount={'299'}
          date="18 Août 2023"
        />
        <TransactionItem
          image={require('../../assets/images/img5.jpg')}
          name="Virgin"
          username="@jonedoe42"
          description="Lorem ipsum"
          arrowType="arrow-up-right"
          arrowColor="green"
          amount={'299'}
          date="18 Août 2023"
        />
        <TransactionItem
          image={require('../../assets/images/img4.jpg')}
          name="John Doe"
          username="@jonedoe1337"
          description="Lorem ipsum"
          arrowType="arrow-down-left"
          arrowColor="red"
          amount={'299'}
          date="18 Août 2023"
        />
        <TransactionItem
          image={require('../../assets/images/inwi.png')}
          name="Inwi"
          username="@inwi"
          description="Lorem ipsum"
          arrowType="arrow-down-left"
          arrowColor="red"
          amount={'299'}
          date="18 Août 2023"
        />
        <TransactionItem
          image={require('../../assets/images/maroc_telecom.jpg')}
          name="Maroc Telecom"
          username="@maroc-telecom42"
          description="Lorem ipsum"
          arrowType="arrow-up-right"
          arrowColor="green"
          amount={'299'}
          date="18 Août 2023"
        />
        <TransactionItem
          image={require('../../assets/images/orange.jpg')}
          name="Orange"
          username="@orange17"
          description="Lorem ipsum"
          arrowType="arrow-down-left"
          arrowColor="red"
          amount={'299'}
          date="18 Août 2023"
        />
        <TransactionItem
          image={require('../../assets/images/Onep.png')}
          name="Onep"
          username="@onep-maroc"
          description="Lorem ipsum"
          arrowType="arrow-down-left"
          arrowColor="red"
          amount={'299'}
          date="18 Août 2023"
        /> */}
        <View style={{height: 60}}></View>
      </ScrollView>
    </View>
  );
};

export default WalletDashboard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },

  iconContainer: {
    width: 46,
    height: 46,
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
  },

  iconWithTextContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    width: '25%',
    margin: 5,
  },

  divider: {
    height: 0.4,
    width: '90%',
    backgroundColor: '#D1D1D6',
    marginBottom: 10,
  },

  historiqueTitleContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    marginTop: 40,
    height: 20,
    marginBottom: -10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    color: Colors.primary,
  },

  historiqueTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.midnightGray,
  },

  labelText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
