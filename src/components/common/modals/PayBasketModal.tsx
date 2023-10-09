import React, {useRef, useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  Animated,
  Image,
  KeyboardTypeOptions,
} from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import colors from '../../src/themes/colors';
// import Button from '../../src/components/Button';
// import {useTranslation} from 'react-i18next';
// import {useLayout} from '../../src/contexts/LayoutContext';
// import {Ionicons, Entypo} from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IconTextEnhancedInput} from '../IconTextEnhancedInput';
import Colors from '../../../constants/Colors';
import Button from '../button';
import {useTranslation} from 'react-i18next';

export default function PayBasketModal({
  visible,
  onClose,
  onPay,
}: {
  visible: boolean;
  onClose: () => void;
  onPay: () => void;
}) {
  const isRTL = false;
  const {t} = useTranslation();

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.overlay}>
        <View
          style={[
            styles.dialog,
            {height: Dimensions.get('window').height - 100},
          ]}>
          <TouchableOpacity style={styles.closeIconContainer} onPress={onClose}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.titleText}>{t('payBasket')}</Text>
          <Text style={styles.subtitleText}>{t('payOngoingBasket')}</Text>
          <SectionTitle title={t('debitWallet')} />
          <MoneyTransferItem
            imageSource={require('../../../assets/images/img4.jpg')}
            title="John Doe"
            description={t('wallet')}
            isProfilePicture={true}
          />
          <SectionTitle title="Basket Details" />

          {/* Basket Details */}
          <CollapsibleItemBox />

          <SectionTitle title={t('amount')} />
          <IconTextEnhancedInput
            placeholder="850.00"
            rightText={isRTL ? '' : 'DH'}
            leftText={isRTL ? 'DH' : ''}
            inputType="numeric"
          />
          <SectionTitle title={t('reason')} />
          <IconTextEnhancedInput placeholder={t('indicateTheReason')} />
          <Button
            label={t('pay')}
            onPress={onPay}
            style={{backgroundColor: Colors.primary, marginTop: 20}}
            leftIcon={
              <AntDesign
                name={isRTL ? 'left' : 'right'}
                size={18}
                color="white"
              />
            }
          />
        </View>
      </View>
    </Modal>
  );
}

const SectionTitle = ({title}: {title: string}) => {
  const {width} = Dimensions.get('window');
  const isRTL = false;
  return (
    <View
      style={{
        flexDirection: isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        height: 30,
        width: width - 80,
      }}>
      <Text style={styles.sectionTitleStyle}>{title}</Text>
    </View>
  );
};

function MoneyTransferItem({
  imageSource,
  title,
  description,
  isProfilePicture = false,
}: {
  imageSource: any;
  title: string;
  description: string;

  isProfilePicture?: boolean;
}) {
  const isRTL = false;
  return (
    <View
      style={[
        styles.factureContainer,
        {flexDirection: isRTL ? 'row-reverse' : 'row'},
      ]}>
      <View style={styles.factureImageContainer}>
        <Image
          source={imageSource}
          style={[
            styles.factureImage,
            {
              width: isProfilePicture ? '100%' : '80%',
              height: isProfilePicture ? '100%' : '80%',
            },
          ]}
        />
      </View>
      <View
        style={[
          styles.factureTextBox,
          {alignItems: isRTL ? 'flex-end' : 'flex-start'},
        ]}>
        <Text style={styles.factureTitle}>{title}</Text>
        <Text style={styles.factureDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },

  dialog: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
    marginHorizontal: 20,
  },

  closeIconContainer: {
    alignSelf: 'flex-end',
    height: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    marginBottom: 10,
  },

  titleText: {
    marginTop: 20,
    // marginBottom: 20,
    width: '100%',
    textAlign: 'center',
    color: Colors.midnightGray,
    fontSize: 28,
    fontWeight: '300',
    fontFamily: 'Nunito-Bold',
    // lineHeight: 22,
  },

  subtitleText: {
    // marginTop: 20,
    marginBottom: 20,
    width: '100%',
    textAlign: 'center',
    color: Colors.slateGray,
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Nunito-Regular',
    // lineHeight: 22,
  },

  sectionTitleStyle: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    color: Colors.midnightGray,
    textAlign: 'left',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D1D6',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    height: 50,
    marginTop: 10,
  },

  textInput: {
    flex: 1,
    fontFamily: 'Nunito-Regular',
  },

  rightText: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'Nunito-Regular',
  },

  factureContainer: {
    alignItems: 'center',
    height: 56,
    // marginHorizontal: 15,
    backgroundColor: Colors.mutedBlueGray,
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
    height: 40,
    width: 40,
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

  factureTitle: {
    color: Colors.slateGray,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
  },

  factureDescription: {
    color: Colors.midnightGray,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },

  factureTextBox: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    flex: 1,
  },
});

function CollapsibleItemBox({}: {}) {
  const {t} = useTranslation();
  const animatedHeight = useRef(new Animated.Value(80)).current;
  const rotateValue = useRef(new Animated.Value(0)).current; // For arrow rotation

  const [isExpanded, setExpanded] = useState(false);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const isRTL = false;

  const toggleExpansion = (buttonId: string) => () => {
    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue: isExpanded ? 80 : 140,
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

  const buttonPositions = useRef<any>({}).current;
  return (
    <TouchableOpacity
      style={{width: '100%'}}
      onPress={() => toggleExpansion('internet')()}
      onLayout={event => {
        buttonPositions['internet'] = event.nativeEvent.layout.y;
      }}>
      <Animated.View
        style={{
          alignItems: 'center',
          height: animatedHeight,
          width: '100%',
          overflow: 'hidden',
          borderRadius: 12,
          borderWidth: 1,
          borderColor: '#D1D1D6',
        }}>
        <View
          style={[
            styles.factureContainer,
            {
              backgroundColor: Colors.white,
              flexDirection: isRTL ? 'row-reverse' : 'row',
              height: 80,
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
            },
          ]}>
          <Entypo name="wallet" size={24} color="black" />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: isRTL ? 'flex-end' : 'flex-start',
              flex: 10,
            }}>
            <Text style={styles.factureTitle}>{t('compte')} : ********85</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <Text style={styles.factureDescription}>2.995</Text>
              <Text
                style={[
                  styles.factureDescription,
                  {
                    fontSize: 12,
                    paddingBottom: 0,
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                  },
                ]}>
                ,00DH
              </Text>
            </View>
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
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </Text>
          </View>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
}
