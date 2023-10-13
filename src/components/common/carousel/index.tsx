import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../constants/Colors';
import {useTranslation} from 'react-i18next';
import {BlurView} from '@react-native-community/blur';
import {Account} from '../../../types/wallet';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const CARD_WIDTH = SCREEN_WIDTH < 768 ? 300 : SCREEN_WIDTH - 200;
const CARD_HEIGHT = SCREEN_WIDTH < 768 ? 151 : 250;
const RADIUS = 24;
const SPACING = 12;

interface CarouselProps {
  data: Account[];
  walletBalance: String;
}

const Carousel: React.FC<CarouselProps> = ({data, walletBalance}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [isAmountVisible, setIsAmountVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {t} = useTranslation();
  // const { isRTL } = useLayout();

  const renderItem = ({item, index}: {item: Account; index: number}) => {
    return (
      <View
        style={{
          position: 'relative',
          height: CARD_HEIGHT + 600,
          marginLeft:
            currentIndex === index && currentIndex !== data.length - 1
              ? SPACING
              : 0,
          marginRight:
            currentIndex === data.length - 1 && index === data.length - 1
              ? SPACING
              : 0,
        }}>
        {/* Blur Layer */}

        {currentIndex !== index && Platform.OS === 'ios' && (
          <BlurView
            blurType="light"
            blurAmount={currentIndex === index ? 0 : 5}
            style={{
              position: 'absolute',
              width: CARD_WIDTH + SPACING * 2,
              height: CARD_HEIGHT + 20,
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: 20,
              borderRadius: RADIUS,
              shadowColor: '#000',
              zIndex: 1000,
              left: index === 0 ? -10 : 2,
            }}
            reducedTransparencyFallbackColor="white"
          />
        )}

        {/* Original Animated Content */}
        <Animated.View
          style={[
            styles.card,
            {
              marginLeft: index === 0 ? -10 : SPACING,
              opacity:
                currentIndex === index ? 1 : Platform.OS === 'ios' ? 0.5 : 0.2,
              shadowColor:
                currentIndex !== index && Platform.OS === 'ios'
                  ? 'transparent'
                  : Colors.primary,
              shadowOpacity:
                currentIndex !== index && Platform.OS === 'ios' ? 0 : 0.16,
              shadowRadius:
                currentIndex !== index && Platform.OS === 'ios' ? 0 : 3.84,
              elevation:
                currentIndex !== index && Platform.OS === 'ios' ? 0 : 3,
            },
          ]}>
          <Text style={styles.amountTitleText}>{t('account')}</Text>
          <Text style={styles.accountNumberText}>
            {isAmountVisible
              ? formatAccountNumber(item.accountNumber)
              : '**** **** **** ****'}
          </Text>
          <View style={{height: 15}} />
          <Text style={styles.currencyText}>{t('oraBalance')}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <Text style={styles.amountText}>
                {/* {isAmountVisible ? item.amount : '*****'} */}
                {isAmountVisible ? walletBalance : '*****'}
              </Text>
              {isAmountVisible && <Text style={styles.dhText}>.00 DH</Text>}
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log('Eye Icon Pressed');
                setIsAmountVisible(!isAmountVisible);
                console.log('Is Amount Visible:', isAmountVisible);
              }}>
              <View style={styles.eyeIconContainer}>
                {isAmountVisible ? (
                  <Icon name={'visibility' as any} size={16} color="white" />
                ) : (
                  <Icon
                    name={'visibility-off' as any}
                    size={16}
                    color="white"
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
  };

  const formatAccountNumber = (number: string) => {
    return number.replace(/(\d{4})/g, '$1 ').trim();
  };

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        setCurrentIndex(Math.round(scrollPosition / (CARD_WIDTH + SPACING)));
        const currentIndex = Math.round(
          scrollPosition / (CARD_WIDTH + SPACING),
        );
        // console.log("Current Index:", currentIndex);
      },
    },
  );

  return (
    <View style={styles.carouselContainer}>
      <Animated.FlatList<Account>
        horizontal
        data={data}
        keyExtractor={item => item.accountNumber}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + SPACING}
        renderItem={renderItem}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingLeft: SPACING,
        }}
        initialScrollIndex={0}
        getItemLayout={(data, index) => ({
          length: CARD_WIDTH + SPACING,
          offset: (CARD_WIDTH + SPACING) * index,
          index,
        })}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      <View style={styles.pagination}>
        {data.map((_, index) => {
          const inputRange = [
            (index - 1) * (CARD_WIDTH + SPACING),
            index * (CARD_WIDTH + SPACING),
            (index + 1) * (CARD_WIDTH + SPACING),
          ];

          const dotOpacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 20, 8],
            extrapolate: 'clamp',
          });

          const dotColor = scrollX.interpolate({
            inputRange,
            outputRange: [Colors.grayDark, Colors.primary, Colors.grayDark],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index.toString()}
              style={[
                styles.dot,
                {
                  opacity: dotOpacity,
                  width: dotWidth,
                  backgroundColor: dotColor,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    marginBottom: 10,
  },

  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    borderRadius: RADIUS,
    shadowColor: Colors.primary,
    shadowOffset: {width: 0, height: 2}, // Offset shadow slightly downward
    shadowOpacity: 0.16,
    shadowRadius: 3.84,
    elevation: 3, // This is for Android shadow
    zIndex: 2,
    marginTop: 8,
    marginBottom: 30,
  },

  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    marginHorizontal: 4,
  },

  amountTitleText: {
    fontSize: 16,
    color: 'white',
  },

  amountText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },

  currencyText: {
    fontSize: 16,
    color: 'white',
  },

  accountNumberText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },

  dhText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 3,
    fontFamily: 'Nunito-SemiBold',
  },

  eyeIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Carousel;
