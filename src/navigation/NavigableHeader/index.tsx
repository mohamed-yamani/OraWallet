import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import {data} from '../../screens/HomeScreen';
import React from 'react';
import Colors from '../../constants/Colors';
import Carousel from '../../components/common/carousel';

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
          <Icon name={'menu' as any} size={24} color="gray" />
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
            <Icon name={'close' as any} size={24} color="gray" />
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
  return (
    <View style={{height: CARD_HEIGHT + 60}}>
      <Carousel data={data} />
    </View>
  );
};

export const data = [
  {
    amount: '3,565',
    currency: 'USD',
    accountNumber: '2234 5678 9012 3456',
  },
  {
    amount: '2,565',
    currency: 'EUR',
    accountNumber: '3234 5678 9012 3456',
  },
  {
    amount: '5,565',
    currency: 'GBP',
    accountNumber: '4234 5678 9012 3451',
  },
  {
    amount: '8,565',
    currency: 'USD',
    accountNumber: '2234 5678 9012 3452',
  },
  {
    amount: '10,637',
    currency: 'EUR',
    accountNumber: '3234 5678 9012 3453',
  },
];
