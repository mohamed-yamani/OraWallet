import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
// import colors from '../../themes/colors';
import RecipientItem from '../RecipientItem';
import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';

const Destinataires = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.factureContainer}>
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

      <Text style={styles.lastDestinatairesTitle}>{t('recentRecipients')}</Text>
      <ScrollView>
        <RecipientItem
          name="Peer name"
          imageSource={require('../../assets/images/img1.jpg')}
          description="Lorem ipsum"
        />
        <RecipientItem
          name="Driver name"
          imageSource={require('../../assets/images/img2.jpg')}
          description="Lorem ipsum"
        />
        <RecipientItem
          name="Delivery guy"
          imageSource={require('../../assets/images/img3.jpg')}
          description="Lorem ipsum"
        />
        <RecipientItem
          name="Peer name"
          imageSource={require('../../assets/images/img1.jpg')}
          description="Lorem ipsum"
        />
        <RecipientItem
          name="Driver name"
          imageSource={require('../../assets/images/img2.jpg')}
          description="Lorem ipsum"
        />
        <RecipientItem
          name="Delivery guy"
          imageSource={require('../../assets/images/img3.jpg')}
          description="Lorem ipsum"
        />
        <RecipientItem
          name="Peer name"
          imageSource={require('../../assets/images/img1.jpg')}
          description="Lorem ipsum"
        />
        <RecipientItem
          name="Driver name"
          imageSource={require('../../assets/images/img2.jpg')}
          description="Lorem ipsum"
        />
        <RecipientItem
          name="Delivery guy"
          imageSource={require('../../assets/images/img3.jpg')}
          description="Lorem ipsum"
        />
        <View style={{height: 30}} />
      </ScrollView>
    </View>
  );
};

export default Destinataires;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },

  factureContainer: {
    alignItems: 'center',
    height: 72,
    marginHorizontal: 15,
    padding: 12,
    backgroundColor: '#FAFAFA',
    borderRadius: 24,
    marginTop: 10,

    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },

  lastDestinatairesTitle: {
    color: Colors.midnightGray,
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  iconContainer: {
    height: 48,
    width: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#AEAEB2',
    overflow: 'hidden',
  },

  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
});
