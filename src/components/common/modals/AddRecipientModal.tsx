import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IconTextEnhancedInput} from '../IconTextEnhancedInput';
import Button from '../button';
import Colors from '../../../constants/Colors';
import {useTranslation} from 'react-i18next';
import React from 'react';
import UploadButton from '../../UploadButton';
import {ScrollView} from 'react-native-gesture-handler';

export default function AddRecipientModal({
  visible,
  onClose,
  onContinue,
}: {
  visible: boolean;
  onClose: () => void;
  onContinue: () => void;
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
          <ScrollView>
            <TouchableOpacity
              style={styles.closeIconContainer}
              onPress={onClose}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.titleText}>{t('addRecipient')}</Text>
            <Text style={styles.subtitleText}>
              {t('enterRecipientDetails')}
            </Text>
            <SectionTitle title={t('recipientName')} />
            <IconTextEnhancedInput placeholder={t('enterRecipientName')} />

            <SectionTitle title={t('recipientAccountNumber')} />
            <IconTextEnhancedInput
              placeholder={t('enterRecipientAccountNumber')}
            />

            <SectionTitle title={t('recipientPhone')} />
            <IconTextEnhancedInput placeholder={t('enterRecipientPhone')} />
            <SectionTitle title={t('recipientAddress')} />
            <IconTextEnhancedInput placeholder={t('enterRecipientAddress')} />
            <SectionTitle title={t('photo')} />
            <UploadButton />
            <Button
              label={t('continue')}
              onPress={onContinue}
              style={{backgroundColor: Colors.primary, marginTop: 20}}
              leftIcon={
                <AntDesign
                  name={isRTL ? 'left' : 'right'}
                  size={18}
                  color="white"
                />
              }
            />
          </ScrollView>
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
    width: '100%',
    textAlign: 'center',
    color: Colors.midnightGray,
    fontSize: 28,
    fontWeight: '300',
    fontFamily: 'Nunito-Bold',
  },

  subtitleText: {
    marginBottom: 20,
    width: '100%',
    textAlign: 'center',
    color: Colors.slateGray,
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Nunito-Regular',
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
});
