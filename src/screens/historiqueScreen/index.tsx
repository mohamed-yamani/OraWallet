import {StyleSheet, Text, View, Image, ImageProps} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import React, {useEffect, useState} from 'react';
import SearchComponent from './SearchComponent';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Transaction, TransactionsData, Wallet} from '../../types/wallet';
import {postToWallet} from '../../api/api';
import convertDate from '../../utils/dateUtils';

interface ItemProps {
  title: string;
  amount: number;
  date: string;
  photo: ImageProps;
  transactionType: String;
  type: String;
  isScreen?: boolean;
}

type IconName = 'arrow-up-right' | 'arrow-down-left';

interface TransactionDetails {
  iconName: IconName;
  iconColor: string;
  statusText: string;
}

const TransactionItem = ({
  title,
  amount,
  date,
  photo,
  transactionType,
  type,
  isScreen,
}: ItemProps) => {
  const {iconName, iconColor, statusText} = getTransactionDetails(
    transactionType,
  ) as TransactionDetails;
  const isRTL = false;
  // TransactionsData

  return (
    <View
      style={[styles.cardContainer, {paddingHorizontal: isScreen ? 20 : 0}]}>
      <View style={styles.imageContainer}>
        <Image source={photo} style={styles.userImage} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{title}</Text>
        <Text style={styles.usernameText}>@jonedoe42</Text>
        <Text style={styles.descriptionText}>{type}</Text>
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.smallGrayText}>{statusText}</Text>
        <View
          style={[
            styles.transactionDetails,
            {
              flexDirection: isRTL ? 'row-reverse' : 'row',
            },
          ]}>
          <Feather
            name={iconName}
            size={16}
            color={iconColor}
            style={{
              paddingTop: 3,
            }}
          />
          <Text style={styles.amountMain}>{amount}</Text>
          <Text style={styles.amountDecimal}>.00 DH</Text>
        </View>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </View>
  );
};

const getTransactionDetails = (transactionType: String) => {
  if (transactionType === 'D') {
    return {
      iconName: 'minus',
      iconColor: 'red',
      statusText: 'envoyé',
    };
  } else {
    return {
      iconName: 'plus',
      iconColor: 'green',
      statusText: 'reçu',
    };
  }
};

interface Props {
  isScreen: boolean;
}

const HistoriqueScreen = ({isScreen = true}: Props = {isScreen: true}) => {
  const [walletData, setWalletData] = useState<TransactionsData | null>(null);
  const [transactionsData, setTransactionsData] = useState<Transaction[]>([]);

  const walletId = '0606060606';
  const dataToSend = {
    // ... your data to send
  };

  const fetchWalletData = async () => {
    try {
      const responseData = await postToWallet(
        walletId,
        dataToSend,
        'wallet/0606060606/transactions?accountNumber=234123412341343143241&size=75',
      );
      setWalletData(responseData as TransactionsData);
      setTransactionsData(responseData.transactions);
      console.log('historique data ... ', responseData);
    } catch (error) {
      console.error('Failed to fetch wallet data:', error);
    }
  };

  useEffect(() => {
    fetchWalletData();
  }, []);

  if (!walletData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.mainContainer}>
      {isScreen && (
        <SearchComponent
          setTransactionsData={setTransactionsData}
          transactionsData={walletData.transactions}
        />
      )}
      <View style={styles.spacer}></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%'}}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        {transactionsData.map((transaction, index) => {
          return (
            <TransactionItem
              key={index}
              title={transaction.firstName + ' ' + transaction.lastName}
              amount={transaction.amount as unknown as number}
              date={convertDate(transaction.statusdate)}
              photo={require('../../assets/images/img5.jpg')}
              transactionType={transaction.transSign}
              type={transaction.type}
              isScreen={isScreen}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HistoriqueScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },

  spacer: {
    height: 10,
  },

  cardContainer: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: 70,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    // paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },

  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#AEAEB2',
    overflow: 'hidden',
  },

  userImage: {
    height: 60,
    width: 60,
  },

  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },

  nameText: {
    color: '#1C1C1E',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Nunito-Regular',
  },

  usernameText: {
    color: '#AEAEB2',
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Nunito-Regular',
  },

  descriptionText: {
    color: '#48484A',
    fontSize: 12,
    fontWeight: '100',
    fontFamily: 'Nunito-Light',
  },

  statusContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  smallGrayText: {
    color: Colors.gray,
    fontSize: 8,
    fontWeight: 'bold',
    paddingRight: 3,
    fontFamily: 'Nunito-Black',
  },

  transactionDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    fontFamily: 'Nunito-Black',
  },

  amountMain: {
    color: '#1C1C1E',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 2,
    fontFamily: 'Nunito-SemiBold',
  },

  amountDecimal: {
    color: Colors.midnightGray,
    fontSize: 8,
    fontWeight: 'bold',
    paddingRight: 3,
    paddingTop: 4,
    fontFamily: 'Nunito-SemiBold',
  },

  dateText: {
    color: Colors.midnightGray,
    fontSize: 8,
    paddingRight: 3,
    fontFamily: 'Nunito-Black',
    fontWeight: '100',
  },
});
