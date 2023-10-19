import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type PriceProps = {
  wholePart: number;
  decimalPart: number;
  currency: string;
};

const PriceDisplay: React.FC<PriceProps> = ({
  wholePart,
  decimalPart,
  currency,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.wholePartText}>{wholePart}</Text>
      <View style={styles.decimalContainer}>
        <Text style={styles.decimalText}>
          .{decimalPart.toString().padStart(2, '0')}
        </Text>
        <Text style={styles.currencyText}>{currency}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  wholePartText: {
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'Nunito-Bold',
  },
  decimalContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  decimalText: {
    fontSize: 10,
    marginTop: 2,
    fontFamily: 'Nunito-Bold',
    fontWeight: '800',
  },
  currencyText: {
    fontSize: 10,
    marginTop: 2,
    fontFamily: 'Nunito-Bold',
    fontWeight: '800',
  },
});

export default PriceDisplay;
