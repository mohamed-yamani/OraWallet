import {View, Text, Dimensions} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RecipientItem from '../../../components/RecipientItem';
import React from 'react';
import Colors from '../../../constants/Colors';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native-gesture-handler';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const CARD_WIDTH = SCREEN_WIDTH < 768 ? 300 : SCREEN_WIDTH - 200;
const CARD_HEIGHT = SCREEN_WIDTH < 768 ? 151 : 250;

const UserListComponent = () => {
  const {t} = useTranslation();
  const isRTL = false;

  return (
    <View
      style={[
        styles.mainContainer,
        {height: SCREEN_HEIGHT - CARD_HEIGHT - 180},
      ]}>
      <View style={styles.spacer} />
      <Text
        style={[
          styles.descriptionText,
          {
            textAlign: isRTL ? 'right' : 'left',
            width: '100%',
            paddingHorizontal: 16,
            color: Colors.slateGray,
          },
        ]}>
        {t('chooseRecipient')}
      </Text>
      <View style={styles.divider} />
      <Text
        style={[
          styles.factureTitle,
          {textAlign: 'left', width: '100%', paddingHorizontal: 16},
        ]}>
        {t('destinataires')}
      </Text>

      <ScrollView style={{flex: 1}}>
        <View
          style={{
            width: SCREEN_WIDTH,
          }}>
          <View
            style={[
              styles.factureContainer,
              {
                justifyContent: isRTL ? 'space-between' : 'flex-start',
              },
            ]}>
            <View
              style={{
                height: 48,
                width: 48,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#daf0e8',
                overflow: 'hidden',
              }}>
              <Ionicons name="add" size={24} color={Colors.primary} />
            </View>
            <Text
              style={{
                color: Colors.primary,
                fontSize: 16,
                fontFamily: 'Nunito-Bold',
              }}>
              {t('addRecipient')}
            </Text>
          </View>

          <RecipientItem
            name="Peer name"
            imageSource={require('../../../assets/images/img1.jpg')}
            description="Lorem ipsum"
          />
          <RecipientItem
            name="Driver name"
            imageSource={require('../../../assets/images/img2.jpg')}
            description="Lorem ipsum"
          />
          <RecipientItem
            name="Delivery guy"
            imageSource={require('../../../assets/images/img3.jpg')}
            description="Lorem ipsum"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserListComponent;
