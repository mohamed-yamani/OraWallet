import React, {useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IconTextEnhancedInput} from '../IconTextEnhancedInput';
import Button from '../button';
import Colors from '../../../constants/Colors';

export default function PayBillModal({
  visible,
  onClose,
  onContinue,
}: {
  visible: boolean;
  onClose: () => void;
  onContinue: () => void;
}) {
  const isRTL = false;

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
          <Text style={styles.titleText}>{'payBill'}</Text>
          <Text style={styles.subtitleText}>{'enterBillDetails'}</Text>
          <SectionTitle title={'billNumber'} />
          <IconTextEnhancedInput placeholder={'enterBillNumber'} />
          <SectionTitle title={'amount'} />
          <IconTextEnhancedInput placeholder={'enterAmount'} />
          <SectionTitle title={'reason'} />
          <IconTextEnhancedInput placeholder={'enterReason'} />
          <Button
            label={'continue'}
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
