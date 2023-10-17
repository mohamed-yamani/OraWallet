import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import {data} from '../../screens/HomeScreen';
import React, {useEffect, useState} from 'react';
import Colors from '../../constants/Colors';
import Carousel from '../../components/common/carousel';
import {postToWallet} from '../../api/api';
import {Account, Wallet} from '../../types/wallet';

const CustomHeader: React.FC<{
  title: string;
  navigation: any;
  showCloseButton?: boolean;
  showCarousel?: boolean;
}> = ({title, navigation, showCarousel, showCloseButton}) => {
  const isRTL = false;

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View
        style={{
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.white,
          flexDirection: isRTL ? 'row-reverse' : 'row',
          // marginTop: 20,
        }}>
        <TouchableOpacity
          style={{position: 'absolute', left: 10}}
          onPress={() => navigation.openDrawer()}>
          {/* <Ionicons
            name="menu"
            size={30}
            color="black"
            // style={{ position: 'absolute', left: 10 }}
          /> */}
          <Icon name={'menu' as any} size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontFamily: 'Nunito-Bold',
          }}>
          {title}
        </Text>
        {showCloseButton === true && (
          <TouchableOpacity
            style={{position: 'absolute', right: 10}}
            onPress={() => navigation.pop()}>
            {/* <Ionicons
              name="close"
              size={30}
              color="black"
              // style={{ position: 'absolute', left: 10 }}
            /> */}
            <Icon name={'close' as any} size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      {showCarousel === true && <CarouselWithHeader />}
    </SafeAreaView>
  );
};

export default CustomHeader;

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CARD_HEIGHT = SCREEN_WIDTH < 768 ? 151 : 250;

const CarouselWithHeader: React.FC = () => {
  const [walletData, setWalletData] = useState<Wallet | null>(null);

  const walletId = '0606060606';
  const dataToSend = {
    // ... your data to send
  };

  const fetchWalletData = async () => {
    try {
      const responseData = await postToWallet(
        walletId,
        dataToSend,
        'wallet/0606060606',
      );
      setWalletData(responseData.wallet as Wallet);
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
    <View style={{height: CARD_HEIGHT + 60}}>
      <Carousel
        data={walletData.accounts || []}
        walletBalance={walletData.walletBalance || '0'}
      />
    </View>
  );
};
