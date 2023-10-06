import React, {useCallback, useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import Colors from '../../../constants/Colors';

type LayoutChangeEvent = {
  nativeEvent: {
    layout: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
};

const telecomProviders = [
  {
    id: 1,
    name: 'marocTelecom',
    image: require('../../../assets/images/maroc-telecom.png'),
  },
  {
    id: 2,
    name: 'Inwi',
    image: require('../../../assets/images/inwi.png'),
  },
  {
    id: 3,
    name: 'Orange',
    image: require('../../../assets/images/orange.jpg'),
  },
];

const utilityProviders = [
  {
    id: 5,
    name: 'ONEE',
    image: require('../../../assets/images/onee.jpg'),
  },
  {
    id: 6,
    name: 'ONEP',
    image: require('../../../assets/images/onep.jpg'),
  },
  {
    id: 1,
    name: 'Lydec',
    image: require('../../../assets/images/lydec.jpg'),
  },
  {
    id: 2,
    name: 'Radeema',
    image: require('../../../assets/images/radeema.jpg'),
  },
  {
    id: 3,
    name: 'Redal',
    image: require('../../../assets/images/Redal.jpg'),
  },
  {
    id: 4,
    name: 'Amendis',
    image: require('../../../assets/images/Amendi.jpg'),
  },
];

const taxAndAdministrationProviders = [
  {
    id: 1,
    name: 'MunicipalTax',
    image: require('../../../assets/images/municipal-tax.jpg'),
  },
  {
    id: 2,
    name: 'IncomeTax',
    image: require('../../../assets/images/Income-tax.png'),
  },
  {
    id: 3,
    name: 'MunicipalOffice',
    image: require('../../../assets/images/municipal-office.jpg'),
  },
  {
    id: 4,
    name: 'HealthDepartment',
    image: require('../../../assets/images/health-department.png'),
  },
];

type ServiceEntity = {
  id: number;
  name: string;
  image: ImageSourcePropType;
};

function ShoppingCartComponent() {
  const [isExpanded, setExpanded] = useState({});
  const animatedHeight = useRef(new Animated.Value(72)).current;
  const rotateValue = useRef(new Animated.Value(0)).current; // For arrow rotation
  const scrollViewRef = useRef<ScrollView | null>(null);
  const buttonPositions = useRef<any>({}).current;
  const isRTL = false;

  const getButtonLayoutHandler = useCallback(
    (buttonId: string) => (event: LayoutChangeEvent) => {
      // Store the position (y-coordinate) of the button by its ID
      buttonPositions[buttonId] = event.nativeEvent.layout.y;
    },
    [],
  );

  const toggleExpansion = (buttonId: string) => () => {
    Animated.parallel([
      Animated.timing(rotateValue, {
        toValue: isExpanded ? 0 : 1,
        duration: 300,
        useNativeDriver: true, // rotation uses native driver
      }),
    ]).start(() => {
      setExpanded(!isExpanded);
      const position = buttonPositions[buttonId];
      if (position !== undefined) {
        scrollViewRef.current?.scrollTo({
          y: position,
          animated: true,
        });
      }
    });
  };

  return (
    <View style={styles.facturesScreenContainer}>
      <View style={{height: 10}} />
      <Text
        style={[
          styles.descriptionText,
          {
            textAlign: isRTL ? 'right' : 'left',
            width: '100%',
            paddingHorizontal: 16,
          },
        ]}>
        {'chooseBasket'}
      </Text>
      <View style={styles.spacer} />
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        {/* Téléphonie et Internet */}

        <CollapsibleItemBox
          buttonId="button1"
          title={'telephonyAndInternet'}
          icons={['smartphone', 'wifi']}
          scrollAnimation={toggleExpansion}
          getButtonLayoutHandler={getButtonLayoutHandler}
          animatedHeight={animatedHeight}
          isExpanded={isExpanded}
          serviceList={telecomProviders}
        />

        {/* Eau et Electricité */}

        <View style={styles.divider} />

        <CollapsibleItemBox
          buttonId="button2"
          title={'waterAndElectricity'}
          icons={['user', 'user']}
          scrollAnimation={toggleExpansion}
          getButtonLayoutHandler={getButtonLayoutHandler}
          animatedHeight={animatedHeight}
          isExpanded={isExpanded}
          serviceList={utilityProviders}
        />

        {/* Taxes et Administrations */}
        <View style={styles.divider} />

        <CollapsibleItemBox
          buttonId="button3"
          title={'taxesAndAdministrations'}
          icons={['book']}
          scrollAnimation={toggleExpansion}
          getButtonLayoutHandler={getButtonLayoutHandler}
          animatedHeight={animatedHeight}
          isExpanded={isExpanded}
          serviceList={taxAndAdministrationProviders}
        />
      </ScrollView>
    </View>
  );
}

function CollapsibleItemBox({
  scrollAnimation,
  getButtonLayoutHandler,
  buttonId,
  title,
  icons,
  serviceList,
}: {
  scrollAnimation: any;
  getButtonLayoutHandler: any;
  animatedHeight: any;
  isExpanded: any;
  buttonId: string;
  title: string;
  icons: string[];
  serviceList: ServiceEntity[];
}) {
  const animatedHeight = useRef(new Animated.Value(72)).current;
  const rotateValue = useRef(new Animated.Value(0)).current; // For arrow rotation

  const [isExpanded, setExpanded] = useState(false);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  // const {isRTL} = useLayout();
  const isRTL = false;

  const toggleExpansion = (buttonId: string) => () => {
    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue: isExpanded ? 72 : 93 * serviceList.length + 72,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(rotateValue, {
        toValue: isExpanded ? 0 : 1,
        duration: 300,
        useNativeDriver: true, // rotation uses native driver
      }),
    ]).start(() => {
      setExpanded(!isExpanded);
      const position = buttonPositions[buttonId];
    });
  };

  const handlePress = () => {
    toggleExpansion(buttonId)();
    scrollAnimation(buttonId)();
  };

  const buttonPositions = useRef<any>({}).current;
  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      onLayout={getButtonLayoutHandler(buttonId)}>
      <Animated.View
        style={{
          alignItems: 'center',
          height: animatedHeight,
          marginHorizontal: 15,
          overflow: 'hidden',
          backgroundColor: '#FAFAFA',
          borderRadius: 24,
        }}>
        <View
          style={[
            styles.factureContainer,
            {
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
            },
          ]}>
          <View
            style={{
              height: 48,
              width: 48,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#AEAEB2',
              overflow: 'hidden',
            }}>
            <View
              style={{
                height: 48,
                width: 48,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                flexDirection: isRTL ? 'row-reverse' : 'row',
              }}>
              {icons.map((icon, index) => (
                <Feather
                  key={index}
                  name={icon as any}
                  size={16}
                  color={Colors.midnightGray}
                />
              ))}
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              // alignItems: isRTL ? 'space-between' : 'flex-start',
              flex: 10,
            }}>
            <Text style={styles.factureTitle}>{title}</Text>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                fontFamily: 'Nunito-Regular',
                textAlign: isRTL ? 'right' : 'left',
              }}>
              {serviceList.map(item => item.name).join(', ')}
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Animated.View style={{transform: [{rotate}]}}>
              <Entypo
                name="chevron-small-up"
                size={24}
                color={Colors.primary}
              />
            </Animated.View>
          </View>
        </View>
        {isExpanded && (
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: 10,
              width: '100%',
            }}>
            {serviceList.map((internetItem, index) => (
              <Animated.View
                key={index}
                style={{width: '100%', marginBottom: 10}}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      flexDirection: isRTL ? 'row-reverse' : 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: 10,
                      backgroundColor: 'transparent',
                    },
                  ]}>
                  <View style={styles.factureImageContainer}>
                    <Image
                      source={internetItem.image}
                      style={{
                        height: 48,
                        width: 48,
                      }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.buttonText}>{internetItem.name}</Text>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
}

export default ShoppingCartComponent;
