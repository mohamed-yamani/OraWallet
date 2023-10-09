import {StyleSheet, Text, View, Image, ImageProps} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import React from 'react';
import SearchComponent from './SearchComponent';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type TransactionType = 'sent' | 'received';

interface ItemProps {
  title: string;
  amount: number;
  date: string;
  photo: ImageProps;
  transactionType: TransactionType;
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
}: ItemProps) => {
  const {iconName, iconColor, statusText} = getTransactionDetails(
    transactionType,
  ) as TransactionDetails;
  const isRTL = false;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={photo} style={styles.userImage} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{title}</Text>
        <Text style={styles.usernameText}>@jonedoe42</Text>
        <Text style={styles.descriptionText}>Lorem ipsum</Text>
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
          <Feather name={iconName} size={16} color={iconColor} />
          <Text style={styles.amountMain}>{amount}</Text>
          <Text style={styles.amountDecimal}>.00 DH</Text>
        </View>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </View>
  );
};

const getTransactionDetails = (transactionType: TransactionType) => {
  if (transactionType === 'sent') {
    return {
      iconName: 'arrow-up-right',
      iconColor: 'red',
      statusText: 'envoyé',
    };
  } else {
    return {
      iconName: 'arrow-down-left', // Assuming this icon for received
      iconColor: 'green',
      statusText: 'reçu',
    };
  }
};

const HistoriqueScreen = () => {
  // const navigation = useNavigation();

  // useLayoutEffect(() => {
  //     navigation.setOptions({
  //         headerLeft: () => (
  //             <Pressable onPress={() => {
  //                 navigation.goBack();
  //             }}>
  //                 <SimpleLineIcons  name="arrow-left" size={ 22 } color={ colors.primary } />
  //             </Pressable>
  //         ),
  //         title: "DetailsScreen",
  //         // headerStyle: {
  //         //     backgroundColor: COLORS.PRIMARY,
  //         // },
  //         // headerTintColor: '#fff',
  //         // headerTitleStyle: {
  //         // fontWeight: 'bold',
  //         // },

  //     })
  // }, [])

  return (
    <View style={styles.mainContainer}>
      <SearchComponent />
      <View style={styles.spacer}></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%'}}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <TransactionItem
          title="john doe"
          amount={269}
          date="18 Août 2023"
          photo={require('../../assets/images/img5.jpg')}
          transactionType="sent"
        />
        <TransactionItem
          title="john doe"
          amount={199}
          date="16 Août 2023"
          photo={require('../../assets/images/img4.jpg')}
          transactionType="received"
        />
        <TransactionItem
          title="Inwi"
          amount={399}
          date="15 Août 2023"
          photo={require('../../assets/images/inwi.png')}
          transactionType="sent"
        />
        <TransactionItem
          title="Maroc Telecom"
          amount={232}
          date="14 Août 2023"
          photo={require('../../assets/images/maroc_telecom.jpg')}
          transactionType="received"
        />
        <TransactionItem
          title="Virgin"
          amount={777}
          date="12 Août 2023"
          photo={require('../../assets/images/pr1.jpg')}
          transactionType="sent"
        />
        <TransactionItem
          title="Inwi"
          amount={899}
          date="10 Août 2023"
          photo={require('../../assets/images/inwi.png')}
          transactionType="sent"
        />
        <TransactionItem
          title="James"
          amount={465}
          date="10 Août 2023"
          photo={require('../../assets/images/pr2.png')}
          transactionType="received"
        />
        <TransactionItem
          title="Orange"
          amount={122}
          date="09 Août 2023"
          photo={require('../../assets/images/orange.jpg')}
          transactionType="sent"
        />
        <TransactionItem
          title="john doe"
          amount={299}
          date="08 Août 2023"
          photo={require('../../assets/images/img5.jpg')}
          transactionType="sent"
        />
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
    paddingHorizontal: 20,
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
