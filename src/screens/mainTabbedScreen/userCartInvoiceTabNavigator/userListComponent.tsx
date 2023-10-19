import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RecipientItem from '../../../components/RecipientItem';
import React, {useState} from 'react';
import Colors from '../../../constants/Colors';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native-gesture-handler';
import PayBillModal from '../../../components/common/modals/PayBillModal';
import AddRecipientModal from '../../../components/common/modals/AddRecipientModal';
import UserDetailsModal from '../../../components/common/modals/UserDetailsModal';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const CARD_WIDTH = SCREEN_WIDTH < 768 ? 300 : SCREEN_WIDTH - 200;
const CARD_HEIGHT = SCREEN_WIDTH < 768 ? 151 : 250;

const UserListComponent = () => {
  const {t} = useTranslation();
  const isRTL = false;
  const [isAddRecipientModalVisible, setAddRecipientModalVisible] =
    useState(false);
  const [isUserDetailsModalVisible, setUserDetailsModalVisible] =
    useState(false);
  const [selctedRecipient, setSelectedRecipient] = useState({} as any);

  return (
    <View
      style={[
        styles.mainContainer,
        {height: SCREEN_HEIGHT - CARD_HEIGHT - 180},
      ]}>
      <AddRecipientModal
        visible={isAddRecipientModalVisible}
        onClose={() => setAddRecipientModalVisible(false)}
        onContinue={() => {
          console.log('onContinue pressed');
          setAddRecipientModalVisible(false);
        }}
      />

      <UserDetailsModal
        visible={isUserDetailsModalVisible}
        onClose={() => setUserDetailsModalVisible(false)}
        user={
          {
            name: selctedRecipient.name,
            imageSource: selctedRecipient.imageSource,
            description: 'Lorem ipsum',
          } as any
        }
      />

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
          <TouchableOpacity
            onPress={() => {
              setAddRecipientModalVisible(true);
            }} // Function to close the modal
          >
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
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setUserDetailsModalVisible(true);
              setSelectedRecipient({
                name: 'Rania Chaabane',
                imageSource: require('../../../assets/images/hiba.jpg'),
                description: 'Lorem ipsum',
              } as any);
            }}>
            <RecipientItem
              name="Rania Chaabane"
              imageSource={require('../../../assets/images/hiba.jpg')}
              description="Lorem ipsum"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setUserDetailsModalVisible(true);
              setSelectedRecipient({
                name: 'Adnan Khaled',
                imageSource: require('../../../assets/images/adnan.jpg'),
                description: 'Lorem ipsum',
              } as any);
            }}>
            <RecipientItem
              name="Adnan Khaled"
              imageSource={require('../../../assets/images/adnan.jpg')}
              description="Lorem ipsum"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setUserDetailsModalVisible(true);
              setSelectedRecipient({
                name: 'Hiba Ben Ammar',
                imageSource: require('../../../assets/images/cat.jpg'),
                description: 'Lorem ipsum',
              } as any);
            }}>
            <RecipientItem
              name="Hiba Ben Ammar"
              imageSource={require('../../../assets/images/cat.jpg')}
              description="Lorem ipsum"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setUserDetailsModalVisible(true);
              setSelectedRecipient({
                name: 'Najlaa Lassoued',
                imageSource: require('../../../assets/images/najlaa.jpg'),
                description: 'Lorem ipsum',
              } as any);
            }}>
            <RecipientItem
              name="Najlaa Lassoued"
              imageSource={require('../../../assets/images/najlaa.jpg')}
              description="Lorem ipsum"
            />
          </TouchableOpacity>
          <View style={{height: 100}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserListComponent;
