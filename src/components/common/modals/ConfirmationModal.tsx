import React from 'react';
import {View, Modal, StyleSheet, TouchableOpacity, Text} from 'react-native';
// import { AntDesign } from '@expo/vector-icons'; // Assuming you're using Expo
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../../constants/Colors';
import Button from '../button';

import SuccessIcon from '../../../assets/images/svgs/success-icon_g.svg';
import {useTranslation} from 'react-i18next';
// import {useTranslation} from 'react-i18next';

export default function ConfirmationModal(props: {
  visible: boolean;
  onClose: () => void;
}) {
  const isRTL = false;
  const {t} = useTranslation();

  return (
    <Modal visible={props.visible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.dialog}>
          <TouchableOpacity style={styles.closeButton} onPress={props.onClose}>
            <AntDesign name="close" size={24} color={Colors.midnightGray} />
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <SuccessIcon width={100} height={100} />
          </View>

          <Text style={styles.title}>{t('success')}</Text>

          <Text style={styles.description}>{t('successfulPayment')}</Text>

          <Button
            label={t('confirm')}
            onPress={props.onClose}
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

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.7)', // This will give a dim background when the modal is open
  },

  dialog: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 40,
    marginHorizontal: 20,
  },

  closeButton: {
    alignSelf: 'flex-end',
    height: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    marginBottom: 10,
  },

  codeInputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },

  title: {
    width: '100%',
    textAlign: 'center',
    color: '#48484A',
    fontSize: 34,
    fontFamily: 'Nunito-Bold',
  },

  description: {
    width: '100%',
    textAlign: 'center',
    color: '#48484A',
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    lineHeight: 22,
    marginTop: 20,
  },

  resendCode: {
    color: '#20B37C',
    fontSize: 16,
    fontFamily: 'Nunito-Black',
    fontWeight: '600',
    lineHeight: 22,
    marginTop: 20,
  },

  input: {
    width: 60,
    height: 80,
    margin: 5,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Nunito-Black',
    borderWidth: 0.5,
    borderColor: Colors.gray,
    borderRadius: 12,
  },

  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
});
