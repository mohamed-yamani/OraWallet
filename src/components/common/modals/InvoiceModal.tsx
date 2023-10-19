import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../../constants/Colors';
import {useTranslation} from 'react-i18next';
import Button from '../button';
import PriceDisplay from '../../PriceDisplay';

export default function InvoiceDetailsModal({
  visible,
  onClose,
  invoice,
}: {
  visible: boolean;
  onClose: () => void;
  invoice: {
    title: string;
    description: string;
    itemCount: number;
    priceWhole: number;
    priceDecimal: number;
    imageSource: any;
  };
}) {
  const {t} = useTranslation();

  const renderDetailRow = (label: string, value: string | number) => (
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
          {/* <Text style={styles.titleText}>{'test'}</Text> */}
          <View style={styles.header}>
            <View style={styles.imageContainer}>
              <Image source={invoice.imageSource} style={styles.image} />
            </View>
            <Text style={styles.titleText}>{invoice.title}</Text>
          </View>
          {renderDetailRow(t('Description'), invoice.description)}
          {renderDetailRow(t('Item Count'), invoice.itemCount)}

          <View style={styles.detailRow}>
            <Text style={styles.labelText}>{t('Price') + ' :'}</Text>
            <PriceDisplay
              currency="DH"
              decimalPart={invoice.priceDecimal}
              wholePart={invoice.priceWhole}
            />
          </View>

          <Button
            label={t('Close')}
            onPress={onClose}
            style={{backgroundColor: Colors.primary, marginTop: 20}}
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
    maxHeight: '120%',
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
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
    marginBottom: 20,
  },
  image: {
    height: 120,
    width: 120,
  },
  titleText: {
    color: Colors.midnightGray,
    fontSize: 28,
    fontWeight: '500',
    fontFamily: 'Nunito-Bold',
  },
  detailRow: {
    height: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Nunito-Regular',
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
  imageContainer: {
    height: 120,
    width: 120,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#AEAEB2',
    overflow: 'hidden',
  },
});
