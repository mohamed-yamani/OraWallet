import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../../constants/Colors';
import {useTranslation} from 'react-i18next';
import Button from '../button';

export default function UserDetailsModal({
  visible,
  onClose,
  user,
}: {
  visible: boolean;
  onClose: () => void;
  user: {
    name: string;
    description: string;
    imageSource: ImageSourcePropType;
  };
}) {
  const {t} = useTranslation();

  const renderDetailRow = (label: string, value: string) => (
    <View style={styles.detailRow}>
      <Text style={styles.labelText}>{label + ' :'}</Text>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <TouchableOpacity style={styles.closeIconContainer} onPress={onClose}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.header}>
            <Image source={user.imageSource} style={styles.image} />
            <Text style={styles.titleText}>{user.name}</Text>
          </View>
          {renderDetailRow(t('mail'), 'test@1337.ma')}
          {renderDetailRow(t('phone'), '+212 6 66 66 66 66')}
          {renderDetailRow(t('address'), 'Rabat, Maroc')}
          {renderDetailRow(t('account_number'), '*********1234')}
          <Text style={styles.subtitleText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, velit ut facilisis ultrices, nisl velit ultrices massa, ut
            aliquet lectus nisi sed lorem.{' '}
          </Text>
          <Button
            label={t('sendMessage')}
            onPress={onClose}
            style={{backgroundColor: Colors.primary, marginTop: 20}}
            leftIcon={<AntDesign name={'message1'} size={18} color="white" />}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  dialog: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    maxHeight: '80%',
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
  header: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  titleText: {
    color: Colors.midnightGray,
    fontSize: 28,
    fontWeight: '300',
    fontFamily: 'Nunito-Bold',
  },
  detailRow: {
    height: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  labelText: {
    color: Colors.primary,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  valueText: {
    color: Colors.slateGray,
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
  },
  subtitleText: {
    marginBottom: 20,
    width: '100%',
    textAlign: 'left',
    color: Colors.slateGray,
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Nunito-Regular',
  },
});
