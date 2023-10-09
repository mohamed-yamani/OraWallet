import {View, Text} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RecipientItem from '../../../components/RecipientItem';
import React from 'react';
import Colors from '../../../constants/Colors';

const UserListComponent = () => {
  const isRTL = false;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.spacer} />
      <Text
        style={[
          styles.descriptionText,
          {
            textAlign: isRTL ? 'right' : 'left',
            width: '100%',
            paddingHorizontal: 16,
          },
        ]}>
        {'chooseRecipient'}
      </Text>
      <View style={styles.divider} />
      <Text
        style={[
          styles.factureTitle,
          {textAlign: 'left', width: '100%', paddingHorizontal: 16},
        ]}>
        {'destinataires'}
      </Text>

      <View
        style={{
          width: '100%',
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
            {'addRecipient'}
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
    </View>
  );
};

export default UserListComponent;
